// @TODO This file can't be considered to be a proper test suite (yet).
// Eventually we only want to test the newest version of the network and also in an automatic way.
// For now this will entail some manual work:
// 1) Start a ganache instance with deployed contracts for this
// 2) Copy the EtherRouter address into the right spot below
// 3) Wallet private key something something

// import { Wallet } from 'ethers';
// import { JsonRpcProvider } from 'ethers/providers';
// import { bigNumberify } from 'ethers/utils';

// import { ColonyRole, Network } from '../constants';
// import getColonyNetworkClient from '../clients/ColonyNetworkClient';
// import { getPermissionProofs } from '../clients/Colony/ColonyClientV1';

// const provider = new JsonRpcProvider();
// const wallet = new Wallet(
//   '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
//   provider,
// );

describe('ColonyNetwork', () => {
  it('Can create domain proofs', async () => {
    // const colonyNetworkClient = getColonyNetworkClient(
    //   Network.local,
    //   wallet,
    //   '0x60AF1EBc146C7523A855357ef6386c55b3d703c0',
    // );
    // const colonyCount = await colonyNetworkClient.getColonyCount();
    // expect(colonyCount).toEqual(bigNumberify(2));
    // const colonyClient = await colonyNetworkClient.getColonyClient(2);
    // const proofs = await getPermissionProofs(
    //   colonyClient,
    //   3,
    //   ColonyRole.Architecture,
    // );
    // console.log(proofs);
  });
});
