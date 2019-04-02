// Import actions
const connectNetwork = require('../actions/connectNetwork');

// State
const state = {};

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d';

// Testing colony-starter actions
describe('colony-starter [ rinkeby ]', () => {

  // Test the connectNetwork() example from account[0]
  test('account[0] connectNetwork() works', async () => {
    state.networkClient = await connectNetwork(
      'rinkeby',                // network
      privateKey,               // privateKey
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
