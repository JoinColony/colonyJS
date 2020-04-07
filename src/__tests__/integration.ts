// @TODO This file can't be considered to be a proper test suite (yet).
// Eventually we only want to test the newest version of the network and also in an automatic way.
// For now this will entail some manual work:
// 1) Start a ganache instance with deployed contracts for this
// 2) Copy the EtherRouter address into the right spot below
// 3) Wallet private key something something
//
// import { JsonRpcProvider } from 'ethers/providers';
// import { bigNumberify } from 'ethers/utils';

// import { IColonyNetworkFactory } from '../../lib/contracts/1/IColonyNetworkFactory';
// import getColonyClient from '../clients/Colony/ColonyClientV1';

// const provider = new JsonRpcProvider();

describe('ColonyNetwork', () => {
  it('Can create domain proofs', async () => {
    // const colonyNetworkClient = IColonyNetworkFactory.connect(
    //   '0x60AF1EBc146C7523A855357ef6386c55b3d703c0',
    //   provider,
    // );
    // const colonyCount = await colonyNetworkClient.getColonyCount();
    // expect(colonyCount).toEqual(bigNumberify(2));
    // const colonyAddress = await colonyNetworkClient.getColony(2);
    // const colonyClient = getColonyClient(colonyAddress, provider);
    // console.log(colonyClient.addDomainWithProofs)
  });
});
