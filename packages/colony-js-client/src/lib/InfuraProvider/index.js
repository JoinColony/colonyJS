/* @flow */

import { providers } from 'ethers';
import promiseRetry from 'promise-retry';

import type { PerformParams } from './types';

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

  async perform(method: string, params: PerformParams) {
    // Perform as usual.
    const latestResult = await super.perform(method, params);

    // If we got 0x then see if the pending block gives us any different.
    if (latestResult === '0x') {
      let pendingResult = latestResult;

      if (method === 'call' || method === 'estimateGas') {
        // We retry a call for estimate too, since if that succeeds then the
        // estimate should have also, and estimate doesn't allow specifying a
        // block.
        pendingResult = await super.send('eth_call', [
          // eslint-disable-next-line no-underscore-dangle
          super.constructor._hexlifyTransaction(params.transaction),
          'pending',
        ]);
      } else if (
        (method === 'getCode' || method === 'getStorageAt') &&
        (!params.blockTag || params.blockTag === 'latest')
      ) {
        // Don't retry if a non-latest blockTag was specified.
        pendingResult = await super.perform(method, {
          ...params,
          blockTag: 'pending',
        });
      }

      // If results differ, retry a few times until latest is not null.
      if (latestResult !== pendingResult) {
        if (this._verbose) {
          console.warn(
            // eslint-disable-next-line max-len
            'Infura returned invalid "0x" for "latest" block, got valid for "pending"',
            { latest: latestResult, pending: pendingResult },
          );
        }
        return this._retry(method, params);
      }
    }

    return latestResult;
  }

  _retry(method: string, params: PerformParams) {
    // Set the number of retries. The time between retries will increase with
    // a default exponential factor of 2.
    const retries = 7;
    return promiseRetry({ retries }, (retry, number) => {
      if (this._verbose) {
        console.warn(`Retry ${number} at "latest" block`);
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
}
