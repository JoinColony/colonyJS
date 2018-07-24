// The following methods use Promises
const addGlobalSkill = async (networkClient, parentSkillId) => {

  // In order to create a new global skill, we will need the metaColonyClient.
  const metaColonyClient = await networkClient.getMetaColonyClient();

  // Take a look at the logs to see the meta colony client address.
  console.log('Meta Colony address: ' + metaColonyClient.contract.address);

  // Add a global skill using the metaColonyClient. Global skills can only be
  // called from the Meta Colony, and only by the Meta Colony owners.
  const {
    eventData: { skillId }
  } = await metaColonyClient.addGlobalSkill.send({ parentSkillId })

  // Take a look at the logs to see the id of the global skill we created.
  console.log('Skill ID:', skillId);

  // Return skillId
  return skillId;

};

module.exports = addGlobalSkill;
