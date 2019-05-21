import { Injectable } from "@angular/core";

const { getNetworkClient } = require("@colony/colony-js-client");
const { open } = require("@colony/purser-metamask");
const ecp = require("../helpers/ecp");

@Injectable()

export class AppService {

  public async openWallet() {

    // Open wallet
    const wallet = await open();

    // Return wallet
    return wallet;

  }

  public async getNetworkClient(network: string, wallet: any) {

    // Get network client
    const networkClient = await getNetworkClient(network, wallet);

    // Return network client
    return networkClient;

  }

  public async createToken(
    networkClient: any,
    name: string,
    symbol: string,
    decimals: number,
  ) {

    // Create token
    const tokenTransaction = await networkClient.createToken.send({
      decimals,
      name,
      symbol,
    });

    // Set token address
    const tokenAddress = tokenTransaction.meta.receipt.contractAddress;

    // Return the token address
    return tokenAddress;

  }

  public async createColony(networkClient: any, tokenAddress: string) {

    // Create colony
    const {
      eventData: { colonyAddress },
    } = await networkClient.createColony.send({ tokenAddress });

    // Return address
    return colonyAddress;

  }

  public async getColonyClient(networkClient: any, colonyAddress: string) {

    // Get colony client
    const colonyClient = await networkClient.getColonyClientByAddress(
      colonyAddress,
    );

    // Return colony client
    return colonyClient;

  }

  public async addDomain(colonyClient: any, parentDomainId: number) {

    // Create domain within root domain
    await colonyClient.addDomain.send({ parentDomainId });

    // Get total number of domains in the colony (the domain id)
    const { count: domainId } = await colonyClient.getDomainCount.call();

    // Get the pot id of the domain
    const domain = await colonyClient.getDomain.call({ domainId });

    // Return domain
    return {
      id: domainId,
      ...domain,
    };

  }

  public async addTask(
    colonyClient: any,
    domainId: number,
    specification: object,
  ) {

    // Initialize extended protocol
    await ecp.init();

    // Get specification hash
    const specificationHash = await ecp.saveHash(specification);

    // Stop extended protocol
    await ecp.stop();

    // Create task
    const { eventData: { taskId } } = await colonyClient.addTask.send({
      domainId,
      specificationHash,
    });

    // Get task
    const task = await colonyClient.getTask.call({ taskId });

    // Return task
    return task;

  }

}
