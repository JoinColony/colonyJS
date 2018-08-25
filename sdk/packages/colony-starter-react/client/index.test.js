// Import actions
const connectNetwork = require('./actions/connectNetwork');

// Testing Colony Starter React
describe('Colony Starter React', () => {

  // Test the connectNetwork() action
  test('connectNetwork() works', async () => {
    let networkClient = await connectNetwork(0);
    expect(networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

});
