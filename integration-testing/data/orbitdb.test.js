/* eslint-env jest */
import { sleep } from '../../src/utils/time';
import * as orbit from '../../src/data/orbit';
import DDBTestFactory from '../utils/DDBTestFactory';
import { retryUntilValue } from '../utils/tools';

const factory = new DDBTestFactory('orbitdb.test');
let pinner = null;
let orbit1 = null;
let orbit2 = null;

beforeAll(async () => {
  pinner = await factory.pinner();
  orbit1 = await factory.orbit('orbit1');
  await sleep(600); // prevent nodes with same keys
  orbit2 = await factory.orbit('orbit2');
  await factory.ready();
}, DDBTestFactory.TIMEOUT);

afterAll(async () => {
  await factory.clear();
}, DDBTestFactory.TIMEOUT);

describe('Orbitdb configuration', () => {
  test('Get default config', () => {
    const options = orbit.makeOptions();
    expect(options).toBeTruthy();
  });
});

describe('OrbitDB store management', () => {
  test('Get an orbitdb store', async () => {
    const db = await orbit1.keyvalue(factory.name('get-store-test'));
    await db.put('key', 'value');
    expect(db.get('key')).toBe('value');
  });
});

describe('OrtbiDB peers management', () => {
  test(
    'an orbitdb store will be seen by the other node',
    async () => {
      const db = await orbit1.keyvalue(factory.name('share-store-test'));
      await pinner.pin(db);
      const db2 = await orbit2.keyvalue(db.address);

      await db.put('hello', 'world');

      expect(await retryUntilValue(() => db2.get('hello'))).toBe('world');
    },
    120000,
  );
});
