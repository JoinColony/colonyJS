import { BaseProvider } from 'ethers/providers';

import getColonyClient from '../ColonyClientV2';

describe('ColonyClient V1', () => {
  it('Runs', () => {
    const provider = new BaseProvider(1337);
    const client = getColonyClient(
      '0x883365703879860a004496CF477d62939E6C911C',
      provider,
    );
    console.info(client);
  });
});
