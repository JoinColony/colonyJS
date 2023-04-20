import type { Overrides, Signer } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';

export type SignerOrProvider = Signer | Provider;

/** @internal */
export type TxOverrides = Overrides & { from?: string | Promise<string> };
