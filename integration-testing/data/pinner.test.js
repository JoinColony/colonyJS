/* eslint-env jest */
import PinnerClient from '../../src/lib/pinningService/packages/pinning-service-client/src';
import DDBTestFactory from '../utils/DDBTestFactory';
import { retryUntilValue } from '../utils/tools';

const PINNER_URL = 'http://localhost:9090';

const factory = new DDBTestFactory('pinner.test');
let pinnerClient = null;
let data1 = null;
let data2 = null;

beforeAll(async () => {
  pinnerClient = PinnerClient.fromConfig({ host: PINNER_URL });
  await pinnerClient.ready();

  await factory.pinner(pinnerClient);
  data1 = await factory.Data('data1');
  data2 = await factory.Data('data2');
  await factory.ready();
}, DDBTestFactory.TIMEOUT);

afterAll(async () => {
  await pinnerClient.stop();
  await factory.clear();
}, DDBTestFactory.TIMEOUT);

describe('Smoke Test', () => {
  test('client is online', async () => {
    expect(await pinnerClient.isOnline()).toBe(true);
  });
});

describe('Data Test', () => {
  it(
    'pins and share data via the default pinner',
    async () => {
      const p1 = await data1.getMyUserProfile();
      const p2 = await data2.getUserProfile(p1.address());
      const name = factory.name('Jacques Brel');

      await p1.setName(name);

      expect(
        await retryUntilValue(() => p2.isEmpty(), {
          value: false,
        }),
      ).toBeFalsy();
      expect(await retryUntilValue(() => p2.getName(), { value: name })).toBe(
        name,
      );
    },
    DDBTestFactory.TIMEOUT,
  );
});
