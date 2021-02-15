import getCoinMachineClient, { CoinMachineClient } from '../CoinMachineClient';
import getOneTxPaymentClient, {
  OneTxPaymentClient,
} from '../OneTxPaymentClient';

export enum Extension {
  CoinMachine = 'CoinMachine',
  // FundingQueue = 'FundingQueue',
  OneTxPayment = 'OneTxPayment',
  // VotingReputation = 'VotingReputation',
}

// All of the valid extensions
export type ExtensionClients = {
  [Extension.CoinMachine]: CoinMachineClient;
  [Extension.OneTxPayment]: OneTxPaymentClient;
};

export type ExtensionClient = ExtensionClients[keyof ExtensionClients];

// Provide all factory funcitons to valid colony extensions
export const extensionFactoryMap = {
  [Extension.CoinMachine]: getCoinMachineClient,
  [Extension.OneTxPayment]: getOneTxPaymentClient,
};

export const extensions = Object.keys(extensionFactoryMap);
