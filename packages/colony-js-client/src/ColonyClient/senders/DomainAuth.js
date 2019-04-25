/* @flow */
/* eslint-disable no-underscore-dangle */

import ContractClient from '@colony/colony-js-contract-client';
// eslint-disable-next-line max-len
import type { ContractMethodSenderArgs } from '@colony/colony-js-contract-client';

import { COLONY_ROLES } from '../../constants';

import type { ColonyClient } from '../../index';

type ColonyRole = $Keys<typeof COLONY_ROLES>;

type PermissionType = {|
  // the role required
  role: ColonyRole,
  // the name of the input value containing the domainId in which the role is required
  domainIdInputValueName: string,
  // the name of the output value to set as the permisisonDomainId
  permissionDomainIdInputValueName: string,
  // the name of the output value to set as the childSkillIndex
  childSkillIndexInputValueName: string,
|};

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

    // get proof input values
    const proofs = await this.getPermissionProofs(inputValues);

    return super.send(
      {
        ...inputValues,
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
          role,
          domainIdInputValueName,
          permissionDomainIdInputValueName,
          childSkillIndexInputValueName,
        }) => {
          const [
            permissionDomainId,
            childSkillIndex,
          ] = await this.getPermissionProof(
            inputValues[domainIdInputValueName],
            role,
          );
          return {
            [permissionDomainIdInputValueName]: permissionDomainId,
            [childSkillIndexInputValueName]: childSkillIndex,
          };
        },
      ),
    );
    return proofs.reduce((acc, proof) => ({ ...acc, ...proof }));
  }

  /**
   * For a given domainId and role, if we have permission for that role in that
   * domain, get the permissionDomainId and childSkillIndex as proof of that
   * fact.
   */
  async getPermissionProof(domainId: number, role: ColonyRole) {
    // check for permission in that domain
    const permissionDomainId = await this.hasPermission(domainId, role);

    if (permissionDomainId < 0) {
      // don't continue if tx will fail
      throw new Error('Current wallet address does not have permission');
    } else if (permissionDomainId === domainId) {
      // if we have permission in immediate domain we know index will be zero
      return [permissionDomainId, 0]; // TODO: is this correct?
    }

    // get the permission and child domain skills
    const {
      skillId: permissionDomainSkillId,
    } = await this.client.getDomain.call({
      domainId: permissionDomainId,
    });
    const { skillId: childDomainSkillId } = await this.client.getDomain.call({
      domainId,
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

    return [permissionDomainId, childSkillIndex];
  }

  /**
   * For colonies which are limited to one level of domain, determine whether
   * the current wallet address has permission for a role in a given domain.
   * Returns the domainId in which we have permission.
   */
  async hasPermission(domainId: number, role: ColonyRole): Promise<number> {
    const address = await this.client.adapter.wallet.getAddress();

    // if we have permission in the specified domain, return that
    const {
      hasColonyRole: hasDomainPermission,
    } = await this.client.hasColonyRole.call({
      address,
      domainId,
      role,
    });
    if (hasDomainPermission) return domainId;

    // if we have permission in root domain, return that
    const {
      hasColonyRole: hasRootPermission,
    } = await this.client.hasColonyRole.call({
      address,
      domainId: 1,
      role,
    });

    return hasRootPermission ? 1 : -1;
  }

  /**
   * For colonies with multiple levels of domains, determine whether the
   * current wallet address has permission for a role in a given domain.
   * Returns the domainId in which we have permission.
   *
   * NOTE: this is not currently used
   * TODO: it's broken
   */
  async hasPermissionMultiLevel(
    domainId: number,
    role: ColonyRole,
  ): Promise<number> {
    const address = await this.client.adapter.wallet.getAddress();

    // check for permission in that domain
    let { hasColonyRole: hasPermission } = await this.client.hasColonyRole.call(
      {
        address,
        domainId,
        role,
      },
    );

    // keep searching up the domain tree until we have permission
    let currentDomainId = domainId;
    while (!hasPermission && currentDomainId !== 1) {
      // get the parent domain
      // TODO: this is getting the parent skill
      ({
        parentSkillId: currentDomainId,
        // eslint-disable-next-line no-await-in-loop
      } = await this.client.networkClient.getParentSkillId.call({
        skillId: currentDomainId,
        parentSkillIndex: 0,
      }));

      // check for permission in that
      // eslint-disable-next-line no-await-in-loop
      ({ hasColonyRole: hasPermission } = await this.client.hasColonyRole.call({
        address,
        domainId: currentDomainId,
        role,
      }));
    }

    return hasPermission ? currentDomainId : -1;
  }
}
