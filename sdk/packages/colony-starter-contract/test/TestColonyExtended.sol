pragma solidity >=0.4.24;
pragma experimental ABIEncoderV2;

import "truffle/Assert.sol";
import "../contracts/ColonyExtended.sol";

contract TestColonyExtended {

  function testColonyExtended() public {

    // The address of the first colony created with `yarn colony-setup`
    address colonyAddress = 0xEc46E0d7208FF021CDb5B9D47196adb8bbe07a3D;

    // Create an instance of the extension contract
    ColonyExtended colonyExtended = new ColonyExtended(colonyAddress);

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
