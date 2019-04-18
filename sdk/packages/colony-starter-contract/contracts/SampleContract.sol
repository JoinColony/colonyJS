pragma solidity >=0.4.23 <0.5.0;

contract SampleContract {

  uint storageData;

  // Set the storage data value
  function set(uint x) public {
    storageData = x;
  }

  // Get the storage data value
  function get() public constant returns (uint) {
    return storageData;
  }

}
