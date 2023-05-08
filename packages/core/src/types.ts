import type { Overrides, Signer } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';

export type SignerOrProvider = Signer | Provider;
export type TxOverrides = Overrides & { from?: string | Promise<string> };
