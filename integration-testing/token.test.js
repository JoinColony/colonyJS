import { isAddress } from 'web3-utils';
import { bigNumberify } from 'ethers/utils';
import { getNetworkClient } from './utils/network-client-helpers';

const tokensToMint = 1000;

jest.setTimeout(30000);

describe('`ColonyNetworkClient` is able to', () => {
  test('Create and deploy a new Token', async () => {
    const networkClient = await getNetworkClient();
    /*
     * Create a new token
     */
    const token = await networkClient.createToken({
      name: 'Integration Test Token',
      symbol: 'ITT',
    });
    /*
     * Check if it's a valid address
     */
    expect(isAddress(token)).toBeTruthy();
  });
  test('Make the Colony owner of the Token', async () => {
    /*
     * Get the network client
     */
    const networkClient = await getNetworkClient();
    /*
     * Get the number of colonies. This will also represent the last created
     * colony's Id which we created in the previous step.
     */
    const { count: lastColonyId } = await networkClient.getColonyCount.call();
    /*
     * Get the existing colony
     */
    const colonyClient = await networkClient.getColonyClient(lastColonyId);
    /*
     * Get the token's owner
     */
    const tokenOwner = await colonyClient.token.contract.owner();
    /*
     * Make the colony the owner of the Token
     *
     * We only do this if the colony isn't already an owner, otherwise your
     * trasaction will revert.
     */
    if (tokenOwner !== colonyClient.contract.address) {
      const tokenAuthorityTransaction = await colonyClient.token.setOwner.send({
        owner: colonyClient.contract.address,
      });
      expect(tokenAuthorityTransaction).toHaveProperty('successful', true);
      expect(tokenAuthorityTransaction.eventData).toHaveProperty(
        'owner',
        colonyClient.contract.address,
      );
    }
  });
  test('Mint new tokens', async () => {
    /*
     * Get the network client
     */
    const networkClient = await getNetworkClient();
    /*
     * Get the number of colonies. This will also represent the last created
     * colony's Id which we created in the previous step.
     */
    const { count: lastColonyId } = await networkClient.getColonyCount.call();
    /*
     * Get the existing colony
     */
    const colonyClient = await networkClient.getColonyClient(lastColonyId);
    /*
     * Get the token's contract address
     */
    const { address: colonyTokenAddress } = await colonyClient.getToken.call();
    /*
     * Get the amount of tokens before minting new ones
     */
    const {
      amount: initialTokenAmount,
    } = await colonyClient.token.getTotalSupply.call();
    /*
     * Mint new tokens, but only if there aren't any in the Colony
     */
    if (initialTokenAmount.toNumber() === 0) {
      const mintTokensTransaction = await colonyClient.mintTokens.send({
        amount: bigNumberify(tokensToMint),
      });
      expect(mintTokensTransaction).toHaveProperty('successful', true);
      const {
        amount: currentTokenAmount,
      } = await colonyClient.token.getTotalSupply.call();
      expect(currentTokenAmount.toNumber()).toEqual(tokensToMint);
      /*
       * Get the total number of tokens in the main pot so that we can check againts
       */
      const {
        balance: initialMainPotTokens,
      } = await colonyClient.getPotBalance.call({
        potId: 1,
        token: colonyTokenAddress,
      });
      expect(initialMainPotTokens.toNumber()).toEqual(0);
      /*
       * Claim the Colony's Funds into the Main pot
       */
      const claimFundsTransaction = await colonyClient.claimColonyFunds.send({
        token: colonyTokenAddress,
      });
      expect(claimFundsTransaction).toHaveProperty('successful', true);
      /*
       * Check that the number of tokens in the pot equals the tokens with just mintend and claimed
       */
      const {
        balance: currentMainPotTokens,
      } = await colonyClient.getPotBalance.call({
        potId: 1,
        token: colonyTokenAddress,
      });
      expect(currentMainPotTokens.toNumber()).toEqual(tokensToMint);
    }
  });
});
