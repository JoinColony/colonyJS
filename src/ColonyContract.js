/* @flow */

class ColonyContract {
  constructor(contractName, adapter) {
    this.contractName = contractName;
    this._adapter = adapter;
  }
  get ready() {
    return !!this._contract;
  }
  async loadContract(version, address) {
    // TODO: consider to use adapter for contract locating as well, also, parsing of solidity output
    const filename = version ? `${this.contractName}_${version}.json` : `${this.contractName}.json`;
    const compiled = await import(`contracts/${filename}`);
    this.address = compiled.networks[Object.keys(compiled.networks)[0]];
    const normalizedContract = this._adapter.getContract(address || this.address, compiled.abi);
    this._contract = normalizedContract;
    this.functions = normalizedContract.functions;
    this.estimate = normalizedContract.estimate;
  }
}

export default ColonyContract;
