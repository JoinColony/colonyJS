// An example using the addDomain method
const addDomain = async (colonyClient, networkClient, parentDomainId) => {

  // In order to add a domain to our colony, we will need the local skill id of
  // the parent domain. Domains are registered as local skills, so we will use
  // the parent domain id to get the local skill id of the parent domain, which
  // we will then use as the parent skill id when we add our new domain.
  const { localSkillId: parentSkillId } = await colonyClient.getDomain.call({
    domainId: parentDomainId,
  });

  // Create a new domain using the local skill id of the parent domain
  await colonyClient.addDomain.send({
    parentSkillId: parentDomainId,
  });

  // Get the id of the skill we just created
  const { count: skillId } = await networkClient.getSkillCount.call();

  // Get the total number of domains in the colony (our new domain id)
  const { count: domainId } = await colonyClient.getDomainCount.call();

  // Get the pot id of our new domain
  const { potId } = await colonyClient.getDomain.call({ domainId });

  // Check out the logs to see our new domain
  console.log('Domain:', {
    id: domainId,
    parentSkillId,
    skillId,
    potId,
  });

  // Return our new domain
  return {
    id: domainId,
    parentSkillId,
    skillId,
    potId,
  };

};

// Export addDomain example
module.exports = addDomain;
