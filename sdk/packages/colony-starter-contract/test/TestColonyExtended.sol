pragma solidity >=0.4.23 <0.5.0;
pragma experimental ABIEncoderV2;

import "truffle/Assert.sol";
import "../contracts/ColonyExtended.sol";

contract TestColonyExtended {

  function testColonyExtended() public {

    // Create an instance of the extension contract
    ColonyExtended colonyExtended = new ColonyExtended(address(0));

    // Get the initial colony hash value
    bytes32 initialHash = colonyExtended.getColonyHash();

    // Check the initial colony hash value
    Assert.equal(initialHash, bytes32(""), "Colony hash should not be set");

    // Update the colony hash value
    colonyExtended.setColonyHash("test");

    // Get the updated colony hash value
    bytes32 updatedHash = colonyExtended.getColonyHash();

    // Check the updated colony hash value
    Assert.equal(updatedHash, bytes32("test"), "Colony hash should be set");

  }

}
