import { bigNumberify } from 'ethers/utils';
import { isAddress } from 'web3-utils';
import { getNetworkClient } from './utils/network-client-helpers';

let colonyToken;
let colonyAddress;

const colonyCreatorAddress = Object.keys(
  global.ganacheAccounts.private_keys,
)[0];

test('Create a new Colony (instance)', async t => {
  /*
     * Get the network client
     */
  const networkClient = await getNetworkClient(colonyCreatorAddress);
  /*
     * There should only be one colony at this point, the meta colony
     */
  const { count: coloniesBefore } = await networkClient.getColonyCount.call();
  /*
     * Create a new colony
     */
  const colonyClientInstance = await networkClient.createColony.send(
    {
      tokenAddress: await networkClient.createToken({
        name: 'Integration Test Token',
        symbol: 'ITT',
      }),
    },
    {
      gasLimit: bigNumberify(7000000),
      waitForMining: true,
    },
  );
  t.true(Object.hasOwnProperty.call(colonyClientInstance, 'eventData'));
  t.true(
    Object.hasOwnProperty.call(colonyClientInstance.eventData, 'colonyId'),
  );
  t.true(
    Object.hasOwnProperty.call(colonyClientInstance.eventData, 'colonyAddress'),
  );
  /*
     * Get the Colony's Instance
     */
  const colonyClient = await networkClient.getColonyClient(
    colonyClientInstance.eventData.colonyId,
  );
  t.truthy(isAddress(colonyClient.contract.address));
  /*
     * Save address for later (so we can check against)
     */
  colonyAddress = colonyClient.contract.address;
  /*
     * Check if valid methods are available
     */
  t.true(Object.hasOwnProperty.call(colonyClient, 'getTask'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'getNonRewardPotsTotal'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'getPotBalance'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'getTaskCount'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'getTaskPayout'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'getTaskRole'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'getTaskWorkRatings'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'getTaskWorkRatingSecret'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'getToken'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'addDomain'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'addGlobalSkill'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'assignWorkRating'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'cancelTask'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'claimColonyFunds'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'claimPayout'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'createTask'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'finalizeTask'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'mintTokens'));
  t.true(
    Object.hasOwnProperty.call(colonyClient, 'mintTokensForColonyNetwork'),
  );
  t.true(Object.hasOwnProperty.call(colonyClient, 'moveFundsBetweenPots'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'revealTaskWorkRating'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'submitTaskDeliverable'));
  t.true(Object.hasOwnProperty.call(colonyClient, 'submitTaskWorkRating'));
  /*
     * Save the tokens address for later (so we can check against)
     */
  colonyToken = await colonyClient.getToken.call().address;
  /*
     * There should two colonies now, the meta colony, and the one newly created
     */
  const coloniesAfter = await networkClient.getColonyCount.call();
  t.is(coloniesAfter.count, coloniesBefore + 1);
});

test('Recover an existing Colony', async t => {
  /*
     * Get the network client
     */
  const networkClient = await getNetworkClient(colonyCreatorAddress);
  /*
     * Recover the colony using it's name
     */
  const recoveredColonyClientInstance = await networkClient.getColonyClientByAddress(
    colonyAddress,
  );
  /*
     * The recovered Colony should have the same contract address and token
     * address as the one created previously
     */
  t.is(recoveredColonyClientInstance.contract.address, colonyAddress);
  t.is(
    await recoveredColonyClientInstance.getToken.call().address,
    colonyToken,
  );
});
test('Make the Colony creator an ADMIN', async t => {
  /*
     * Get the network client
     */
  const networkClient = await getNetworkClient(colonyCreatorAddress);
  /*
     * Get the number of colonies. This will also represent the last created
     * colony's Id which we created in the previous step.
     */
  const { count: lastColonyId } = await networkClient.getColonyCount.call();
  /*
     * Get the existing colony
     */
  const colonyClient = await networkClient.getColonyClient(lastColonyId);
  const setColonyAdminTransaction = await colonyClient.setAdminRole.send({
    user: colonyCreatorAddress,
  });
  t.true(setColonyAdminTransaction.successful);
});
