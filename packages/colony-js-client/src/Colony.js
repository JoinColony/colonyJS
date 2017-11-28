/* @flow */

// TODO: Consider just copying this function over if we don't use much more of the utils
import { utf8ToHex } from 'web3-utils';
// FIXME: is that correct?
import Adapter from '@colony/colony-js-adapter-ethers';

import { ColonyContract, ColonyNetworkContract } from './ContractTypes';

class Colony {
  _colonyContract: ColonyContract;
  _networkContract: ColonyNetworkContract;
  address: string;
  name: string;
  version: number;
  static async create(name: string, adapter: Adapter, version: number): Promise<Colony> {
    const colony = new Colony(name, adapter);
    await colony.createSelf(version);
    return colony;
  }
  static async fromName(name: string, adapter: Adapter): Promise<Colony> {
    const colony = new Colony(name, adapter);
    await colony.loadSelf();
    return colony;
  }
  constructor(name: string, adapter: Adapter) {
    this.name = name;
    this._networkContract = new ColonyNetworkContract('ColonyNetwork', adapter);
    this._colonyContract = new ColonyContract('Colony', adapter);
  }
  ready(): boolean {
    return this._networkContract.ready() && this._colonyContract.ready();
  }
  async createSelf(version: number): Promise<void> {
    if (this.ready()) return;
    // TODO: Versioning is tentative here
    await this._networkContract.loadContract();
    await this._networkContract.functions.createColony(utf8ToHex(this.name), { gasLimit: 4300000 });
    // TODO: Replace with event based schema
    const address = await this._networkContract.functions.getColony(utf8ToHex(this.name));
    await this._colonyContract.loadContract(version, address);
    this.version = version;
    this.address = address;
    // return new Contract(address[0], colonyAbi, signer);
  }
  async loadSelf(): Promise<void> {
    if (this.ready) return;
    await this._networkContract.loadContract();
    // TODO: Find out version here
    const VERSION = 0;
    const address = await this._networkContract.functions.getColony(utf8ToHex(this.name));
    await this._colonyContract.loadContract(VERSION, address);
    this.version = VERSION;
    this.address = address;
  }
}

export default Colony;
