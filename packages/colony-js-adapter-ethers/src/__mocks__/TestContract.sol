pragma solidity ^0.4.21;
pragma experimental "v0.5.0";

contract TestContract {
  uint8 public n;

  function TestContract(uint8 _n) public {
    n = _n;
  }

  event Added(uint8 result);

  function addN(uint8 input) public {
    emit Added(input + n);
  }
}
