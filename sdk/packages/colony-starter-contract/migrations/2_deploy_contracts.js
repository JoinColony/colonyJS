/* globals artifacts */

const ColonyExtended = artifacts.require("./ColonyExtended.sol");

// The address of the first colony created with `yarn colony-setup`
const colonyAddress = "0x0a0e9A5781B26D9450D5e1D53aBB3dA887a67d7F";

module.exports = async deployer => {
  await deployer.deploy(ColonyExtended, colonyAddress);
};
