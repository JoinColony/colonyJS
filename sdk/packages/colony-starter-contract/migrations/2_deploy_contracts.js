/* globals artifacts */

const ColonyExtended = artifacts.require("./ColonyExtended.sol");

// The address of the first colony created from `yarn colony-setup`
const colonyAddress = "0xEc46E0d7208FF021CDb5B9D47196adb8bbe07a3D";

module.exports = async deployer => {
  await deployer.deploy(ColonyExtended, colonyAddress);
};
