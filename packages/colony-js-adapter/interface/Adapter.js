/* @flow */

import type {
  Query,
  Options,
  IContractLoader,
} from '@colony/colony-js-contract-loader';
import type { Contract } from './Contract';
import type { Provider } from './Provider';

export interface Adapter {
  _loader: IContractLoader;
  _provider: Provider;
  _createContract(address: string, abi: {}): Contract;
  getContract(query: Query, options?: Options): Promise<Contract>;
}
