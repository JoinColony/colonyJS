import type { Overrides, Signer } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';

export type { CommonColony } from './helpers/types.js';

export type SignerOrProvider = Signer | Provider;
export type TxOverrides = Overrides & { from?: string | undefined };
