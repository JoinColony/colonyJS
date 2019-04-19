pragma solidity >=0.4.23 <0.5.0;
pragma experimental ABIEncoderV2;

import "@colony/colony-cli/lib/colonyNetwork/contracts/IColony.sol"

contract ColonyExtended {

  IColony colony;
  bytes32 colonyHash;

  // Create contract
  constructor(address _colony) public {
    colony = IColony(_colony);
  }

  // Set colony hash
  function setColonyHash(bytes32 _colonyHash) public {
    colonyHash = _colonyHash;
  }

  // Get colony hash
  function getColonyHash() public constant returns (bytes32) {
    return colonyHash;
  }

}
