import { getNetworkClient } from './utils/network-client-helpers';

jest.setTimeout(30000);

describe('`ColonyClient` is able to', () => {
  test('Create a new Domain within the Colony', async () => {
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
     * Get the current number of domains
     *
     * We have just the parent local skill that was added by default when the
     * colony was created
     */
    const {
      count: domainCountBefore,
    } = await colonyClient.getDomainCount.call();
    /*
     * Since this is the first domain, in the first colony, it's Id should be `3`
     *
     * The first two are reserved for the meta colony's skills
     */
    const newDomainTransaction = await colonyClient.addDomain.send({
      parentSkillId: domainCountBefore,
    });
    expect(newDomainTransaction).toHaveProperty('successful', true);
    const domainCountAfter = await colonyClient.getDomainCount.call();
    /*
     * If all goes to plan we should have another domain
     */
    expect(domainCountAfter).toHaveProperty('count', domainCountBefore + 1);
  });
  test("Can't create a new domain under the Meta Colony's parent skill", async () => {
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
     * Get the current number of domains
     *
     * We should have just two domains, the original one created with the colony, and the
     * one we just added in the previous test
     */
    const {
      count: domainCountBefore,
    } = await colonyClient.getDomainCount.call();
    try {
      /*
       * We shouln't be able to add a new domain to the meta colony's skill
       */
      await colonyClient.addDomain.send({
        parentSkillId: 1,
      });
    } catch (e) {
      const domainCountAfter = await colonyClient.getDomainCount.call();
      /*
       * Count should still be 2 since we shouldn't have been able to add
       * a new domain
       */
      expect(domainCountAfter).toHaveProperty('count', domainCountBefore);
    }
  });
});
