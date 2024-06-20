import type { ColonyVersion } from '@colony/core';
import { getTokenClient } from '@colony/tokens';

import { ColonyNetworkClient } from '../ColonyNetworkClient.js';
import getColonyVersionClient from './ColonyVersionClient.js';

import getColonyClientV1 from './ColonyClientV1.js';
import getColonyClientV2 from './ColonyClientV2.js';
import getColonyClientV3 from './ColonyClientV3.js';
import getColonyClientV4 from './ColonyClientV4.js';
import getColonyClientV5 from './ColonyClientV5.js';
import getColonyClientV6 from './ColonyClientV6.js';
import getColonyClientV7 from './ColonyClientV7.js';
import getColonyClientV8 from './ColonyClientV8.js';
import getColonyClientV9 from './ColonyClientV9.js';
import getColonyClientV10 from './ColonyClientV10.js';
import getColonyClientV11 from './ColonyClientV11.js';
import getColonyClientV12, { ColonyClientV12 } from './ColonyClientV12.js';
import getColonyClientV13, { ColonyClientV13 } from './ColonyClientV13.js';
import getColonyClientV14, { ColonyClientV14 } from './ColonyClientV14.js';
import getColonyClientV15, { ColonyClientV15 } from './ColonyClientV15.js';
import getColonyClientV16, { ColonyClientV16 } from './ColonyClientV16.js';

export { ColonyClientV12 } from './ColonyClientV12.js';
export { ColonyClientV13 } from './ColonyClientV13.js';
export { ColonyClientV14 } from './ColonyClientV14.js';
export { ColonyClientV15 } from './ColonyClientV15.js';
export { ColonyClientV16 } from './ColonyClientV16.js';

export type AnyColonyClient =
  | ColonyClientV12
  | ColonyClientV13
  | ColonyClientV14
  | ColonyClientV15
  | ColonyClientV16;

/** Versioned core contract names */
export enum Core {
  IColony = 'IColony',
}

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
  let version;
  try {
    const versionBN = await colonyVersionClient.version();
    version = versionBN.toNumber() as ColonyVersion;
  } catch (e) {
    console.error(e);
    throw new Error(
      'Could not read Colony version. Is this a valid Colony address?',
    );
  }
  let colonyClient: AnyColonyClient;
  switch (version) {
    case 1: {
      colonyClient = getColonyClientV1.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 2: {
      colonyClient = getColonyClientV2.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 3: {
      colonyClient = getColonyClientV3.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 4: {
      colonyClient = getColonyClientV4.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 5: {
      colonyClient = getColonyClientV5.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 6: {
      colonyClient = getColonyClientV6.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 7: {
      colonyClient = getColonyClientV7.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 8: {
      colonyClient = getColonyClientV8.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 9: {
      colonyClient = getColonyClientV9.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 10: {
      colonyClient = getColonyClientV10.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 11: {
      colonyClient = getColonyClientV11.call(
        this,
        colonyAddress,
        signerOrProvider,
      ) as ColonyClientV12;
      break;
    }
    case 12: {
      colonyClient = getColonyClientV12.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 13: {
      colonyClient = getColonyClientV13.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 14: {
      colonyClient = getColonyClientV14.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 15: {
      colonyClient = getColonyClientV15.call(
        this,
        colonyAddress,
        signerOrProvider,
      );
      break;
    }
    case 16: {
      colonyClient = getColonyClientV16.call(
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
