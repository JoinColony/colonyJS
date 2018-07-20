// The following methods use Promises
const createDomain = async (colonyClient, parentDomainId) => {

  // In order to create a new domain for our colony, we will need the local
  // skill id of the parent domain. Domains are registered as local skills,
  // so we will use the parent domain id to get the local skill id for the
  // parent domain, which we will then use to create our new domain.
  const { localSkillId: parentSkillId } = await colonyClient.getDomain.call({
    domainId: parentDomainId,
  })

  // Take a look at the logs to see the local skill id of the parent domain
  console.log('Domain Skill ID (Parent): ' + parentSkillId);

  // Create a new domain using the local skill id of the parent domain
  const {
    eventData: { skillId }
  } = await colonyClient.addDomain.send({ parentSkillId })

  // Take a look at the logs to see the local skill id of our new domain
  console.log('Domain Skill ID (Child): ' + skillId);

  // Let's get the total number of domains we have now and return that total
  // number, which also represents the id for the domain we just created.
  const { count: domainId } = await colonyClient.getDomainCount.call()

  // Take a look at the logs to see the domain id of our new domain
  console.log('Domain ID: ' + domainId);

  // Return domainId
  return domainId;

};

module.exports = createDomain;
