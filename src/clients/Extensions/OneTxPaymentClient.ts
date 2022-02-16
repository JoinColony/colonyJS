import { ContractTransaction } from 'ethers';
import { BigNumberish, BigNumber } from 'ethers/utils';

import { ClientType, ColonyRole } from '../../constants';
import { OneTxPayment__factory as OneTxPaymentFactory } from '../../contracts/6/factories/OneTxPayment__factory';
import { OneTxPayment } from '../../contracts/6/OneTxPayment';
import { TransactionOverrides } from '../../contracts/6';
import {
  getPermissionProofs,
  ExtendedIColony,
} from '../../clients/Colony/extensions/commonExtensions';

type OneTxPaymentEstimate = OneTxPayment['estimate'];

interface ExtendedEstimate extends OneTxPaymentEstimate {
  makePaymentWithProofs(
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber>;
  makePaymentFundedFromDomainWithProofs(
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber>;
}

export interface OneTxPaymentClient extends OneTxPayment {
  clientType: ClientType.OneTxPaymentClient;
  estimate: ExtendedEstimate;

  makePaymentWithProofs(
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  makePaymentFundedFromDomainWithProofs(
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
}

const getExtensionPermissionProofs = async (
  colonyClient: ExtendedIColony,
  domainId: BigNumberish,
  address?: string,
): Promise<[BigNumberish, BigNumberish]> => {
  const [fundingPDID, fundingCSI] = await getPermissionProofs(
    colonyClient,
    domainId,
    ColonyRole.Funding,
    address,
  );
  const [adminPDID, adminCSI] = await getPermissionProofs(
    colonyClient,
    domainId,
    ColonyRole.Administration,
    address,
  );

  if (!fundingPDID.eq(adminPDID) || !fundingCSI.eq(adminCSI)) {
    // @TODO: this can surely be improved
    throw new Error(
      `${
        address || 'User'
      } has to have the funding and administration role in the same domain`,
    );
  }

  return [adminPDID, adminCSI];
};

const getOneTxPaymentClient = (
  address: string,
  colonyClient: ExtendedIColony,
): OneTxPaymentClient => {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as OneTxPaymentClient;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;

  oneTxPaymentClient.makePaymentWithProofs = async (
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction> => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    return oneTxPaymentClient.makePayment(
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
  };

  oneTxPaymentClient.makePaymentFundedFromDomainWithProofs = async (
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction> => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    return oneTxPaymentClient.makePaymentFundedFromDomain(
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
  };

  oneTxPaymentClient.estimate.makePaymentWithProofs = async (
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber> => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    return oneTxPaymentClient.estimate.makePayment(
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
  };

  oneTxPaymentClient.estimate.makePaymentFundedFromDomainWithProofs = async (
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber> => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    return oneTxPaymentClient.estimate.makePaymentFundedFromDomain(
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
  };

  return oneTxPaymentClient;
};

export default getOneTxPaymentClient;
