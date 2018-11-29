import { bigNumberify } from 'ethers/utils';

export const generateMoreColonyFunds = async (colonyClientInstance, amount) => {
  /*
   * Get the token's contract address
   */
  const { address: tokenAddress } = await colonyClientInstance.getToken.call();
  /*
   * Mint the new tokens
   */
  await colonyClientInstance.mintTokens.send({
    amount: bigNumberify(amount),
  });
  /*
   * Claim the funds in the colony's main pot
   */
  await colonyClientInstance.claimColonyFunds.send({
    token: tokenAddress,
  });
};

const colonyClientHelper = {
  generateMoreColonyFunds,
};

export default colonyClientHelper;
