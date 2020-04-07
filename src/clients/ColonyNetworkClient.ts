import { Signer } from 'ethers';
import { Provider } from 'ethers/providers';

// @TODO this _HAS_ to be the newest version _ALWAYS_. Let's try to figure out a way to make sure of this
import { IColonyNetworkFactory } from '../../lib/contracts/4/IColonyNetworkFactory';
import { IColonyNetwork } from '../../lib/contracts/4/IColonyNetwork';

import getColonyVersionClient from './Colony/ColonyVersionClient';
import getColonyClientV1, { ExtendedIColonyV1 } from './Colony/ColonyClientV1';
import getColonyClientV2, { ExtendedIColonyV2 } from './Colony/ColonyClientV2';

import { ColonyVersions } from '../../versions';
import { colonyNetworkAddresses, Network } from '../constants';

type AnyColonyClient = ExtendedIColonyV1 | ExtendedIColonyV2;

export interface ExtendedIColonyNetwork extends IColonyNetwork {
  getColonyClient(
    addressOrId: string | number,
    signerOrProvider: Signer | Provider,
  ): Promise<AnyColonyClient>;
}

const getColonyNetworkClient = (
  network: Network = Network.mainnet,
  signerOrProvider: Signer | Provider,
  address?: string,
): ExtendedIColonyNetwork => {
  const networkAddress = address || colonyNetworkAddresses[network];
  if (!networkAddress) {
    throw new Error(
      `Could not get network address for ${network}. Please specify`,
    );
  }

  const networkClient = IColonyNetworkFactory.connect(
    networkAddress,
    signerOrProvider,
  ) as ExtendedIColonyNetwork;

  networkClient.getColonyClient = async (
    addressOrId: string | number,
    providerOrSigner: Provider | Signer,
  ): Promise<AnyColonyClient> => {
    let colonyAddress: string;
    if (typeof addressOrId == 'number') {
      colonyAddress = await networkClient.getColony(addressOrId);
    } else {
      colonyAddress = addressOrId;
    }
    const colonyVersionClient = await getColonyVersionClient(
      colonyAddress,
      signerOrProvider,
    );
    // This is not typed and super hacky, but I have no better idea ¯\_(ツ)_/¯
    // We have to get the version somehow before instantiating the right contract version
    const versionBN = await colonyVersionClient.version();
    const version = versionBN.toNumber() as ColonyVersions;
    switch (version) {
      case ColonyVersions.GoerliGlider: {
        return getColonyClientV1.call(
          networkClient,
          colonyAddress,
          providerOrSigner,
        );
      }
      case ColonyVersions.Glider: {
        return getColonyClientV2.call(
          networkClient,
          colonyAddress,
          providerOrSigner,
        );
      }
      default: {
        throw new Error('Colony version not supported');
      }
    }
  };

  return networkClient;
};

export default getColonyNetworkClient;
