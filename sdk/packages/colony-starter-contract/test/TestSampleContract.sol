pragma solidity >=0.4.23 <0.5.0;

import "truffle/Assert.sol";
import "../contracts/SampleContract.sol";

contract TestSampleContract {

  function testStorageData() public {

    // Create an instance of the sample contract
    SampleContract sampleContract = new SampleContract();

    // Check initial value of storage data
    Assert.equal(storageData, uint(0), "Storage data should be 0");

    // Set the storage data
    sampleContract.set(1);

    // Get the storage data
    uint storageData = sampleContract.get();

    // Check updated value of storage data
    Assert.equal(storageData, uint(1), "Storage data should be 1");

  }

}
