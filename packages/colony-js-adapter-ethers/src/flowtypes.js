/* @flow */

import type { Event, IProvider, IWallet } from '@colony/colony-js-adapter';
import ContractLoader from '@colony/colony-js-contract-loader';

export type ConstructorArgs = {
  loader: ContractLoader,
  provider: IProvider,
  wallet: IWallet,
};

export type EventListenerCallback = (event: Event) => void;
