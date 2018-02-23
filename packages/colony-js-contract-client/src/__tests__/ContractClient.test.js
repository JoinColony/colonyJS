/* eslint-env jest */

// FIXME these tests are probably way out of date

// import * as web3 from 'web3-utils';
// import createSandbox from 'jest-sandbox';
// import ContractClient from '../modules/ContractClient';
//
// describe('ContractClient', () => {
//   const sandbox = createSandbox();
//
//   beforeEach(() => sandbox.clear());
//
//   const adapter = {
//     waitForTransaction: sandbox.fn(async hash => Promise.resolve({ hash })),
//     getEventPromises: sandbox.fn(() => [Promise.resolve('event promise')]),
//     getContract: sandbox.fn(async () =>
//       Promise.resolve({
//         address: '0xdeadbeef',
//         functions: {
//           createColony: sandbox.fn(() =>
//             Promise.resolve({
//               colonyId: 123,
//             }),
//           ),
//           upgradeColony: sandbox.fn(() => Promise.resolve()),
//         },
//         estimate: {
//           createColony: sandbox.fn(() => Promise.resolve(10000)),
//           upgradeColony: sandbox.fn(() => Promise.resolve()),
//         },
//       }),
//     ),
//   };
//
//   test('Initialization', async () => {
//     const client = await ContractClient.create('TestContract', adapter);
//     expect(client.adapter).toBe(adapter);
//     expect(client.contract.address).toBe('0xdeadbeef');
//   });
//
//   test('Contract loading', async () => {
//     const client = await ContractClient.create(
//       { contractName: 'TestContract' },
//       adapter,
//     );
//     expect(typeof client.contract.functions.createColony).toBe('function');
//     expect(typeof client.contract.functions.upgradeColony).toBe('function');
//     expect(typeof client.contract.estimate.createColony).toBe('function');
//     expect(typeof client.contract.estimate.upgradeColony).toBe('function');
//   });
//
//   test('Contract loading for versioned contract', async () => {
//     const query = { contractName: 'TestContract', version: 2 };
//     const client = await ContractClient.create(query, adapter);
//     expect(client.adapter.getContract).toHaveBeenCalledWith(query);
//     expect(typeof client.contract.functions.createColony).toBe('function');
//     expect(typeof client.contract.functions.upgradeColony).toBe('function');
//     expect(typeof client.contract.estimate.createColony).toBe('function');
//     expect(typeof client.contract.estimate.upgradeColony).toBe('function');
//   });
//
//   test('Calling contract functions', async () => {
//     const client = await ContractClient.create(
//       { contractName: 'TestContract' },
//       adapter,
//     );
//     const colony = await client.contract.functions.createColony();
//     expect(colony.colonyId).toBe(123);
//   });
//
//   test('checkIsAddress', () => {
//     const address = '0x8888f1f195afa192cfee860698584c030f4c9db1';
//     expect(ContractClient.checkIsAddress(address)).toBe(true);
//     expect(ContractClient.checkIsAddress(address.slice(2))).toBe(true);
//
//     expect(() => ContractClient.checkIsAddress(address.slice(3))).toThrow(
//       `Address ${address.slice(3)} is not a valid address`,
//     );
//     expect(() => ContractClient.checkIsAddress(123)).toThrow();
//     expect(() => ContractClient.checkIsAddress()).toThrow();
//     expect(() => ContractClient.checkIsAddress('0x123')).toThrow();
//   });
//
//   test('estimate', async () => {
//     const bigBumber = new web3.BN(123);
//     const estimateFn = jest.fn().mockReturnValue(bigBumber);
//     const client = await ContractClient.create(
//       { contractName: 'TestContract' },
//       adapter,
//     );
//     const result = await client.estimate(estimateFn, {}, 'abc', 'xyz');
//     expect(result).toBe(bigBumber);
//     expect(estimateFn).toHaveBeenCalledTimes(1);
//     expect(estimateFn).toHaveBeenCalledWith('abc', 'xyz');
//   });
//
//   test('call', async () => {
//     const value = [123, 456];
//     const callFn = jest.fn().mockReturnValue(value);
//     const client = await ContractClient.create(
//       { contractName: 'TestContract' },
//       adapter,
//     );
//     const result = await client.call(callFn, {}, 'abc', 'xyz');
//     expect(result).toBe(value);
//     expect(callFn).toHaveBeenCalledTimes(1);
//     expect(callFn).toHaveBeenCalledWith('abc', 'xyz');
//   });
//
//   test('send', async () => {
//     const client = await ContractClient.create(
//       { contractName: 'TestContract' },
//       adapter,
//     );
//     const events = ['MyEvent'];
//     const transaction = {
//       creates: '0x123',
//       data: 'here is the data',
//       from: '0x123',
//       hash: '0x1337',
//     };
//     const timeoutMs = 10000;
//     const miningTimeoutMs = 20000;
//     const contractFn = jest.fn().mockReturnValue(transaction);
//
//     const result = await client.send(
//       contractFn,
//       { events, miningTimeoutMs, timeoutMs, exampleTxOption: 123 },
//       'abc',
//       'xyz',
//     );
//     expect(result).toMatchObject({
//       events: [expect.any(Promise)],
//       meta: {
//         confirmed: expect.any(Promise),
//         transaction,
//       },
//     });
//     expect(contractFn).toHaveBeenCalledTimes(1);
//     expect(contractFn).toHaveBeenCalledWith('abc', 'xyz', {
//       exampleTxOption: 123,
//     });
//     expect(client.adapter.waitForTransaction).toHaveBeenCalledTimes(1);
//     expect(client.adapter.waitForTransaction).toHaveBeenCalledWith(
//       transaction.hash,
//       miningTimeoutMs,
//     );
//     expect(client.adapter.getEventPromises).toHaveBeenCalledTimes(1);
//     expect(client.adapter.getEventPromises).toHaveBeenCalledWith({
//       contract: client.contract,
//       events,
//       timeoutMs: miningTimeoutMs,
//       transactionHash: transaction.hash,
//     });
//   });
// });
