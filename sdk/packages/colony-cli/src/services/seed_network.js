// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae';

// Run script
(async () => {

  // Get private key from first test account
  const wallet = await open({ privateKey });

  // Get colony network client
  const networkClient = await getNetworkClient('local', wallet);

  // Get meta colony client
  const metaColonyClient = await networkClient.getMetaColonyClient();

  // Add global skill
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 });

  // Add global skill
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 });

  // Add global skill
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 });

})()
  .then(() => process.exit())
  .catch(err => console.error(err));
