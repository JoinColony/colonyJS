import type IpfsAdapter from './IpfsAdapter.js';

/**
 * CloudflareReadonlyAdapter
 *
 * A Colony SDK IPFS adapter for Cloudflare IPFS (https://developers.cloudflare.com/web3/ipfs-gateway/). It only supports reading IPFS data from the Cloudflare gateway (not uploading or pinning files).
 *
 * This is the default IpfsAdapter used in Colony SDK. So in order to use this, you don't have to do anything.
 *
 */
class CloudflareReadonlyAdapter implements IpfsAdapter {
  private CLOUDFLARE_GATEWAY_ENDPOINT = 'https://cloudflare-ipfs.com/ipfs';

  name = 'CLOUDFLARE';

  getIpfsUrl(cid: string): string {
    return `${this.CLOUDFLARE_GATEWAY_ENDPOINT}/${cid}`;
  }

  // eslint-disable-next-line class-methods-use-this
  uploadJson(): Promise<string> {
    throw new Error(
      // eslint-disable-next-line max-len
      'The default Cloudflare IPFS adapter is readonly only. Please use another adapter to upload and pin files.',
    );
  }
}

export default CloudflareReadonlyAdapter;
