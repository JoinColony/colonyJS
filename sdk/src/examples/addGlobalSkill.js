// An example using the addGlobalSkill method
const addGlobalSkill = async (networkClient, parentSkillId) => {

  // In order to add a new global skill, we will need the Meta Colony. Global
  // skills can only be called from the Meta Colony by the Meta Colony owners.
  const metaColonyClient = await networkClient.getMetaColonyClient();

  // Check out the logs to see the address of the Meta Colony client
  console.log('Meta Colony Address: ' + metaColonyClient.contract.address);

  // Add a global skill using the Meta Colony
  const {
    eventData: { skillId }
  } = await metaColonyClient.addGlobalSkill.send({ parentSkillId });

  // Check out the logs to see the id of the new global skill.
  console.log('Global Skill ID: ' + skillId);

  // Return skillId
  return skillId;

};

// Export addGlobalSkill example
module.exports = addGlobalSkill;
