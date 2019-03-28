// import prerequisites and colony client
const { providers, Wallet } = require('ethers');
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers');
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');
const { default: ColonyNetworkClient } = require('@colony/colony-js-client');

// create instance of Trufflepig loader
const loader = new TrufflepigLoader();

// create provider for local TestRPC (Ganache)
const provider = new providers.JsonRpcProvider('http://localhost:8545/');

// seedNetwork

(async () => {

  // get private key from test account
  const { privateKey } = await loader.getAccount(0);

  // create a wallet with the private key
  const wallet = new Wallet(privateKey, provider);

  // create an ethers powered adapter
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });

  // connect to ColonyNetwork with adapter
  const networkClient = new ColonyNetworkClient({ adapter });

  // initialize netwrok client
  await networkClient.init();

  // seed global skills
  await seedGlobalSkills(networkClient);

  // exit process
  process.exit();

})();

// seedGlobalSkills

const seedGlobalSkills = async (networkClient) => {

  // get skill count
  const { count: skillCount } = await networkClient.getSkillCount.call();

  // get meta colony client
  const metaColonyClient = await networkClient.getMetaColonyClient();

  // add global skill
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 });

  // add global skill
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 });

  // add global skill
  await metaColonyClient.addGlobalSkill.send({ parentSkillId: 1 });

  // return true
  return true;

}
