/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';

import MultisigOperation from '../classes/MultisigOperation';

jest.mock('web3-utils', () => ({
  soliditySha3: jest.fn().mockImplementation(input => input),
  padLeft: jest.fn().mockImplementation(input => input),
  isHexStrict: jest.fn().mockReturnValue(true),
  isAddress: jest.fn().mockReturnValue(true),
  isHex: jest.fn().mockReturnValue(true),
}));

describe('ContractMethodMultisigSender', () => {
  const sandbox = createSandbox();

  beforeEach(() => sandbox.clear());

  const signature = {
    sigR: '0x3810976581519370936455002930541734832270292486195672859026812854',
    sigS: '0x2717400036569076491467357688191371198012187172992592815125647808',
    sigV: 28,
  };
  const firstNonce = 5;
  const secondNonce = 6;
  const sender = {
    sendMultisig: sandbox.fn(),
    getNonce: sandbox
      .fn()
      .mockReturnValueOnce(Promise.resolve(firstNonce))
      .mockReturnValueOnce(Promise.resolve(secondNonce)),
    client: {
      adapter: {
        signMessage: sandbox.fn().mockReturnValue(Promise.resolve(signature)),
        wallet: {
          address: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
        },
      },
    },
  };
  const state = {
    signers: new Map([
      [
        '0x281055afc982d96fab65b3a49cac8b878184cb16',
        { sigR: '0x123', sigS: '0x234', sigV: 123 },
      ],
    ]),
    payload: {
      data: '0xdata',
      destinationAddress: '0xdestination',
      inputValues: { id: 1 },
      sourceAddress: '0xsource',
      value: 1,
      nonce: 5,
    },
  };

  test('State is validated', () => {
    const op = new MultisigOperation(sender, state);

    sandbox.spyOn(op, '_validatePayload').mockReturnValue(true);
    sandbox.spyOn(op, '_validateSigners').mockReturnValue(true);

    const valid = op.validateState(state);

    expect(valid).toBe(true);
    expect(op._validateSigners).toHaveBeenCalledWith(state.signers);
    expect(op._validatePayload).toHaveBeenCalledWith(state.payload);
  });

  test('State is validated in constructor', () => {
    sandbox
      .spyOn(MultisigOperation.prototype, 'validateState')
      .mockReturnValue(true);

    const op = new MultisigOperation(sender, state);

    expect(op).toBeInstanceOf(MultisigOperation);
    expect(op.sender).toBe(sender);
    expect(op.state).toBe(state);
    expect(op.validateState).toHaveBeenCalledWith(state);
  });

  test('ERC191 Message hash is created properly', async () => {
    const op = new MultisigOperation(sender, state);

    // The string to be hashed should contain:
    // the initial 0x19 byte and version byte (`0x1900`)
    // source address (with initial 0x removed - `source`)
    // destination address (with initial 0x removed - `destination`)
    // transaction data (with initial 0x removed - `data`)
    // transaction value (`5`)
    expect(op.messageHash).toMatch(/^0x1900sourcedestination.+data5$/);
  });

  test('Operation can be signed with wallet', async () => {
    const hash = 'hash';
    sandbox
      .spyOn(MultisigOperation.prototype, 'getERC191MessageHash')
      .mockReturnValue(hash);

    const op = new MultisigOperation(sender, state);

    const newSigners = await op.sign();
    const walletAddress = op.sender.client.adapter.wallet.address;

    expect(MultisigOperation.prototype.getERC191MessageHash).toHaveBeenCalled();
    expect(op.sender.client.adapter.signMessage).toHaveBeenCalledWith(hash);
    expect(op.state.signers).toEqual(newSigners);
    expect(op.state.signers.has(walletAddress)).toBe(true);
    expect(op.state.signers.get(walletAddress)).toEqual(signature);

    // It should not be possible to sign with the same wallet twice
    try {
      await op.sign();
    } catch (error) {
      expect(error.toString()).toMatch(
        'A signature has already been added for address',
      );
    }
  });

  test('Operation can be sent with Sender', async () => {
    const op = new MultisigOperation(sender, state);

    const options = { gasPrice: 1 };
    await op.send(options);

    expect(op.sender.sendMultisig).toHaveBeenCalledWith(op.state, options);
  });
});
