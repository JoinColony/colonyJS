import rimraf from 'rimraf';
import * as ipfs from '../../src/data/ipfs';
import * as orbitdb from '../../src/data/orbit';

const MOCK_PINNERS_ROOT = '/tmp/tests/pinners/';

/**
 * Pinner object,
 * mimick a pinning service that stores content & sync nodes.
 *
 * @returns {Promise<{node: (getIPFS|IPFS), tcp: (function(): string), ws: (function(): string), pinBlock: (function(*=): *), peers: *}>}
 * @constructor
 */
export default (async function makePinner(pinnerName) {
  const pinnerRoot = `${MOCK_PINNERS_ROOT}/${pinnerName}`;

  const node = ipfs.getIPFS(
    ipfs.makeOptions({
      repo: `${pinnerRoot}/ipfsRepo`,
      bootstrap: [],
      swarm: ['/ip4/0.0.0.0/tcp/5002', '/ip4/127.0.0.1/tcp/5003/ws'],
    }),
  );

  await node.ready();

  // Get Node ID
  const nodeID = await ipfs.getNodeID(node);

  const bootstrap = [
    `/ip4/127.0.0.1/tcp/5002/ipfs/${nodeID}`,
    `/ip4/127.0.0.1/tcp/5003/ws/ipfs/${nodeID}`,
  ];

  const orbit = await orbitdb.getOrbitDB(
    node,
    orbitdb.makeOptions({
      repo: `${pinnerRoot}/orbitRepo`,
    }),
  );

  const stop = async () => {
    await orbit.stop();
    await node.stop();
    await new Promise((resolve, reject) => {
      rimraf(pinnerRoot, {}, err => (err ? reject(err) : resolve()));
    });
  };

  const pinnedStores = [];

  return {
    stop,
    node,
    orbit,
    nodeID,
    bootstrapServers: async () => bootstrap,
    waitForMe: ipfsNode => ipfsNode.waitForPeer(nodeID),
    pinBlock: id => node.block.get(id),
    pin: async store => {
      const localStore = await orbit.keyvalue(store.address);
      pinnedStores.push(localStore);
    },
  };
});
