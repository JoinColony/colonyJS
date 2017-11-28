/* @flow */

import ColonyContract from './ColonyContract';

class Colony {
  static async create(name, adapter, version) {
    const colony = new Colony(name, adapter);
    await colony.createSelf(version);
    return colony;
  }
  static async fromName(name, adapter) {
    const colony = new Colony(name, adapter);
    await colony.loadSelf();
    return colony;
  }
  constructor(name, adapter) {
    this.name = name;
    this._networkContract = new ColonyContract('ColonyNetwork', adapter);
    this._colonyContract = new ColonyContract('Colony', adapter);
  }
  get ready() {
    return this._networkContract.ready && this._colonyContract.ready;
  }
  async createSelf(version) {
    if (this.ready) return;
    // TODO: Versioning is tentative here
    await this._networkContract.loadContract();
    await this._networkContract.functions.createColony(utils.toUtf8Bytes(this.name), { gasLimit: 4300000 });
    const address = await this._networkContract.functions.getColony(utils.toUtf8Bytes(this.name));
    await this._colonyContract.loadContract(version, address);
    this.version = version;
    this.address = address;
    // return new Contract(address[0], colonyAbi, signer);
  }
  async loadSelf() {
    if (this.ready) return;
    await this._networkContract.loadContract();
    // TODO: Find out version here
    const VERSION = null;
    const address = await this._networkContract.functions.getColony(utils.toUtf8Bytes(this.name));
    await this._colonyContract.loadContract(VERSION, address);
    this.version = VERSION;
    this.address = address;
  }
}

export default Colony;
