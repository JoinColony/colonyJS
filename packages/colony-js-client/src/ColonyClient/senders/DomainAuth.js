/* @flow */
/* eslint-disable no-underscore-dangle */

import ContractClient from '@colony/colony-js-contract-client';
// eslint-disable-next-line max-len
import type { ContractMethodSenderArgs } from '@colony/colony-js-contract-client';

import {
  COLONY_ROLE_ARCHITECTURE,
  COLONY_ROLES,
  DEFAULT_DOMAIN_ID,
  FUNDING_POT_TYPE_DOMAIN,
  FUNDING_POT_TYPE_EXPENDITURE,
  FUNDING_POT_TYPE_PAYMENT,
  FUNDING_POT_TYPE_TASK,
  REWARDS_POT_ID,
} from '../../constants';

import type { ColonyClient } from '../../index';

type ColonyRole = $Keys<typeof COLONY_ROLES>;

type PermissionType = {|
  // the role required
  roles: ColonyRole[],
  // name of the input value conatining the domainId, or function to get the domainId
  domainIds:
    | Array<string | ((inputValues: Object) => Promise<number>)>
    | ((inputValues: Object) => Promise<number[]>),
  // the name of the output value to set as the permisisonDomainId
  permissionDomainIdName: string,
  // the name of the output value to set as the childSkillIndex
  childSkillIndexNames: string[],
  // address for which the permission is required (default of current wallet address)
  address?: string | (() => Promise<string>),
|};

export const getDomainIdFromPot = async (potId: number, colonyClient: *) => {
  if (potId === REWARDS_POT_ID) {
    return DEFAULT_DOMAIN_ID;
  }
  const { type, typeId } = await colonyClient.getFundingPot.call({ potId });
  if (type === FUNDING_POT_TYPE_DOMAIN) {
    return typeId;
  }
  if (type === FUNDING_POT_TYPE_TASK) {
    const { domainId } = await colonyClient.getTask.call({ taskId: typeId });
    return domainId;
  }
  if (type === FUNDING_POT_TYPE_PAYMENT) {
    const { domainId } = await colonyClient.getPayment.call({
      paymentId: typeId,
    });
    return domainId;
  }
  if (type === FUNDING_POT_TYPE_EXPENDITURE) {
    const { domainId } = await colonyClient.getExpenditure.call({
      expenditureId: typeId,
    });
    return domainId;
  }
  throw new Error('Rewards pot has no domain!');
};

export default class DomainAuth<
  InputValues: *,
  OutputValues: *,
  ContractData: *,
> extends ContractClient.Sender<
  InputValues,
  OutputValues,
  ColonyClient,
  ContractData,
> {
  _permissions: PermissionType[];

  constructor({
    client,
    defaultGasLimit,
    permissions,
    validateEmpty,
    ...rest
  }: ContractMethodSenderArgs<ColonyClient> & {
    permissions: PermissionType[],
  }) {
    super({
      client,
      defaultGasLimit,
      validateEmpty,
      ...rest,
    });
    this._permissions = permissions;
  }

  async estimate(inputValues: *) {
    // if for some reason we don't have the required methods, then throw
    if (
      !(
        this.client.networkClient &&
        this.client.networkClient.getParentSkillId &&
        this.client.hasColonyRole
      )
    ) {
      throw new Error('Client not compatible with DomainAuth sender');
    }

    // combine with default values
    const inputValuesWithDefaults = {
      ...(this.defaultValues || {}),
      ...inputValues,
    };

    // get proof input values
    const proofs = await this.getPermissionProofs(inputValuesWithDefaults);

    return super.estimate({
      ...inputValuesWithDefaults,
      ...proofs,
    });
  }

  async send(inputValues: InputValues, options: *) {
    // if for some reason we don't have the required methods, then throw
    if (
      !(
        this.client.networkClient &&
        this.client.networkClient.getParentSkillId &&
        this.client.hasColonyRole
      )
    ) {
      throw new Error('Client not compatible with DomainAuth sender');
    }

    // combine with default values
    const inputValuesWithDefaults = {
      ...(this.defaultValues || {}),
      ...inputValues,
    };

    // get proof input values
    const proofs = await this.getPermissionProofs(inputValuesWithDefaults);

    return super.send(
      {
        ...inputValuesWithDefaults,
        ...proofs,
      },
      options,
    );
  }

  /**
   * For each required permission, get the permissionDomainId and
   * childSkillIndex as proof of permission, under the specified input value
   * keys. Return an object of input values.
   */
  async getPermissionProofs(inputValues: InputValues): Promise<Object> {
    const proofs = await Promise.all(
      this._permissions.map(
        async ({
          roles,
          domainIds: inputDomainIds,
          permissionDomainIdName,
          childSkillIndexNames,
          address: inputAddress,
        }) => {
          // Just check the first role, initially
          const [role, ...otherRoles] = roles;

          // resolve the functions or fetch from inputValues
          const domainIds =
            typeof inputDomainIds === 'function'
              ? await inputDomainIds(inputValues)
              : await Promise.all(
                  inputDomainIds.map(async inputDomainId =>
                    typeof inputDomainId === 'function'
                      ? inputDomainId(inputValues)
                      : inputValues[inputDomainId],
                  ),
                );

          // throw if mismatch
          if (domainIds.length !== childSkillIndexNames.length) {
            throw new Error(
              'Number of domainIds must match number of childSkillIndexes',
            );
          }

          // resolve the  address
          const address =
            (typeof inputAddress === 'function'
              ? await inputAddress()
              : inputAddress) ||
            (await this.client.adapter.wallet.getAddress());

          const permissionDomains = await Promise.all(
            domainIds.map(async domainId =>
              this.hasPermission(domainId, role, address),
            ),
          );

          const highestDomain = await this.getHighestDomain(
            permissionDomains,
            role,
          );

          const allHasRoles = await Promise.all(
            otherRoles.map(async r => {
              const { hasRole } = await this.client.hasColonyRole.call({
                address,
                domainId: highestDomain,
                role: r,
              });
              return hasRole;
            }),
          );

          if (!allHasRoles.every(Boolean)) {
            throw new Error(
              `We are missing one or more of the permissions ${JSON.stringify(
                otherRoles,
              )} in domain ${highestDomain}`,
            );
          }

          const childSkillIndexes = await Promise.all(
            domainIds.map(async domainId =>
              this.getChildSkillIndex(highestDomain, domainId),
            ),
          );

          return childSkillIndexes.reduce(
            (acc, childSkillIndex, i) => ({
              ...acc,
              [childSkillIndexNames[i]]: childSkillIndex,
            }),
            { [permissionDomainIdName]: highestDomain },
          );
        },
      ),
    );
    return proofs.reduce((acc, proof) => ({ ...acc, ...proof }));
  }

  async getHighestDomain(
    domainIds: number[],
    role: ColonyRole,
  ): Promise<number> {
    const skills = await Promise.all(
      domainIds.map(async domainId => {
        if (domainId < 0) return [domainId, null];

        const { skillId } = await this.client.getDomain.call({
          domainId,
        });

        const skill = await this.client.networkClient.getSkill.call({
          skillId,
        });

        return [domainId, skill];
      }),
    );
    const filteredSkills = skills
      .filter(([, skill]) => skill !== null)
      .sort(
        // $FlowFixMe these will all be skills because of the filter
        ([, a], [, b]) => b.children.length - a.children.length,
      );
    if (!filteredSkills.length) {
      throw new Error(
        `No permission for role ${role} in appropriate domain(s) for method ${
          this.name
        }`,
      );
    }
    return filteredSkills[0][0];
  }

  async getChildSkillIndex(
    permissionDomainId: number,
    childDomainId: number,
  ): Promise<number> {
    if (permissionDomainId < 0) {
      // don't continue if tx will fail
      throw new Error('Current wallet address does not have permission');
    } else if (permissionDomainId === childDomainId) {
      // if we have permission in immediate domain we know index will be zero
      return 0;
    }

    // get the permission and child domain skills
    const {
      skillId: permissionDomainSkillId,
    } = await this.client.getDomain.call({
      domainId: permissionDomainId,
    });
    const { skillId: childDomainSkillId } = await this.client.getDomain.call({
      domainId: childDomainId,
    });

    // get all the child skills of the permission domain skill
    const {
      children: permissionDomainSkillChildren,
    } = await this.client.networkClient.getSkill.call({
      skillId: permissionDomainSkillId,
    });

    // find the index of the child domain skill in the permission domain skill children
    const childSkillIndex = permissionDomainSkillChildren.findIndex(
      childSkillId => childSkillId === childDomainSkillId,
    );

    // this should never happen, but if we can't find the index then throw
    if (childSkillIndex < 0) {
      throw new Error(
        'Unable to find child domain skill in permission domain skill children',
      );
    }

    return childSkillIndex;
  }

  /**
   * For colonies which are limited to one level of domain, determine whether
   * the current wallet address has permission for a role in a given domain.
   * Returns the domainId in which we have permission.
   */
  async hasPermission(
    domainId: number,
    role: ColonyRole,
    address: string,
  ): Promise<number> {
    // if we have permission in the specified domain, return that
    const {
      hasRole: hasDomainPermission,
    } = await this.client.hasColonyRole.call({
      address,
      domainId,
      role,
    });

    // Architecture can only architect child domains
    if (hasDomainPermission && role !== COLONY_ROLE_ARCHITECTURE) {
      return domainId;
    }

    // if we have permission in root domain, return that
    const { hasRole: hasRootPermission } = await this.client.hasColonyRole.call(
      {
        address,
        domainId: 1,
        role,
      },
    );

    return hasRootPermission ? 1 : -1;
  }
}
