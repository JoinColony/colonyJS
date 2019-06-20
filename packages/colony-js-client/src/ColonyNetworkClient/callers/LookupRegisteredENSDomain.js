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
    if (domain && domain.length && this.client.network === 'goerli') {
      const [name, scope] = domain.split('.');
      const patchedDomain = `${name}.${scope}.joincolony.test`;
      return { domain: patchedDomain };
    }

    return { domain };
  }
}
