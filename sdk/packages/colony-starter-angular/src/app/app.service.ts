import { Injectable } from "@angular/core";

const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-metamask');
const ecp = require('../helpers/ecp');

@Injectable()

export class AppService {

  public async connectNetwork(network: string) {

    // Open wallet
    const wallet = await open()

    // Get network client
    const networkClient = await getNetworkClient(network, wallet)

    // Return network client
    return networkClient

  }

  public async createToken(networkClient: any, symbol: string) {

    // Create token
    const {
      meta: { receipt: { contractAddress: tokenAddress } }
    } = await networkClient.createToken.send({ symbol });

    // Return address
    return tokenAddress;

  }

  public async createColony(networkClient: any, tokenAddress: string) {

    // Create colony
    const {
      eventData: { colonyAddress }
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

  public async createTask(
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
    const { eventData: { taskId } } = await colonyClient.createTask.send({
      specificationHash,
      domainId,
    });

    // Get task
    const task = await colonyClient.getTask.call({ taskId });

    // Return task
    return task;

  }

}
