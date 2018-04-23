/* @flow */

import type { Event, IProvider, IWallet } from '@colony/colony-js-adapter';
import type { IContractLoader } from '@colony/colony-js-contract-loader';

export type EthersAdapterConstructorArgs = {
  loader: IContractLoader,
  provider: IProvider,
  wallet: IWallet,
};

export type EventListenerCallback = (event: Event) => void;
