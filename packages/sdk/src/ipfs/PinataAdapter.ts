import type IpfsAdapter from './IpfsAdapter';

const COLONY_IPFS_PINATA_TOKEN =
  typeof global != 'undefined' && global.process
    ? global.process.env.COLONY_IPFS_PINATA_TOKEN
    : undefined;

/**
 * A Colony SDK IPFS adapter for Pinata (https://pinata.cloud)
 *
 * In order to use this, sign up for Pinata (if you haven't already) and generate a token. Then either supply this token when instantiating the class (example below) or provide it via the environment variable `COLONY_IPFS_PINATA_TOKEN` (when using NodeJS). Then provide an instance of this class to the {@link ColonyNetwork} or {@link ColonyEventManager} classes (depending on your needs).
 *
 * :::danger Tokens are sensitive data
 * Do not check in your Pinata token into version control and **DO NOT EMBED IT INTO YOUR FRONTEND BUNDLE**.
 * :::
 *
 * @example
 * ```typescript
 * import { ColonyNetwork, PinataAdapter } from '@colony/sdk';
 * const pinataAdapter = new PinataAdapter('[YOUR_PINANTA_JWT_TOKEN]');
 * // Immediately executing async function
 * (async function() {
 *   const colonyNetwork = ColonyNetwork.init(signerOrProvider, { ipfsAdapter: pinataAdapter });
 * })();
 * ```
 */
class PinataAdapter implements IpfsAdapter {
  private token: string;

  private PINATA_GATEWAY_ENDPOINT = 'https://gateway.pinata.cloud/ipfs';

  name = 'PINATA';

  constructor(pinataToken?: string) {
    const token = pinataToken || COLONY_IPFS_PINATA_TOKEN;
    if (!token) {
      throw new Error(
        `Cannot find pinata token. Please supply it as an argument to the class or as "process.env.COLONY_IPFS_PINATA_TOKEN (in NodeJS)"`,
      );
    }
    this.token = token;
  }

  getIpfsUrl(cid: string): string {
    return `${this.PINATA_GATEWAY_ENDPOINT}/${cid}`;
  }

  async uploadJson(jsonString: string): Promise<string> {
    const res = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        pinataContent: JSON.parse(jsonString),
      }),
    });
    const parsed = await res.json();
    return parsed.IpfsHash;
  }
}

export default PinataAdapter;
