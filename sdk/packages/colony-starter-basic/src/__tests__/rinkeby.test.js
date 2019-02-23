// Import examples
const connectNetwork = require('../examples/connectNetwork');
const getAccounts = require('../examples/getAccounts');

// State
const state = {};

// Testing Colony Starter Basic examples
describe('Colony Starter Basic', () => {

  // Test TrufflepigLoader getAccounts()
  test('getAccounts() works', async () => {
    state.accounts = await getAccounts();
    expect(state.accounts.length).toEqual(12);
  }, 5000)

  // Test the connectNetwork() example from account[0]
  test('account[0] connectNetwork() works', async () => {
    state.networkClient = await connectNetwork(
      'rinkeby',                      // network
      state.accounts[0][1],           // privateKey
    );
    expect(state.networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
        signer: expect.objectContaining({
          address: expect.stringContaining('0x'),
        }),
      })
    }));
  }, 5000);

});
