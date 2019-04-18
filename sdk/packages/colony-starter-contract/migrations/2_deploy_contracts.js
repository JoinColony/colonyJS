var SampleContract = artifacts.require("./SampleContract.sol");

module.exports = function(deployer) {
  deployer.deploy(SampleContract);
};
