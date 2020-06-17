import { ContractTransaction } from 'ethers';
import { BigNumberish, BigNumber } from 'ethers/utils';

import { ClientType, ColonyRole } from '../constants';
import { OneTxPaymentFactory } from '../contracts/4/OneTxPaymentFactory';
import { OneTxPayment } from '../contracts/4/OneTxPayment';
import { TransactionOverrides } from '../contracts/4';
import { ColonyClient } from '../index';
import { getPermissionProofs } from '../clients/Colony/extensions/commonExtensions';

type OneTxPaymentEstimate = OneTxPayment['estimate'];

interface ExtendedEstimate extends OneTxPaymentEstimate {
  makePaymentWithProofs(
    _worker: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber>;
  makePaymentFundedFromDomainWithProofs(
    _worker: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber>;
}

export interface ExtendedOneTxPayment extends OneTxPayment {
  clientType: ClientType.OneTxPaymentClient;
  estimate: ExtendedEstimate;

  makePaymentWithProofs(
    _worker: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  makePaymentFundedFromDomainWithProofs(
    _worker: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
}

const getExtensionPermissionProofs = async (
  colonyClient: ColonyClient,
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

  if (fundingPDID !== adminPDID || fundingCSI !== adminCSI) {
    // @TODO: this can surely be improved
    throw new Error(
      // eslint-disable-next-line max-len
      `${
        address || 'User'
      } has to have the funding and administration role in the same domain`,
    );
  }

  return [adminPDID, adminCSI];
};

const getOneTxPaymentClient = (
  address: string,
  colonyClient: ColonyClient,
): ExtendedOneTxPayment => {
  const oneTxPaymentClient = OneTxPaymentFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ExtendedOneTxPayment;

  oneTxPaymentClient.clientType = ClientType.OneTxPaymentClient;

  oneTxPaymentClient.makePaymentWithProofs = async (
    _worker: string,
    _token: string,
    _amount: BigNumberish,
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
      _worker,
      _token,
      _amount,
      _domainId,
      _skillId,
      overrides,
    );
  };

  oneTxPaymentClient.makePaymentFundedFromDomainWithProofs = async (
    _worker: string,
    _token: string,
    _amount: BigNumberish,
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
      _worker,
      _token,
      _amount,
      _domainId,
      _skillId,
      overrides,
    );
  };

  oneTxPaymentClient.estimate.makePaymentWithProofs = async (
    _worker: string,
    _token: string,
    _amount: BigNumberish,
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
      _worker,
      _token,
      _amount,
      _domainId,
      _skillId,
    );
  };

  oneTxPaymentClient.estimate.makePaymentFundedFromDomainWithProofs = async (
    _worker: string,
    _token: string,
    _amount: BigNumberish,
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
      _worker,
      _token,
      _amount,
      _domainId,
      _skillId,
    );
  };

  return oneTxPaymentClient;
};

export default getOneTxPaymentClient;
