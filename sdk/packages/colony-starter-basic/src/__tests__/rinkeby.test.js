// Import connectRinkeby example
const connectRinkeby = require('../examples/connectRinkeby');

// Testing Colony Starter Basic (rinkeby) example
describe('Colony Starter Basic (rinkeby)', () => {

  // Test the connectRinkeby() example
  test('connectRinkeby() works', async () => {
    const networkClient = await connectRinkeby();
    expect(networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
        signer: expect.objectContaining({
          address: expect.stringContaining('0x'),
        }),
      }),
    }));
  }, 5000);

});
