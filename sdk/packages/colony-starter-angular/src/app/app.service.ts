import { Injectable } from "@angular/core";

const addDomain = require("../../examples/addDomain");
const connectNetwork = require("../../examples/connectNetwork");
const createColony = require("../../examples/createColony");
const createTask = require("../../examples/createTask");
const createToken = require("../../examples/createToken");
const getColonyClient = require("../../examples/getColonyClient");

@Injectable()
export class AppService {

  public async connectNetwork() {
    const networkClient = await connectNetwork("local");
    return networkClient;
  }

  public async createToken(networkClient: object, symbol: string) {
    const token = await createToken(networkClient, symbol);
    return token;
  }

  public async createColony(networkClient: object, tokenAddress: string) {
    const colony = await createColony(networkClient, tokenAddress);
    return colony;
  }

  public async getColonyClient(networkClient: object, colonyId: number) {
    const colonyClient = await getColonyClient(networkClient, colonyId);
    return colonyClient;
  }

  public async addDomain(colonyClient: object) {
    const domain = await addDomain(colonyClient);
    return domain;
  }

  public async createTask(colonyClient: object, domainId: number, specification: object) {
    const task = await createTask(colonyClient, domainId, specification);
    return task;
  }
}
