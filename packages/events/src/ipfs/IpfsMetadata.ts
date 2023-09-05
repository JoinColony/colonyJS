import wrapFetch from 'fetch-retry';

import { createMetadataFor, parseEventMetadata } from './metadata.js';
import IpfsAdapter from './IpfsAdapter.js';
import CloudflareReadonlyAdapter from './CloudflareReadonlyAdapter.js';
import { MetadataType } from './constants.js';
import { DataTypeMap, Metadata, MetadataTypeMap } from './types.js';

const fetchRetry = wrapFetch(fetch, {
  headers: {
    Accept: 'application/json',
  },
  retryOn: [404, 503],
  retries: 3,
  retryDelay: 5000,
});

export const IpfsMetadataEvents = {
  [MetadataType.Annotation]: 'Annotation(address,bytes32,string)',
  [MetadataType.Colony]: 'ColonyMetadata(address,string)',
  [MetadataType.Decision]: 'Annotation(address,bytes32,string)',
  [MetadataType.Domain]: 'DomainMetadata(address,uint256,string)',
  [MetadataType.Misc]: '',
  [MetadataType.DEFAULT]: '',
} as const;

export type MetadataEvent<K extends MetadataType> =
  (typeof IpfsMetadataEvents)[K];

/**
 * IpfsMetadata
 *
 * This is part of the {@link ColonyNetwork} and {@link ColonyEventManager} classes and not to be meant to instantiated directly.
 * You can find an instance of this under `colonyNetwork.ipfs` or `eventManager.ipfs`
 *
 */
export class IpfsMetadata {
  private adapter: IpfsAdapter;

  constructor(adapter?: IpfsAdapter) {
    this.adapter = adapter || new CloudflareReadonlyAdapter();
  }

  static eventSupportsMetadata(eventName: string) {
    if (Object.keys(IpfsMetadataEvents).includes(eventName)) {
      return true;
    }
    return false;
  }

  async getMetadata<K extends MetadataType>(cid: string, type?: K) {
    const url = this.adapter.getIpfsUrl(cid);
    const res = await fetchRetry(url);
    const data = await res.json();
    return parseEventMetadata<K>(data, type);
  }

  async getMetadataForEvent<T extends MetadataType, E extends MetadataEvent<T>>(
    eventName: E,
    cid: string,
  ): Promise<MetadataTypeMap[T]> {
    const url = this.adapter.getIpfsUrl(cid);
    const res = await fetchRetry(url);
    const data = await res.json();
    const entry = Object.entries(IpfsMetadataEvents).find(
      ([, value]) => value === eventName,
    );
    if (!entry) {
      throw new Error(`Not a valid MetadataEvent: ${eventName}`);
    }
    const metadataType = entry[0] as T;
    return parseEventMetadata(data, metadataType);
  }

  async getRawMetadata(cid: string): Promise<Metadata> {
    const url = this.adapter.getIpfsUrl(cid);
    const res = await fetchRetry(url);
    try {
      const json = await res.json();
      return json as Metadata;
    } catch (e) {
      throw new Error(
        `Could not parse IPFS metadata. Original error: ${
          (e as Error).message
        }`,
      );
    }
  }

  async uploadMetadata<T extends MetadataType>(type: T, input: DataTypeMap[T]) {
    const data = createMetadataFor(type, input);
    const str = JSON.stringify(data);
    return this.adapter.uploadJson(str);
  }
}
