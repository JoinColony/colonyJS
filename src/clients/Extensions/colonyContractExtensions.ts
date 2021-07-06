import getCoinMachineClient, {
  CoinMachineClient,
} from './CoinMachine/2/CoinMachineClient';
import getOneTxPaymentClient, {
  OneTxPaymentClient,
} from './OneTxPayment/2/OneTxPaymentClient';
import getVotingReputationClient, {
  VotingReputationClient,
} from './VotingReputation/2/VotingReputationClient';

export enum Extension {
  CoinMachine = 'CoinMachine',
  // FundingQueue = 'FundingQueue',
  OneTxPayment = 'OneTxPayment',
  VotingReputation = 'VotingReputation',
  Whitelist = 'Whitelist',
}

// All of the valid extensions
export type ExtensionClients = {
  [Extension.CoinMachine]: CoinMachineClient;
  [Extension.OneTxPayment]: OneTxPaymentClient;
  [Extension.VotingReputation]: VotingReputationClient;
};

export type ExtensionClient = ExtensionClients[keyof ExtensionClients];

// Provide all factory funcitons to valid colony extensions
export const extensionFactoryMap = {
  [Extension.CoinMachine]: getCoinMachineClient,
  [Extension.OneTxPayment]: getOneTxPaymentClient,
  [Extension.VotingReputation]: getVotingReputationClient,
};

export const extensions = Object.keys(extensionFactoryMap);
