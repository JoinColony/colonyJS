// An example action using the "addGlobalSkill" method
module.exports = async (networkClient, parentSkillId) => {

  // In order to add a new global skill, we will need the Meta Colony. Global
  // skills can only be created from the Meta Colony by Meta Colony owners.
  const metaColonyClient = await networkClient.getMetaColonyClient();

  // Add a new global skill with the given parent skill id
  await metaColonyClient.addGlobalSkill.send();

  // Get the total number of skills in the colony (the new skill id)
  const { count: skillId } = await networkClient.getSkillCount.call();

  // Get the new global skill
  const skill = await networkClient.getSkill.call({ skillId });

  // Check out the logs to see the new global skill
  console.log('Skill:', {
    id: skillId,
    ...skill,
  });

  // Return the new global skill
  return {
    id: skillId,
    ...skill,
  };

};
