import { getNetworkClient } from './utils/network-client-helpers';



describe('`ColonyClient` is able to', () => {
  test('Add a global skill (using the Meta Colony)', async t => {
    /*
     * Get the network client
     */
    const networkClient = await getNetworkClient();
    /*
     * Get the existing Meta Colony
     */
    const colonyClient = await networkClient.getMetaColonyClient();
    /*
     * Get the initial count of skills. They should be 3: two for the meta colony
     * and two for the Colony that we created.
     */
    const {
      count: skillCountInitial,
    } = await networkClient.getSkillCount.call();
    /*
     * Add a new global skill
     */
    const newSkillTransaction = await colonyClient.addGlobalSkill.send({
      parentSkillId: 1,
    });
    t.true(newSkillTransaction.successful);
    /*
     * Check that we have added the skill. We should have one more
     */
    const skillCountAfter = await networkClient.getSkillCount.call();
    /*
     * We have to test it this way since we can't predict which test suite
     * will run first: this or the domain tests.
     */
    t.is(skillCountAfter.count, skillCountInitial + 1);
  });
  test('Get a skill that exists', async t => {
    /*
     * Get the network client
     */
    const networkClient = await getNetworkClient();
    /*
     * Get the latest added skill Id (which is the number of skills that we have)
     */
    const { count: lastSkillId } = await networkClient.getSkillCount.call();
    /*
     * Get the skill.
     */
    const getSkillTransaction = await networkClient.getSkill.call({
      skillId: lastSkillId,
    });
    /*
     * It should have one parent since we just added it as a child to the
     * global skill with id `1`
     */
    t.is(getSkillTransaction.nParents, 1);
    /*
     * But is should not have any children since we didn't add anything to it.
     */
    t.is(getSkillTransaction.nChildren, 0);
  });
});
