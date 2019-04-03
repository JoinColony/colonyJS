// An example action using the "createColony" method
module.exports = async (networkClient, tokenAddress) => {

  // Create a colony with the given token
  const {
    eventData: { colonyAddress, colonyId }
  } = await networkClient.createColony.send({ tokenAddress });

  // Check out the logs to see the new colony address
  console.log('Colony Address:', colonyAddress);

  // Check out the logs to see the new colony id
  console.log('Colony ID:', colonyId);

  // Return the new colony
  return {
    address: colonyAddress,
    id: colonyId,
  };

};
