// An example using the addGlobalSkill method
const addGlobalSkill = async (networkClient, parentSkillId) => {

  // In order to add a new global skill, we will need the Meta Colony. Global
  // skills can only be called from the Meta Colony by Meta Colony owners.
  const metaColonyClient = await networkClient.getMetaColonyClient();

  // Add a new global skill with the given parentSkillId
  await metaColonyClient.addGlobalSkill.send({ parentSkillId });

  // Get the id of the skill we just created
  const { count: skillId } = await networkClient.getSkillCount.call();

  // Get our new global skill
  const skill = await networkClient.getSkill.call({ skillId });

  // Check out the logs to see our new global skill
  console.log('Skill:', {
    id: skillId,
    parentSkillId,
    ...skill,
  });

  // Return our new global skill
  return {
    id: skillId,
    parentSkillId,
    ...skill,
  };

};

// Export addGlobalSkill example
module.exports = addGlobalSkill;
