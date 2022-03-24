import { resolve as resolvePath } from 'path';
import { readFileSync } from 'fs';
import { Wallet, providers } from 'ethers';
import execa, { ExecaChildProcess } from 'execa';

import { Network, getColonyNetworkClient } from '..';

const NETWORK_PATH = resolvePath(__dirname, '../../vendor/colonyNetwork');

let deployed: { etherRouterAddress: string };
let ganache: ExecaChildProcess;
let wallet1: Wallet;
// Array of tupels [address, privateKey]
let ganacheAccounts: Array<[string, string]>;

beforeAll(async () => {
  ganache = execa('bash', ['./scripts/start-blockchain-client.sh'], {
    cwd: NETWORK_PATH,
  });
  await new Promise((resolve, reject) => {
    if (ganache.stdout && ganache.stderr) {
      ganache.stderr.on('data', (err) => reject(new Error(err)));
      ganache.stdout.on('data', (data) => {
        if (data.toString().includes('ganache-cli')) {
          resolve(data);
        }
      });
    } else {
      reject(new Error('Something went wrong'));
    }
  });

  const provider = new providers.JsonRpcProvider('http://localhost:8545');

  await execa('npm', ['run', 'provision:token:contracts'], {
    cwd: NETWORK_PATH,
  });

  await execa('truffle', ['deploy'], {
    cwd: NETWORK_PATH,
    preferLocal: true,
    localDir: NETWORK_PATH,
  });

  deployed = JSON.parse(
    readFileSync(
      resolvePath(NETWORK_PATH, 'etherrouter-address.json'),
    ).toString(),
  );

  ganacheAccounts = Object.entries(
    JSON.parse(
      readFileSync(
        resolvePath(NETWORK_PATH, 'ganache-accounts.json'),
      ).toString(),
    ).private_keys,
  );

  wallet1 = new Wallet(ganacheAccounts[0][1], provider);
}, 10 * 60 * 1000);

afterAll(() => {
  ganache.kill('SIGKILL');
});

describe('ColonyNetwork', () => {
  it('Can get the colony network', async () => {
    const colonyNetworkClient = getColonyNetworkClient(
      Network.Custom,
      wallet1,
      {
        networkAddress: deployed.etherRouterAddress,
      },
    );
    const colonyCount = await colonyNetworkClient.getColonyCount();
    expect(colonyCount.toNumber()).toEqual(1);
  });
});
