// An example using the createColony method
const createColony = async (networkClient, tokenAddress) => {

    // Create a colony with the given token
    const {
      eventData: { colonyAddress, colonyId }
    } = await networkClient.createColony.send({ tokenAddress }, { gasLimit: 4432466 });
  
    // Check out the logs to see our new colony address
    console.log('Colony Address:', colonyAddress);
  
    // Check out the logs to see our new colony id
    console.log('Colony ID:', colonyId);
  
    // Return our new colony
    return {
      address: colonyAddress,
      id: colonyId,
    };
  
  };
  
// Export createColony example
module.exports = createColony;
  