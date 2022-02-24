import { Extensions } from '../../versions';

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
  [Extensions.CoinMachine]: CoinMachineClient;
  [Extensions.OneTxPayment]: OneTxPaymentClient;
  [Extensions.VotingReputation]: VotingReputationClient;
  [Extensions.Whitelist]: WhitelistClient;
};

export type ExtensionClient = ExtensionClients[keyof ExtensionClients];

// Provide all factory funcitons to valid colony extensions
export const extensionFactoryMap = {
  [Extensions.CoinMachine]: getCoinMachineClient,
  [Extensions.OneTxPayment]: getOneTxPaymentClient,
  [Extensions.VotingReputation]: getVotingReputationClient,
  [Extensions.Whitelist]: getWhitelistClient,
};

export const extensions = Object.keys(extensionFactoryMap);
