import {
  BigNumberish,
  BigNumber,
  ContractTransaction,
  constants,
} from 'ethers';

import { ClientType, ColonyRole } from '../../../../constants';
import { TxOverrides } from '../../../../types';
import {
  StreamingPaymentsEvents,
  StreamingPaymentsEvents__factory as StreamingPaymentsEventsFactory,
} from '../../../../contracts/events';
import {
  AugmentedIColony,
  getMultiPermissionProofs,
  getPermissionProofs,
} from '../../../Core/augments/commonAugments';
import {
  IColonyV4,
  IColonyV5,
  IColonyV6,
  IColonyV7,
  IColonyV8,
  IColonyV9,
  IColonyV10,
} from '../../../Core/contracts';
import { StreamingPaymentsVersion } from '../exports';
import { AnyStreamingPayments } from '../contracts';

const { MaxUint256 } = constants;

export type ValidColony =
  | IColonyV4
  | IColonyV5
  | IColonyV6
  | IColonyV7
  | IColonyV8
  | IColonyV9
  | IColonyV10;

export type AugmentedEstimate<
  T extends AnyStreamingPayments = AnyStreamingPayments,
> = T['estimateGas'] & {
  /**
   * Same as [[create]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId The domain out of which the streaming payment will be paid
   * @param _startTime The time at which the payment begins paying out
   * @param _endTime The time at which the payment ends paying out
   * @param _interval The period of time over which _amounts are paid out
   * @param _recipient The recipient of the streaming payment
   * @param _tokens The tokens to be paid out
   * @param _amounts The amounts to be paid out (per _interval of time)
   */
  createWithProofs(
    _domainId: BigNumberish,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    _interval: BigNumberish,
    _recipient: string,
    _tokens: string[],
    _amounts: BigNumberish[],
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as [[claim]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _tokens The tokens to be paid out
   */
  claimWithProofs(
    _id: BigNumberish,
    _tokens: string[],
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as [[addToken]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _token The address of the token
   * @param _amount The amount to pay out
   */
  addTokenWithProofs(
    _id: BigNumberish,
    _token: string,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as [[setTokenAmount]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _token The address of the token
   * @param _amount The new amount to pay out
   */
  setTokenAmountWithProofs(
    _id: BigNumberish,
    _token: string,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as [[setStartTime]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _startTime The new startTime to set
   */
  setStartTimeWithProofs(
    _id: BigNumberish,
    _startTime: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as [[setEndTime]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _endTime The new endTime to set
   */
  setEndTimeWithProofs(
    _id: BigNumberish,
    _endTime: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;

  /**
   * Same as [[cancel]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   */
  cancelWithProofs(
    _id: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
};

export type AugmentedStreamingPayments<
  T extends AnyStreamingPayments = AnyStreamingPayments,
> = T & {
  clientType: ClientType.StreamingPaymentsClient;
  clientVersion: StreamingPaymentsVersion;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony<ValidColony>;

  /**
   * The stakedExpenditureEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  stakedExpenditureEvents: StreamingPaymentsEvents;

  estimateGas: T['estimateGas'] & AugmentedEstimate;

  /**
   * Same as [[create]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId The domain out of which the streaming payment will be paid
   * @param _startTime The time at which the payment begins paying out
   * @param _endTime The time at which the payment ends paying out
   * @param _interval The period of time over which _amounts are paid out
   * @param _recipient The recipient of the streaming payment
   * @param _tokens The tokens to be paid out
   * @param _amounts The amounts to be paid out (per _interval of time)
   */
  createWithProofs(
    _domainId: BigNumberish,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    _interval: BigNumberish,
    _recipient: string,
    _tokens: string[],
    _amounts: BigNumberish[],
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as [[claim]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _tokens The tokens to be paid out
   */
  claimWithProofs(
    _id: BigNumberish,
    _tokens: string[],
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as [[addToken]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _token The address of the token
   * @param _amount The amount to pay out
   */
  addTokenWithProofs(
    _id: BigNumberish,
    _token: string,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as [[setTokenAmount]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _token The address of the token
   * @param _amount The new amount to pay out
   */
  setTokenAmountWithProofs(
    _id: BigNumberish,
    _token: string,
    _amount: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as [[setStartTime]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _startTime The new startTime to set
   */
  setStartTimeWithProofs(
    _id: BigNumberish,
    _startTime: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as [[setEndTime]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   * @param _endTime The new endTime to set
   */
  setEndTimeWithProofs(
    _id: BigNumberish,
    _endTime: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  /**
   * Same as [[cancel]], but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _id The id of the streaming payment
   */
  cancelWithProofs(
    _id: BigNumberish,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;
};

async function createWithProofs(
  this: AugmentedStreamingPayments,
  _domainId: BigNumberish,
  _startTime: BigNumberish,
  _endTime: BigNumberish,
  _interval: BigNumberish,
  _recipient: string,
  _tokens: string[],
  _amounts: BigNumberish[],
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [fundingPermissionDomainId, fundingChildSkillIndex] =
    await getPermissionProofs(this.colonyClient, _domainId, ColonyRole.Funding);
  const [adminPermissionDomainId, adminChildSkillIndex] =
    await getPermissionProofs(
      this.colonyClient,
      _domainId,
      ColonyRole.Administration,
    );

  return this.create(
    fundingPermissionDomainId,
    fundingChildSkillIndex,
    adminPermissionDomainId,
    adminChildSkillIndex,
    _domainId,
    _startTime,
    _endTime,
    _interval,
    _recipient,
    _tokens,
    _amounts,
    overrides,
  );
}

async function estimateCreateWithProofs(
  this: AugmentedStreamingPayments,
  _domainId: BigNumberish,
  _startTime: BigNumberish,
  _endTime: BigNumberish,
  _interval: BigNumberish,
  _recipient: string,
  _tokens: string[],
  _amounts: BigNumberish[],
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [fundingPermissionDomainId, fundingChildSkillIndex] =
    await getPermissionProofs(this.colonyClient, _domainId, ColonyRole.Funding);
  const [adminPermissionDomainId, adminChildSkillIndex] =
    await getPermissionProofs(
      this.colonyClient,
      _domainId,
      ColonyRole.Administration,
    );

  return this.estimateGas.create(
    fundingPermissionDomainId,
    fundingChildSkillIndex,
    adminPermissionDomainId,
    adminChildSkillIndex,
    _domainId,
    _startTime,
    _endTime,
    _interval,
    _recipient,
    _tokens,
    _amounts,
    overrides,
  );
}

async function claimWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _tokens: string[],
  overrides?: TxOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getMultiPermissionProofs(
    this.colonyClient,
    domainId,
    [ColonyRole.Funding, ColonyRole.Administration],
    this.address,
  );

  return this.claim(
    permissionDomainId,
    childSkillIndex,
    // TODO: This is not correct. We are waiting for the adjustment in the contracts
    MaxUint256,
    MaxUint256,
    _id,
    _tokens,
    overrides,
  );
}

async function estimateClaimWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _tokens: string[],
  overrides?: TxOverrides,
): Promise<BigNumber> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getMultiPermissionProofs(
    this.colonyClient,
    domainId,
    [ColonyRole.Funding, ColonyRole.Administration],
    this.address,
  );

  return this.estimateGas.claim(
    permissionDomainId,
    childSkillIndex,
    // TODO: This is not correct. We are waiting for the adjustment in the contracts
    MaxUint256,
    MaxUint256,
    _id,
    _tokens,
    overrides,
  );
}

async function addTokenWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _token: string,
  _amount: BigNumberish,
  overrides?: TxOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Funding,
  );

  return this.addToken(
    permissionDomainId,
    childSkillIndex,
    _id,
    _token,
    _amount,
    overrides,
  );
}

async function estimateAddTokenWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _token: string,
  _amount: BigNumberish,
  overrides?: TxOverrides,
): Promise<BigNumber> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Funding,
  );

  return this.estimateGas.addToken(
    permissionDomainId,
    childSkillIndex,
    _id,
    _token,
    _amount,
    overrides,
  );
}

async function setTokenAmountWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _token: string,
  _amount: BigNumberish,
  overrides?: TxOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [callerPermissionDomainId, callerChildSkillIndex] =
    await getPermissionProofs(this.colonyClient, domainId, ColonyRole.Funding);

  const [extPermissionDomainId, extChildSkillIndex] =
    await getMultiPermissionProofs(
      this.colonyClient,
      domainId,
      [ColonyRole.Funding, ColonyRole.Administration],
      this.address,
    );

  return this.setTokenAmount(
    callerPermissionDomainId,
    callerChildSkillIndex,
    extPermissionDomainId,
    extChildSkillIndex,
    // TODO: This is not correct. We are waiting for the adjustment in the contracts
    MaxUint256,
    MaxUint256,
    _id,
    _token,
    _amount,
    overrides,
  );
}

async function estimateSetTokenAmountWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _token: string,
  _amount: BigNumberish,
  overrides?: TxOverrides,
): Promise<BigNumber> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [callerPermissionDomainId, callerChildSkillIndex] =
    await getPermissionProofs(this.colonyClient, domainId, ColonyRole.Funding);

  const [extPermissionDomainId, extChildSkillIndex] =
    await getMultiPermissionProofs(
      this.colonyClient,
      domainId,
      [ColonyRole.Funding, ColonyRole.Administration],
      this.address,
    );

  return this.estimateGas.setTokenAmount(
    callerPermissionDomainId,
    callerChildSkillIndex,
    extPermissionDomainId,
    extChildSkillIndex,
    // TODO: This is not correct. We are waiting for the adjustment in the contracts
    MaxUint256,
    MaxUint256,
    _id,
    _token,
    _amount,
    overrides,
  );
}

async function setStartTimeWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _startTime: BigNumberish,
  overrides?: TxOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Administration,
  );

  return this.setStartTime(
    permissionDomainId,
    childSkillIndex,
    _id,
    _startTime,
    overrides,
  );
}

async function estimateSetStartTimeWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _startTime: BigNumberish,
  overrides?: TxOverrides,
): Promise<BigNumber> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Administration,
  );

  return this.estimateGas.setStartTime(
    permissionDomainId,
    childSkillIndex,
    _id,
    _startTime,
    overrides,
  );
}

async function setEndTimeWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _endTime: BigNumberish,
  overrides?: TxOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Administration,
  );

  return this.setEndTime(
    permissionDomainId,
    childSkillIndex,
    _id,
    _endTime,
    overrides,
  );
}

async function estimateSetEndTimeWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  _endTime: BigNumberish,
  overrides?: TxOverrides,
): Promise<BigNumber> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Administration,
  );

  return this.estimateGas.setEndTime(
    permissionDomainId,
    childSkillIndex,
    _id,
    _endTime,
    overrides,
  );
}

async function cancelWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  overrides?: TxOverrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Administration,
  );

  return this.cancel(permissionDomainId, childSkillIndex, _id, overrides);
}

async function estimateCancelWithProofs(
  this: AugmentedStreamingPayments,
  _id: BigNumberish,
  overrides?: TxOverrides,
): Promise<BigNumber> {
  const { domainId } = await this.getStreamingPayment(_id);

  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Administration,
  );

  return this.estimateGas.cancel(
    permissionDomainId,
    childSkillIndex,
    _id,
    overrides,
  );
}

export const addAugments = <T extends AugmentedStreamingPayments>(
  instance: T,
  colonyClient: AugmentedIColony<ValidColony>,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.StreamingPaymentsClient;
  instance.colonyClient = colonyClient;

  instance.stakedExpenditureEvents = StreamingPaymentsEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  instance.createWithProofs = createWithProofs.bind(instance);
  instance.estimateGas.createWithProofs =
    estimateCreateWithProofs.bind(instance);
  instance.claimWithProofs = claimWithProofs.bind(instance);
  instance.estimateGas.claimWithProofs = estimateClaimWithProofs.bind(instance);
  instance.addTokenWithProofs = addTokenWithProofs.bind(instance);
  instance.estimateGas.addTokenWithProofs =
    estimateAddTokenWithProofs.bind(instance);
  instance.setTokenAmountWithProofs = setTokenAmountWithProofs.bind(instance);
  instance.estimateGas.setTokenAmountWithProofs =
    estimateSetTokenAmountWithProofs.bind(instance);
  instance.setStartTimeWithProofs = setStartTimeWithProofs.bind(instance);
  instance.estimateGas.setStartTimeWithProofs =
    estimateSetStartTimeWithProofs.bind(instance);
  instance.setEndTimeWithProofs = setEndTimeWithProofs.bind(instance);
  instance.estimateGas.setEndTimeWithProofs =
    estimateSetEndTimeWithProofs.bind(instance);
  instance.cancelWithProofs = cancelWithProofs.bind(instance);
  instance.estimateGas.cancelWithProofs =
    estimateCancelWithProofs.bind(instance);

  return instance;
  /* eslint-enable no-param-reassign */
};
