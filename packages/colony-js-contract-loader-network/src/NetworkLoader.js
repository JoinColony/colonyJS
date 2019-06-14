/* @flow */

import assert from 'assert';
import ContractLoader, {
  truffleTransform,
} from '@colony/colony-js-contract-loader';

import type { RequiredContractProps } from '@colony/colony-js-contract-loader';

const NETWORKS = {
  GOERLI: 'goerli',
};

const DEFAULT_NETWORK = NETWORKS.GOERLI;

type Network = $Values<typeof NETWORKS>;

const LATEST_VERSION = 2;

const CONTRACTS_MANIFEST = {
  versioned: {
    [NETWORKS.GOERLI]: {
      '1': [
        'EtherRouter',
        'IColony',
        'IColonyNetwork',
        'IMetaColony',
        'IRecovery',
        'ITokenLocking',
        'OldRoles',
        'OldRolesFactory',
        'OneTxPayment',
        'OneTxPaymentFactory',
        'Token',
        'TokenAuthority',
      ],
      '2': [
        'EtherRouter',
        'IColony',
        'IColonyNetwork',
        'IMetaColony',
        'IRecovery',
        'ITokenLocking',
        'OldRoles',
        'OldRolesFactory',
        'OneTxPayment',
        'OneTxPaymentFactory',
        'Token',
        'TokenAuthority',
      ],
    },
  },
};

const VERSIONED_CONTRACTS = Object.entries(CONTRACTS_MANIFEST.versioned).reduce(
  (networks, [network, versions]) =>
    Object.assign(
      networks,
      {
        [network]: Object.entries(versions).reduce(
          (versionedContracts, [version, contractNames]) =>
            Object.assign(versionedContracts, {
              [version]: contractNames.reduce(
                (contracts, contractName) =>
                  Object.assign(contracts, {
                    // eslint-disable-next-line global-require, import/no-dynamic-require, max-len
                    [contractName]: require(`../contracts/versioned/${network}-v${version}/${contractName}.json`),
                  }),
                {},
              ),
            }),
          {},
        ),
      },
      {},
    ),
  {},
);

class NetworkLoader extends ContractLoader {
  _network: ?Network;

  constructor({ network = DEFAULT_NETWORK }: { network: Network } = {}) {
    super({ transform: truffleTransform });
    this._network = network;
  }

  async _load(query: Object = {}, requiredProps?: RequiredContractProps) {
    const network = this._network || DEFAULT_NETWORK;

    const { contractName = '', version = LATEST_VERSION } = query;
    const networkQuery = Object.assign({}, query, { network });

    assert(!!contractName, 'A `contractName` option must be provided');
    assert(!!version, 'A valid `version` option must be provided');

    const contract =
      VERSIONED_CONTRACTS[network] &&
      VERSIONED_CONTRACTS[network][version] &&
      VERSIONED_CONTRACTS[network][version][contractName];

    if (contract) return this._transform(contract, networkQuery, requiredProps);

    throw new Error(
      // eslint-disable-next-line max-len
      `Contract ${contractName} with version ${version} not found in ${network}`,
    );
  }
}

module.exports = NetworkLoader;
