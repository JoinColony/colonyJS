/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

export default class LookupRegisteredENSDomain extends ContractClient.Caller<
  *,
  *,
  *,
  *,
> {
  convertOutputValues(result: *) {
    const { domain } = super.convertOutputValues(result);

    // if we're on a known testnet, patch the returned ENS domain to use .test
    // eslint-disable-next-line no-underscore-dangle
    const { address: contractAddress } = this.client._contract;
    if (
      contractAddress.toLowerCase() ===
      '0x79073fc2117dD054FCEdaCad1E7018C9CbE3ec0B'.toLowerCase()
    ) {
      const [name, scope] = domain.split('.');
      const patchedDomain = `${name}.${scope}.joincolony.test`;
      return { domain: patchedDomain };
    }

    return { domain };
  }
}
