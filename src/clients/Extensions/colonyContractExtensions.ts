import { Extension } from '../../versions';

import getCoinMachineClient, {
  CoinMachineClient,
} from './CoinMachine/2/CoinMachineClient';
import getOneTxPaymentClient, {
  OneTxPaymentClient,
} from './OneTxPayment/2/OneTxPaymentClient';
import getVotingReputationClient, {
  VotingReputationClient,
} from './VotingReputation/2/VotingReputationClient';
import getWhitelistClient, {
  WhitelistClient,
} from './Whitelist/1/WhitelistClient';

// All of the valid extensions
export type ExtensionClients = {
  [Extension.CoinMachine]: CoinMachineClient;
  [Extension.OneTxPayment]: OneTxPaymentClient;
  [Extension.VotingReputation]: VotingReputationClient;
  [Extension.Whitelist]: WhitelistClient;
};

export type ExtensionClient = ExtensionClients[keyof ExtensionClients];

// Provide all factory funcitons to valid colony extensions
export const extensionFactoryMap = {
  [Extension.CoinMachine]: getCoinMachineClient,
  [Extension.OneTxPayment]: getOneTxPaymentClient,
  [Extension.VotingReputation]: getVotingReputationClient,
  [Extension.Whitelist]: getWhitelistClient,
};

export const extensions = Object.keys(extensionFactoryMap);
