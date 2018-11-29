/* eslint-env jest */
import * as ipfs from '../../src/data/ipfs';
import { sleep } from '../../src/utils/time';
import DDBTestFactory from '../utils/DDBTestFactory';

let pinner = null;
let node1 = null;
let node2 = null;

const factory = new DDBTestFactory('ipfs.test');

beforeAll(async () => {
  pinner = await factory.pinner();
  node1 = await factory.node('node1');
  await sleep(600); // prevent nodes with same keys
  node2 = await factory.node('node2');
  await factory.ready();
}, DDBTestFactory.TIMEOUT);

afterAll(async () => {
  await factory.clear();
}, DDBTestFactory.TIMEOUT);

describe('IPFS configuration', () => {
  test('Get default config', () => {
    const options = ipfs.makeOptions({ repo: 'test1' });

    expect(options).toBeTruthy();
    expect(options.config.Bootstrap).toBeTruthy();
    expect(options.config.Addresses.Swarm).toBeTruthy();
    expect(options.EXPERIMENTAL.pubsub).toBeTruthy();
  });
});

describe('IPFS peers management', () => {
  test(
    'wait for peers exists and will return something after a while',
    async () => {
      const peers = await ipfs.waitForSomePeers(node1);

      expect(peers).toBeTruthy();
      expect(peers.length).toBeGreaterThan(0);
    },
    25000,
  );

  test(
    'two nodes will see each other data through the pinner',
    async () => {
      const block = Buffer.from('helloworld, I am a node from ipfs.test');

      const putResult = await node1.block.put(block);
      const blockID = putResult.cid.toBaseEncodedString();

      await pinner.pinBlock(blockID);

      const retrieved = await node2.block.get(blockID);

      expect(retrieved).toBeTruthy();
    },
    120000,
  );
});
