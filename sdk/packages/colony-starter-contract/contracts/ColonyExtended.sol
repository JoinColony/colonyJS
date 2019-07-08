pragma solidity 0.5.8;
pragma experimental ABIEncoderV2;

import "@colony/colony-cli/lib/colonyNetwork/contracts/IColony.sol";
import "@colony/colony-cli/lib/colonyNetwork/contracts/IColonyNetwork.sol";

contract ColonyExtended {

  IColony colony;
  IColonyNetwork colonyNetwork;
  bytes32 colonyHash;

  // Create contract
  constructor(address _colony) public {
    colony = IColony(_colony);
    colonyNetwork = IColonyNetwork(colony.getColonyNetwork());
  }

  // Set colony hash
  function setColonyHash(bytes32 _colonyHash) public {
    colonyHash = _colonyHash;
  }

  // Get colony hash
  function getColonyHash() public view returns (bytes32) {
    return colonyHash;
  }

}
