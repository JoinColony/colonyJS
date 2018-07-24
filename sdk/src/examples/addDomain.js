// An example using the addDomain method
const addDomain = async (colonyClient, parentDomainId) => {

  // In order to add a domain to our colony, we will need the local skill id of
  // the parent domain. Domains are registered as local skills, so we will use
  // the parent domain id to get the local skill id of the parent domain, which
  // we will then use as the parent skill id when we add our new domain.
  const { localSkillId: parentSkillId } = await colonyClient.getDomain.call({
    domainId: parentDomainId,
  });

  // Check out the logs to see the local skill id of the parent domain
  console.log('Local Skill ID (Parent Domain): ' + parentSkillId);

  // Create a new domain using the local skill id of the parent domain
  const { eventData: { skillId } } = await colonyClient.addDomain.send({
    parentSkillId,
  });

  // Check out the logs to see the local skill id of the new domain
  console.log('Local Skill ID (New Domain): ' + skillId);

  // Get the total number of domains in the colony, which also represents the
  // id for the domain we just created.
  const { count: domainId } = await colonyClient.getDomainCount.call();

  // Check out the logs to see the domain id of our new domain
  console.log('Domain ID / Total Domains: ' + domainId);

  // Return domainId
  return domainId;

};

// Export addDomain example
module.exports = addDomain;
