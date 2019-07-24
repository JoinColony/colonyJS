/* @flow */

import { providers } from 'ethers';
import promiseRetry from 'promise-retry';

import type { Params } from './types';

export const defaultInfuraProjectId = '7d0d81d0919f4f05b9ab6634be01ee73';

// Custom provider for use with Infura which retries query requests if the
// result is unexpected data.
// Related issue: https://github.com/INFURA/infura/issues/157
export default class InfuraProvider extends providers.JsonRpcProvider {
  constructor(
    networkName: string,
    infuraProjectId?: string,
    verbose?: boolean,
  ) {
    let host;
    switch (networkName) {
      case 'homestead':
      case 'mainnet':
        host = 'mainnet.infura.io';
        break;
      case 'goerli':
        host = 'goerli.infura.io';
        break;
      default:
        throw new Error(
          `Could not get provider, unsupported network: ${networkName}`,
        );
    }

    const url = `https://${host}/v3/${infuraProjectId ||
      defaultInfuraProjectId}`;
    const network =
      networkName === 'goerli'
        ? {
            chainId: 5,
            ensAddress: '0x112234455c3a32fd11230c42e7bccd4a84e02010',
            name: 'goerli',
          }
        : networkName;

    super(url, network);
    this._verbose = verbose;
  }

  async perform(method: string, params: Params) {
    const result = await super.perform(method, params);
    if (
      (method === 'call' ||
        method === 'estimateGas' ||
        method.startsWith('get')) &&
      result === '0x'
    ) {
      // Set the number of retries. The time between retries will increase with
      // a default exponential factor of 2.
      const retries = 7;

      // Retry if the result is '0x'. '0x' is an acceptable response if the
      // method does not exist on the contract, therefore, the promise must
      // eventually resolve with `0x` after the given number of retries.
      return promiseRetry({ retries }, (retry, number) => {
        if (this._verbose) {
          console.warn(
            // eslint-disable-next-line max-len
            `Possibly invalid response for method "${method}"; retry ${number}.`,
            {
              method,
              params,
              result,
            },
          );
        }
        return new Promise((resolve, reject) => {
          super
            .perform(method, params)
            .then(retryResult => {
              if (number < retries && retryResult === '0x') {
                retry();
              } else {
                resolve(retryResult);
              }
            })
            .catch(error => {
              reject(error);
            });
        });
      });
    }
    return result;
  }
}
