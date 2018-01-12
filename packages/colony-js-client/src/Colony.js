/* @flow */

// TODO: Consider just copying this function over if we don't use much more of the utils
import { utf8ToHex } from 'web3-utils';
import type { IAdapter } from '@colony/colony-js-adapter';

import { ColonyContract, ColonyNetworkContract } from './ContractTypes';

class Colony {
  _colonyContract: ColonyContract;
  _networkContract: ColonyNetworkContract;
  address: string;
  name: string;
  version: number;
  static async create(name: string, adapter: IAdapter, bootstrapAddress: ?string, version: ?number): Promise<Colony> {
    const colony = new Colony(name, adapter);
    await colony.createSelf(bootstrapAddress, version);
    return colony;
  }
  static async fromName(name: string, adapter: IAdapter, bootstrapAddress: ?string): Promise<Colony> {
    const colony = new Colony(name, adapter);
    await colony.loadSelf(bootstrapAddress);
    return colony;
  }
  constructor(name: string, adapter: IAdapter) {
    this.name = name;
    this._networkContract = new ColonyNetworkContract('ColonyNetwork', adapter);
    this._colonyContract = new ColonyContract('Colony', adapter);
  }
  ready(): boolean {
    return this._networkContract.ready() && this._colonyContract.ready();
  }
  async createSelf(bootstrapAddress: ?string, version: ?number): Promise<void> {
    if (this.ready()) return;
    // TODO: Versioning is tentative here
    await this._networkContract.loadContract(bootstrapAddress);
    await this._networkContract.functions.createColony(utf8ToHex(this.name), {
      gasLimit: 4300000,
    });
    // TODO: Replace with event based schema
    const result = await this._networkContract.functions.getColony(utf8ToHex(this.name));
    const [address] = result;
    // TODO: get version here
    await this._colonyContract.loadContract(address, version);
    this.version = version || 0;
    this.address = address;
    // return new Contract(address[0], colonyAbi, signer);
  }
  async loadSelf(bootstrapAddress: ?string): Promise<void> {
    if (this.ready()) return;
    await this._networkContract.loadContract(bootstrapAddress);
    // TODO: Find out version here
    const VERSION = 0;
    const result = await this._networkContract.functions.getColony(utf8ToHex(this.name));
    const [address] = result;
    await this._colonyContract.loadContract(address, VERSION);
    this.version = VERSION;
    this.address = address;
  }
}

export default Colony;
