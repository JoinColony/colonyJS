import { Injectable } from "@angular/core";

const { getNetworkClient } = require("@colony/colony-js-client");
const { open } = require("@colony/purser-metamask");

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

  public async getColonyClient(networkClient: any, colonyId: number) {

    // Get colony client
    const colonyClient = await networkClient.getColonyClient(
      colonyId,
    );

    // Return colony client
    return colonyClient;

  }

}
