import { resolve as resolvePath } from 'path';
import execa, { ExecaChildProcess } from 'execa';

const NETWORK_PATH = resolvePath(__dirname, '../../vendor/colonyNetwork');

let ganache: ExecaChildProcess;

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

  await execa('npm', ['run', 'provision:token:contracts'], {
    cwd: NETWORK_PATH,
  });

  return execa('truffle', ['deploy'], {
    cwd: NETWORK_PATH,
    preferLocal: true,
    localDir: NETWORK_PATH,
  });
}, 2 * 60 * 1000);

afterAll(() => {
  ganache.kill('SIGTERM', {
    forceKillAfterTimeout: 2000,
  });
});

describe('ColonyNetwork', () => {
  it('Can create domain proofs', async () => {
    // const colonyNetworkClient = getColonyNetworkClient(
    //   Network.local,
    //   wallet,
    //   '0x60AF1EBc146C7523A855357ef6386c55b3d703c0',
    // );
    // const colonyCount = await colonyNetworkClient.getColonyCount();
    // expect(colonyCount).toEqual(bigNumberify(2));
    // const colonyClient = await colonyNetworkClient.getColonyClient(2);
    // const proofs = await getPermissionProofs(
    //   colonyClient,
    //   3,
    //   ColonyRole.Architecture,
    // );
    // console.log(proofs);
  });
});
