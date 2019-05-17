// Import actions
const getNetworkClient = require('../actions/getNetworkClient');
const openWallet = require('../actions/openWallet');

// Set the public key (this is the public key for the first Ganache test account)
const publicKey = '0xb77d57f4959eafa0339424b83fcfaf9c15407461';

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae';

// Testing colony-starter actions
describe('colony-starter [ goerli ]', () => {

  // Set state
  const state = {}

  // Test the openWallet() example action
  test('openWallet() works', async () => {
    state.wallet = await openWallet(
      privateKey,                     // privateKey
    );
    expect(state.wallet.address.toLowerCase()).toEqual(publicKey);
  }, 5000)

  // Test the getNetworkClient() example action
  test('getNetworkClient() works', async () => {
    state.networkClient = await getNetworkClient(
      'goerli',                      // network
      state.wallet,                   // wallet
    );
    expect(state.networkClient).toEqual(expect.objectContaining({
      contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
        signer: expect.objectContaining({
          address: expect.stringContaining('0x'),
        }),
      })
    }));
  }, 5000);

});
