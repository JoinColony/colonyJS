/* @flow */

import type { Contract, Provider } from 'ethers';
import type { Query, Options, IContractLoader } from '@colony/colony-js-contract-loader';

export interface Adapter {
  _loader: IContractLoader;
  _provider: Provider;
  _createContract(address: string, abi: {}): Contract;
  getContract(query: Query, options?: Options): Promise<Contract>;
}
