import type { ContractRunner, Overrides, Provider, Signer } from 'ethers';

// We are using the smallest possible types here to avoid conflicts with extended/modified types
export interface BaseContract {
  getAddress: () => Promise<string>;
  runner: ContractRunner | null;
}

export type SignerOrProvider = Signer | Provider;
export type TxOverrides = Overrides & { from?: string | undefined };
