import { createContractVersionArray } from '../../utils';

import { ColonyNetworkClient } from '../ColonyNetworkClient';
import getColonyVersionClient from './ColonyVersionClient';
import getTokenClient from '../TokenClient';

import getColonyClientV1, { ColonyClientV1 } from './ColonyClientV1';
import getColonyClientV2, { ColonyClientV2 } from './ColonyClientV2';
import getColonyClientV3, { ColonyClientV3 } from './ColonyClientV3';
import getColonyClientV4, { ColonyClientV4 } from './ColonyClientV4';
import getColonyClientV5, { ColonyClientV5 } from './ColonyClientV5';
import getColonyClientV6, { ColonyClientV6 } from './ColonyClientV6';
import getColonyClientV7, { ColonyClientV7 } from './ColonyClientV7';
import getColonyClientV8, { ColonyClientV8 } from './ColonyClientV8';
import getColonyClientV9, { ColonyClientV9 } from './ColonyClientV9';

export { ColonyClientV1 } from './ColonyClientV1';
export { ColonyClientV2 } from './ColonyClientV2';
export { ColonyClientV3 } from './ColonyClientV3';
export { ColonyClientV4 } from './ColonyClientV4';
export { ColonyClientV5 } from './ColonyClientV5';
export { ColonyClientV6 } from './ColonyClientV6';
export { ColonyClientV7 } from './ColonyClientV7';
export { ColonyClientV8 } from './ColonyClientV8';
export { ColonyClientV9 } from './ColonyClientV9';

export type AnyColonyClient =
  | ColonyClientV1
  | ColonyClientV2
  | ColonyClientV3
  | ColonyClientV4
  | ColonyClientV5
  | ColonyClientV6
  | ColonyClientV7
  | ColonyClientV8
  | ColonyClientV9;

/// Versioned core contract names
export enum Core {
  Colony = 'IColony',
}

// This is the latest colony version + 1. It's for generating types and compatibility maps
const COLONY_VERSION_NEXT = 10;

export const COLONY_VERSIONS = createContractVersionArray(COLONY_VERSION_NEXT);
export type ColonyVersion = typeof COLONY_VERSIONS[number];

/** @internal */
export async function getColonyClient(
  this: ColonyNetworkClient,
  addressOrId: string | number,
): Promise<AnyColonyClient> {
  let colonyAddress: string;
  const signerOrProvider = this.signer || this.provider;
  if (typeof addressOrId == 'number') {
    colonyAddress = await this.getColony(addressOrId);
  } else {
    colonyAddress = addressOrId;
  }
  const colonyVersionClient = getColonyVersionClient(
    colonyAddress,
    signerOrProvider,
  );
  // This is *kinda* hacky, but I have no better idea ¯\_(ツ)_/¯
  // We have to get the version somehow before instantiating the right contract version
  const versionBN = await colonyVersionClient.version();
  const version = versionBN.toNumber() as ColonyVersion;
  let colonyClient: AnyColonyClient;
  switch (version) {
    case 1: {
      colonyClient = getColonyClientV1.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 2: {
      colonyClient = getColonyClientV2.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 3: {
      colonyClient = getColonyClientV3.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 4: {
      colonyClient = getColonyClientV4.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 5: {
      colonyClient = getColonyClientV5.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 6: {
      colonyClient = getColonyClientV6.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 7: {
      colonyClient = getColonyClientV7.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 8: {
      colonyClient = getColonyClientV8.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 9: {
      colonyClient = getColonyClientV9.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    default: {
      throw new Error('Colony version not supported');
    }
  }

  const tokenAddress = await colonyClient.getToken();
  colonyClient.tokenClient = await getTokenClient(
    tokenAddress,
    signerOrProvider,
  );

  return colonyClient;
}

/** @internal */
export { default as getUtilsClient } from '../UtilsClient';
