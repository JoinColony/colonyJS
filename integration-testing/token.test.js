import { isAddress } from 'web3-utils';
import { bigNumberify } from 'ethers/utils';
import { getNetworkClient } from './utils/network-client-helpers';

const tokensToMint = 1000;

describe('`ColonyNetworkClient` is able to', () => {
  test('Create and deploy a new Token', async t => {
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
    t.truthy(isAddress(token));
  });
  test('Make the Colony owner of the Token', async t => {
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
      t.true(tokenAuthorityTransaction.successful);
      t.is(
        tokenAuthorityTransaction.eventData.owner,
        colonyClient.contract.address,
      );
    }
  });
  test('Mint new tokens', async t => {
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
      t.true(mintTokensTransaction.successful);
      const {
        amount: currentTokenAmount,
      } = await colonyClient.token.getTotalSupply.call();
      t.is(currentTokenAmount.toNumber(), tokensToMint);
      /*
       * Get the total number of tokens in the main pot so that we can check againts
       */
      const {
        balance: initialMainPotTokens,
      } = await colonyClient.getPotBalance.call({
        potId: 1,
        token: colonyTokenAddress,
      });
      t.is(initialMainPotTokens.toNumber(), 0);
      /*
       * Claim the Colony's Funds into the Main pot
       */
      const claimFundsTransaction = await colonyClient.claimColonyFunds.send({
        token: colonyTokenAddress,
      });
      t.true(claimFundsTransaction.successful);
      /*
       * Check that the number of tokens in the pot equals the tokens with just mintend and claimed
       */
      const {
        balance: currentMainPotTokens,
      } = await colonyClient.getPotBalance.call({
        potId: 1,
        token: colonyTokenAddress,
      });
      t.is(currentMainPotTokens.toNumber(), tokensToMint);
    }
  });
});
