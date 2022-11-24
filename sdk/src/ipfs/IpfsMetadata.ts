import fetch from 'cross-fetch';
import wrapFetch from 'fetch-retry';
import {
  Metadata,
  MetadataType,
  getAnnotationMsgFromResponse,
  getColonyMetadataFromResponse,
  getDomainMetadataFromResponse,
  getStringForMetadataAnnotation,
  getStringForMetadataColony,
  getStringForMetadataDomain,
  getDecisionDetailsFromResponse,
  getMiscDataFromResponse,
  getStringForMetadataDecision,
  getStringForMetadataMisc,
} from '@colony/colony-event-metadata-parser';

import IpfsAdapter from './IpfsAdapter';
import CloudflareReadonlyAdapter from './CloudflareReadonlyAdapter';

export { MetadataType } from '@colony/colony-event-metadata-parser';

const fetchRetry = wrapFetch(fetch, {
  headers: {
    Accept: 'application/json',
  },
  retryOn: [404, 503],
  retries: 3,
  retryDelay: 5000,
});

export const IPFS_METADATA_EVENTS = {
  [MetadataType.Annotation]: 'Annotation(address,bytes32,string)',
  [MetadataType.Colony]: 'ColonyMetadata(address,string)',
  [MetadataType.Decision]: '',
  [MetadataType.Domain]: 'DomainMetadata(address,uint256,string)',
  [MetadataType.Misc]: '',
} as const;

const IPFS_METADATA_PARSERS = {
  [MetadataType.Annotation]: getAnnotationMsgFromResponse,
  [MetadataType.Colony]: getColonyMetadataFromResponse,
  [MetadataType.Domain]: getDomainMetadataFromResponse,
  [MetadataType.Decision]: getDecisionDetailsFromResponse,
  [MetadataType.Misc]: getMiscDataFromResponse,
  None: () => {
    // Deliberately empty
  },
} as const;

const IPFS_METADATA_ENCODERS = {
  [MetadataType.Annotation]: getStringForMetadataAnnotation,
  [MetadataType.Colony]: getStringForMetadataColony,
  [MetadataType.Decision]: getStringForMetadataDecision,
  [MetadataType.Domain]: getStringForMetadataDomain,
  [MetadataType.Misc]: getStringForMetadataMisc,
} as const;

export type MetadataEvent<K extends MetadataType> =
  typeof IPFS_METADATA_EVENTS[K];
export type MetadataValue<K extends MetadataType> = ReturnType<
  typeof IPFS_METADATA_PARSERS[K]
>;

/**
 * IpfsMetadata
 *
 * This is part of the [[ColonyNetwork]] and [[ColonyEventManager]] classes and not to be meant to instantiated directly.
 * You can find an instance of this under `colonyNetwork.ipfs` or `eventManager.ipfs`
 *
 * @internal
 *
 */
export class IpfsMetadata {
  private adapter: IpfsAdapter;

  constructor(adapter?: IpfsAdapter) {
    this.adapter = adapter || new CloudflareReadonlyAdapter();
  }

  static eventSupportsMetadata(eventName: string) {
    if (Object.keys(IPFS_METADATA_EVENTS).includes(eventName)) {
      return true;
    }
    return false;
  }

  async getMetadata<K extends MetadataType>(
    type: K,
    cid: string,
  ): Promise<MetadataValue<K>> {
    const url = this.adapter.getIpfsUrl(cid);
    const res = await fetchRetry(url);
    try {
      const data = await res.text();
      return IPFS_METADATA_PARSERS[type](data) as MetadataValue<K>;
    } catch (e) {
      throw new Error(
        `Could not parse IPFS metadata. Original error: ${
          (e as Error).message
        }`,
      );
    }
  }

  async getMetadataForEvent<T extends MetadataType, E extends MetadataEvent<T>>(
    eventName: E,
    cid: string,
  ): Promise<MetadataValue<T>> {
    const url = this.adapter.getIpfsUrl(cid);
    const res = await fetchRetry(url);
    try {
      const data = await res.text();
      const entry = Object.entries(IPFS_METADATA_EVENTS).find(
        ([, value]) => value === eventName,
      );
      if (!entry) {
        throw new Error(`Not a valid MetadataEvent: ${eventName}`);
      }
      const metadataType = entry[0] as T;

      return IPFS_METADATA_PARSERS[metadataType](data) as MetadataValue<T>;
    } catch (e) {
      throw new Error(
        `Could not parse IPFS metadata. Original error: ${
          (e as Error).message
        }`,
      );
    }
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

  async uploadMetadata<T extends MetadataType>(
    type: T,
    data: Parameters<typeof IPFS_METADATA_ENCODERS[T]>[0],
  ) {
    const str = IPFS_METADATA_ENCODERS[type](
      // @ts-expect-error Is it possible to type this properly without repeating all the checks from the parser library?
      data,
    );
    return this.adapter.uploadJson(str);
  }
}
