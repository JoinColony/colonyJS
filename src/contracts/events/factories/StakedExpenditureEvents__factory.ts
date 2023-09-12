/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  StakedExpenditureEvents,
  StakedExpenditureEventsInterface,
} from "../StakedExpenditureEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "expenditureId",
        type: "uint256",
      },
    ],
    name: "ExpenditureCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expenditureId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
    ],
    name: "ExpenditureMadeViaStake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ExtensionInitialised",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "LogSetAuthority",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "LogSetOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "stakeFraction",
        type: "uint256",
      },
    ],
    name: "StakeFractionSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "expenditureId",
        type: "uint256",
      },
    ],
    name: "StakeReclaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "expenditureId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "punished",
        type: "bool",
      },
    ],
    name: "ExpenditureCancelled",
    type: "event",
  },
] as const;

export class StakedExpenditureEvents__factory {
  static readonly abi = _abi;
  static createInterface(): StakedExpenditureEventsInterface {
    return new utils.Interface(_abi) as StakedExpenditureEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakedExpenditureEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakedExpenditureEvents;
  }
}
