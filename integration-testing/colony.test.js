import { bigNumberify } from 'ethers/utils';
import { isAddress } from 'web3-utils';
import { getNetworkClient } from './utils/network-client-helpers';

let colonyToken;
let colonyAddress;

const colonyCreatorAddress = Object.keys(
  global.ganacheAccounts.private_keys,
)[0];

jest.setTimeout(30000);

describe('`ColonyClient` is able to', () => {
  test('Create a new Colony (instance)', async () => {
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
    expect(colonyClientInstance).toHaveProperty('eventData');
    expect(colonyClientInstance.eventData).toHaveProperty('colonyId');
    expect(colonyClientInstance.eventData).toHaveProperty('colonyAddress');
    /*
     * Get the Colony's Instance
     */
    const colonyClient = await networkClient.getColonyClient(
      colonyClientInstance.eventData.colonyId,
    );
    expect(isAddress(colonyClient.contract.address)).toBeTruthy();
    /*
     * Save address for later (so we can check against)
     */
    colonyAddress = colonyClient.contract.address;
    /*
     * Check if valid methods are available
     */
    expect(colonyClient).toHaveProperty('getTask');
    expect(colonyClient).toHaveProperty('getNonRewardPotsTotal');
    expect(colonyClient).toHaveProperty('getPotBalance');
    expect(colonyClient).toHaveProperty('getTaskCount');
    expect(colonyClient).toHaveProperty('getTaskPayout');
    expect(colonyClient).toHaveProperty('getTaskRole');
    expect(colonyClient).toHaveProperty('getTaskWorkRatings');
    expect(colonyClient).toHaveProperty('getTaskWorkRatingSecret');
    expect(colonyClient).toHaveProperty('getToken');
    expect(colonyClient).toHaveProperty('addDomain');
    expect(colonyClient).toHaveProperty('addGlobalSkill');
    expect(colonyClient).toHaveProperty('assignWorkRating');
    expect(colonyClient).toHaveProperty('cancelTask');
    expect(colonyClient).toHaveProperty('claimColonyFunds');
    expect(colonyClient).toHaveProperty('claimPayout');
    expect(colonyClient).toHaveProperty('createTask');
    expect(colonyClient).toHaveProperty('finalizeTask');
    expect(colonyClient).toHaveProperty('mintTokens');
    expect(colonyClient).toHaveProperty('mintTokensForColonyNetwork');
    expect(colonyClient).toHaveProperty('moveFundsBetweenPots');
    expect(colonyClient).toHaveProperty('revealTaskWorkRating');
    expect(colonyClient).toHaveProperty('submitTaskDeliverable');
    expect(colonyClient).toHaveProperty('submitTaskWorkRating');
    /*
     * Save the tokens address for later (so we can check against)
     */
    colonyToken = await colonyClient.getToken.call().address;
    /*
     * There should two colonies now, the meta colony, and the one newly created
     */
    const coloniesAfter = await networkClient.getColonyCount.call();
    expect(coloniesAfter).toHaveProperty('count', coloniesBefore + 1);
  });
  test('Recover an existing Colony', async () => {
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
    expect(recoveredColonyClientInstance.contract.address).toEqual(
      colonyAddress,
    );
    expect(await recoveredColonyClientInstance.getToken.call().address).toEqual(
      colonyToken,
    );
  });
  test('Make the Colony creator an ADMIN', async () => {
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
    expect(setColonyAdminTransaction).toHaveProperty('successful', true);
  });
});
