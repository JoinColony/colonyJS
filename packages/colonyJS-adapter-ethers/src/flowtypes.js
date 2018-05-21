/* @flow */

import type { Event, IProvider, IWallet } from '../../colonyJS-adapter';
import type { IContractLoader } from '../../colonyJS-contract-loader';

export type ConstructorArgs = {
  loader: IContractLoader,
  provider: IProvider,
  wallet: IWallet,
};

export type EventListenerCallback = (event: Event) => void;
