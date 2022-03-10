import {
  ContractTransaction,
  BigNumberish,
  BigNumber,
  Overrides,
} from 'ethers';

import {
  AugmentedIColony,
  getExtensionPermissionProofs,
} from '../../../Core/augments/commonAugments';

import { OneTxPaymentVersion } from '../exports';
import { AnyOneTxPayment } from '../../../../contracts/OneTxPayment/exports';
import { ClientType } from '../../../..';

export type AugmentedEstimate<T extends AnyOneTxPayment = AnyOneTxPayment> =
  T['estimateGas'] & {
    makePaymentWithProofs(
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    makePaymentFundedFromDomainWithProofs(
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;
  };

export type AugmentedOneTxPayment<T extends AnyOneTxPayment = AnyOneTxPayment> =
  T & {
    clientType: ClientType.OneTxPaymentClient;
    clientVersion: OneTxPaymentVersion;
    colonyClient: AugmentedIColony;
    estimateGas: T['estimateGas'] & AugmentedEstimate;

    makePaymentWithProofs(
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    makePaymentFundedFromDomainWithProofs(
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;
  };

async function makePaymentWithProofs(
  this: AugmentedOneTxPayment,
  _workers: string[],
  _tokens: string[],
  _amounts: BigNumberish[],
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
    this.colonyClient,
    _domainId,
    this.address,
  );
  const [userPDID, userCSI] = await getExtensionPermissionProofs(
    this.colonyClient,
    _domainId,
  );

  return this.makePayment(
    extensionPDID,
    extensionCSI,
    userPDID,
    userCSI,
    _workers,
    _tokens,
    _amounts,
    _domainId,
    _skillId,
    overrides,
  );
}

async function makePaymentFundedFromDomainWithProofs(
  this: AugmentedOneTxPayment,
  _workers: string[],
  _tokens: string[],
  _amounts: BigNumberish[],
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
    this.colonyClient,
    _domainId,
    this.address,
  );
  const [userPDID, userCSI] = await getExtensionPermissionProofs(
    this.colonyClient,
    _domainId,
  );

  return this.makePaymentFundedFromDomain(
    extensionPDID,
    extensionCSI,
    userPDID,
    userCSI,
    _workers,
    _tokens,
    _amounts,
    _domainId,
    _skillId,
    overrides,
  );
}

async function estimateMakePaymentWithProofs(
  this: AugmentedOneTxPayment,
  _workers: string[],
  _tokens: string[],
  _amounts: BigNumberish[],
  _domainId: BigNumberish,
  _skillId: BigNumberish,
): Promise<BigNumber> {
  const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
    this.colonyClient,
    _domainId,
    this.address,
  );
  const [userPDID, userCSI] = await getExtensionPermissionProofs(
    this.colonyClient,
    _domainId,
  );

  return this.estimateGas.makePayment(
    extensionPDID,
    extensionCSI,
    userPDID,
    userCSI,
    _workers,
    _tokens,
    _amounts,
    _domainId,
    _skillId,
  );
}

async function estimateMakePaymentFundedFromDomainWithProofs(
  this: AugmentedOneTxPayment,
  _workers: string[],
  _tokens: string[],
  _amounts: BigNumberish[],
  _domainId: BigNumberish,
  _skillId: BigNumberish,
): Promise<BigNumber> {
  const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
    this.colonyClient,
    _domainId,
    this.address,
  );
  const [userPDID, userCSI] = await getExtensionPermissionProofs(
    this.colonyClient,
    _domainId,
  );

  return this.estimateGas.makePaymentFundedFromDomain(
    extensionPDID,
    extensionCSI,
    userPDID,
    userCSI,
    _workers,
    _tokens,
    _amounts,
    _domainId,
    _skillId,
  );
}

export const addAugments = <T extends AugmentedOneTxPayment>(
  instance: T,
  colonyClient: AugmentedIColony,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.OneTxPaymentClient;
  instance.colonyClient = colonyClient;

  instance.makePaymentWithProofs = makePaymentWithProofs.bind(instance);
  instance.makePaymentFundedFromDomainWithProofs =
    makePaymentFundedFromDomainWithProofs.bind(instance);

  instance.estimateGas.makePaymentWithProofs =
    estimateMakePaymentWithProofs.bind(instance);
  instance.estimateGas.makePaymentFundedFromDomainWithProofs =
    estimateMakePaymentFundedFromDomainWithProofs.bind(instance);

  return instance;
  /* eslint-enable no-param-reassign */
};
