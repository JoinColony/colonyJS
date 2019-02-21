import {Injectable} from "@angular/core";

const addDomain = require("../../examples/addDomain");
const connectNetwork = require("../../examples/connectNetwork");
const createColony = require("../../examples/createColony");
const createTask = require("../../examples/createTask");
const createToken = require("../../examples/createToken");
const getColonyClient = require("../../examples/getColonyClient");

@Injectable()
export class AppService {

  public async connectNetwork() {
    const networkClient = await connectNetwork('local');
    return networkClient;
  }

  public async createToken(networkClient, name, symbol) {
      const token = await createToken(networkClient, name, symbol);
      return token;
  }

  public async createColony(networkClient, tokenAddress) {
    const colony = await createColony(networkClient, tokenAddress);
    return colony;
  }

  public async getColonyClient(networkClient, colonyId) {
    const colonyClient = await getColonyClient(networkClient, colonyId);
    return colonyClient;
  }

  public async addDomain(colonyClient, parentDomainId) {
    const domain = await addDomain(colonyClient, parentDomainId);
    return domain;
  }

  public async createTask(colonyClient, domainId, taskObj) {
    const task = await createTask(colonyClient, domainId, taskObj);
    return task;
  }
}
