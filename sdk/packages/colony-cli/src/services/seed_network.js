// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');

// Run script
(async () => {

  // Get private key from first test account
  const { privateKey } = await loader.getAccount(0);

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
