// FIXME later: Use the new adapter interface and re-enable Flow in this file

import type { IAdapter, IContract } from '@colony/colony-js-adapter';

type ContractData = {
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
  async fetchContract(version: ?number) {
    // TODO: consider to use adapter for contract locating as well, also, parsing of solidity output
    const filename = version
      ? `${this.contractName}_${version}.json`
      : `${this.contractName}.json`;
    const response = await fetch(`/contracts/${filename}`);
    return response.json();
  }
  async loadContract(address: ?string, version: ?number): Promise<void> {
    const data: ContractData = await this.fetchContract(version);
    this.address =
      address || data.networks[Object.keys(data.networks)[0]].address;
    const normalizedContract = this._adapter.getContract(
      this.address,
      data.abi,
    );
    this._contract = normalizedContract;
    this.functions = normalizedContract.functions;
    this.estimate = normalizedContract.estimate;
  }
}

export default Contract;
