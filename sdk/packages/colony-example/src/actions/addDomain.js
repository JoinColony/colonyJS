// An example action using the addDomain method
const addDomain = async (colonyClient, parentDomainId) => {

  // Create a new domain using the parent domain id
  await colonyClient.addDomain.send({ parentDomainId });

  // Get the total number of domains in the colony (the new domain id)
  const { count: domainId } = await colonyClient.getDomainCount.call();

  // Get the pot id of the new domain
  const domain = await colonyClient.getDomain.call({ domainId });

  // Check out the logs to see the new domain
  console.log('Domain:', {
    id: domainId,
    ...domain,
  });

  // Return the new domain
  return {
    id: domainId,
    ...domain,
  };

};

// Export addDomain action
module.exports = addDomain;
