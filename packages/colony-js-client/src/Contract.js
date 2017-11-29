/* @flow */

import type { IAdapter, IContract } from '@colony/colony-js-adapter';

type CompiledContract = {
  abi: Object,
  networks: {
    [string]: {
      address: string,
    },
  },
};

class Contract {
  _adapter: IAdapter;
  _contract: IContract;
  address: string;
  contractName: string;
  estimate: Object;
  functions: Object;
  constructor(contractName: string, adapter: IAdapter) {
    this.contractName = contractName;
    this._adapter = adapter;
  }
  ready(): boolean {
    return !!this._contract;
  }
  async loadContract(version: ?number, address: ?string): Promise<void> {
    // TODO: consider to use adapter for contract locating as well, also, parsing of solidity output
    const filename = version ? `${this.contractName}_${version}.json` : `${this.contractName}.json`;
    const compiled: CompiledContract = await import(`contracts/${filename}`);
    this.address = compiled.networks[Object.keys(compiled.networks)[0]].address;
    const normalizedContract = this._adapter.getContract(address || this.address, compiled.abi);
    this._contract = normalizedContract;
    this.functions = normalizedContract.functions;
    this.estimate = normalizedContract.estimate;
  }
}

export default Contract;
