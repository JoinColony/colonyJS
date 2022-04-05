import { ContractTransaction, BigNumberish, BigNumber } from 'ethers';

import {
  AugmentedIColony,
  getExtensionPermissionProofs,
} from '../../../Core/augments/commonAugments';

import { OneTxPaymentVersion } from '../exports';
import { AnyOneTxPayment } from '../../../../contracts/OneTxPayment/exports';
import { ClientType, TxOverrides } from '../../../../types';

export type AugmentedEstimate<T extends AnyOneTxPayment = AnyOneTxPayment> =
  T['estimateGas'] & {
    /**
     * Same as [[makePayment]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _amounts amounts of the tokens being paid out
     * @param _domainId The domainId the payment should be coming from
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentWithProofs(
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;

    /**
     * Same as [[makePaymentFundedFromDomain]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _amounts The amounts of the tokens being paid out
     * @param _domainId The domainId the payment should be coming from
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentFundedFromDomainWithProofs(
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TxOverrides,
    ): Promise<BigNumber>;
  };

export type AugmentedOneTxPayment<T extends AnyOneTxPayment = AnyOneTxPayment> =
  T & {
    clientType: ClientType.OneTxPaymentClient;
    clientVersion: OneTxPaymentVersion;
    /** An instance of the corresponding ColonyClient */
    colonyClient: AugmentedIColony;
    estimateGas: T['estimateGas'] & AugmentedEstimate;

    /**
     * Same as [[makePayment]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _amounts amounts of the tokens being paid out
     * @param _domainId The domainId the payment should be coming from
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentWithProofs(
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TxOverrides,
    ): Promise<ContractTransaction>;

    /**
     * Same as [[makePaymentFundedFromDomain]], but let colonyJS figure out the permission proofs for you.
     * Always prefer this method, except when you have good reason not to.
     * @param _amounts The amounts of the tokens being paid out
     * @param _domainId The domainId the payment should be coming from
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentFundedFromDomainWithProofs(
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TxOverrides,
    ): Promise<ContractTransaction>;
  };

async function makePaymentWithProofs(
  this: AugmentedOneTxPayment,
  _workers: string[],
  _tokens: string[],
  _amounts: BigNumberish[],
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  overrides: TxOverrides = {},
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
  overrides: TxOverrides = {},
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
  overrides: TxOverrides = {},
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
    overrides,
  );
}

async function estimateMakePaymentFundedFromDomainWithProofs(
  this: AugmentedOneTxPayment,
  _workers: string[],
  _tokens: string[],
  _amounts: BigNumberish[],
  _domainId: BigNumberish,
  _skillId: BigNumberish,
  overrides: TxOverrides = {},
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
    overrides,
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
