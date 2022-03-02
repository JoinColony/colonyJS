/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IColony, IColonyInterface } from "../IColony";

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "approveExitRecovery",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "exitRecoveryMode",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "numRecoveryRoles",
    outputs: [
      {
        name: "numRoles",
        type: "uint64",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_slot",
        type: "uint256",
      },
      {
        name: "_value",
        type: "bytes32",
      },
    ],
    name: "setStorageSlotRecovery",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isInRecoveryMode",
    outputs: [
      {
        name: "inRecoveryMode",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_slot",
        type: "uint256",
      },
    ],
    name: "checkNotAdditionalProtectedVariable",
    outputs: [],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_user",
        type: "address",
      },
    ],
    name: "removeRecoveryRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_user",
        type: "address",
      },
    ],
    name: "setRecoveryRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "enterRecoveryMode",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "colonyNetwork",
        type: "address",
      },
      {
        indexed: false,
        name: "token",
        type: "address",
      },
    ],
    name: "ColonyInitialised",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "users",
        type: "address[]",
      },
      {
        indexed: false,
        name: "amounts",
        type: "int256[]",
      },
    ],
    name: "ColonyBootstrapped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "oldVersion",
        type: "uint256",
      },
      {
        indexed: false,
        name: "newVersion",
        type: "uint256",
      },
    ],
    name: "ColonyUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        name: "domainId",
        type: "uint256",
      },
      {
        indexed: true,
        name: "role",
        type: "uint8",
      },
      {
        indexed: false,
        name: "setTo",
        type: "bool",
      },
    ],
    name: "ColonyRoleSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "fromPot",
        type: "uint256",
      },
      {
        indexed: true,
        name: "toPot",
        type: "uint256",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "token",
        type: "address",
      },
    ],
    name: "ColonyFundsMovedBetweenFundingPots",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        name: "payoutRemainder",
        type: "uint256",
      },
    ],
    name: "ColonyFundsClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardPayoutId",
        type: "uint256",
      },
    ],
    name: "RewardPayoutCycleStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardPayoutId",
        type: "uint256",
      },
    ],
    name: "RewardPayoutCycleEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardPayoutId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        name: "rewardRemainder",
        type: "uint256",
      },
    ],
    name: "RewardPayoutClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "rewardInverse",
        type: "uint256",
      },
    ],
    name: "ColonyRewardInverseSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "paymentId",
        type: "uint256",
      },
    ],
    name: "PaymentAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "taskId",
        type: "uint256",
      },
    ],
    name: "TaskAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "specificationHash",
        type: "bytes32",
      },
    ],
    name: "TaskBriefSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "dueDate",
        type: "uint256",
      },
    ],
    name: "TaskDueDateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
      {
        indexed: true,
        name: "domainId",
        type: "uint256",
      },
    ],
    name: "TaskDomainSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
      {
        indexed: true,
        name: "skillId",
        type: "uint256",
      },
    ],
    name: "TaskSkillSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "role",
        type: "uint8",
      },
      {
        indexed: true,
        name: "user",
        type: "address",
      },
    ],
    name: "TaskRoleUserSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "role",
        type: "uint8",
      },
      {
        indexed: false,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TaskPayoutSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "deliverableHash",
        type: "bytes32",
      },
    ],
    name: "TaskDeliverableSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
    ],
    name: "TaskCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "role",
        type: "uint8",
      },
      {
        indexed: false,
        name: "rating",
        type: "uint8",
      },
    ],
    name: "TaskWorkRatingRevealed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
    ],
    name: "TaskFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "fundingPotId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PayoutClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "taskId",
        type: "uint256",
      },
    ],
    name: "TaskCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "domainId",
        type: "uint256",
      },
    ],
    name: "DomainAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "fundingPotId",
        type: "uint256",
      },
    ],
    name: "FundingPotAdded",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "authority",
    outputs: [
      {
        name: "colonyAuthority",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "colonyOwner",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "version",
    outputs: [
      {
        name: "colonyVersion",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newVersion",
        type: "uint256",
      },
    ],
    name: "upgrade",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getColonyNetwork",
    outputs: [
      {
        name: "colonyNetwork",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getToken",
    outputs: [
      {
        name: "tokenAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_user",
        type: "address",
      },
      {
        name: "_setTo",
        type: "bool",
      },
    ],
    name: "setRootRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_user",
        type: "address",
      },
      {
        name: "_domainId",
        type: "uint256",
      },
      {
        name: "_setTo",
        type: "bool",
      },
    ],
    name: "setArchitectureRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_user",
        type: "address",
      },
      {
        name: "_domainId",
        type: "uint256",
      },
      {
        name: "_setTo",
        type: "bool",
      },
    ],
    name: "setFundingRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_user",
        type: "address",
      },
      {
        name: "_domainId",
        type: "uint256",
      },
      {
        name: "_setTo",
        type: "bool",
      },
    ],
    name: "setAdministrationRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_user",
        type: "address",
      },
      {
        name: "_domainId",
        type: "uint256",
      },
      {
        name: "_role",
        type: "uint8",
      },
    ],
    name: "hasUserRole",
    outputs: [
      {
        name: "hasRole",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_colonyNetworkAddress",
        type: "address",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "initialiseColony",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_users",
        type: "address[]",
      },
      {
        name: "_amount",
        type: "int256[]",
      },
    ],
    name: "bootstrapColony",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_wad",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "colonyName",
        type: "string",
      },
      {
        name: "orbitdb",
        type: "string",
      },
    ],
    name: "registerColonyLabel",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_parentDomainId",
        type: "uint256",
      },
    ],
    name: "addDomain",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getDomain",
    outputs: [
      {
        components: [
          {
            name: "skillId",
            type: "uint256",
          },
          {
            name: "fundingPotId",
            type: "uint256",
          },
        ],
        name: "domain",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getDomainCount",
    outputs: [
      {
        name: "count",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "key",
        type: "bytes",
      },
      {
        name: "value",
        type: "bytes",
      },
      {
        name: "branchMask",
        type: "uint256",
      },
      {
        name: "siblings",
        type: "bytes32[]",
      },
    ],
    name: "verifyReputationProof",
    outputs: [
      {
        name: "isValid",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_recipient",
        type: "address",
      },
      {
        name: "_token",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
      {
        name: "_domainId",
        type: "uint256",
      },
      {
        name: "_skillId",
        type: "uint256",
      },
    ],
    name: "addPayment",
    outputs: [
      {
        name: "paymentId",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "finalizePayment",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_recipient",
        type: "address",
      },
    ],
    name: "setPaymentRecipient",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_domainId",
        type: "uint256",
      },
    ],
    name: "setPaymentDomain",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_skillId",
        type: "uint256",
      },
    ],
    name: "setPaymentSkill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setPaymentPayout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPayment",
    outputs: [
      {
        components: [
          {
            name: "recipient",
            type: "address",
          },
          {
            name: "finalized",
            type: "bool",
          },
          {
            name: "fundingPotId",
            type: "uint256",
          },
          {
            name: "domainId",
            type: "uint256",
          },
          {
            name: "skills",
            type: "uint256[]",
          },
        ],
        name: "payment",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "claimPayment",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getPaymentCount",
    outputs: [
      {
        name: "count",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        name: "_specificationHash",
        type: "bytes32",
      },
      {
        name: "_domainId",
        type: "uint256",
      },
      {
        name: "_skillId",
        type: "uint256",
      },
      {
        name: "_dueDate",
        type: "uint256",
      },
    ],
    name: "makeTask",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getTaskCount",
    outputs: [
      {
        name: "count",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getTaskChangeNonce",
    outputs: [
      {
        name: "nonce",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_sigV",
        type: "uint8[]",
      },
      {
        name: "_sigR",
        type: "bytes32[]",
      },
      {
        name: "_sigS",
        type: "bytes32[]",
      },
      {
        name: "_mode",
        type: "uint8[]",
      },
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "executeTaskChange",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_sigV",
        type: "uint8[]",
      },
      {
        name: "_sigR",
        type: "bytes32[]",
      },
      {
        name: "_sigS",
        type: "bytes32[]",
      },
      {
        name: "_mode",
        type: "uint8[]",
      },
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "executeTaskRoleAssignment",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_role",
        type: "uint8",
      },
      {
        name: "_ratingSecret",
        type: "bytes32",
      },
    ],
    name: "submitTaskWorkRating",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_role",
        type: "uint8",
      },
      {
        name: "_rating",
        type: "uint8",
      },
      {
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "revealTaskWorkRating",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_salt",
        type: "bytes32",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "generateSecret",
    outputs: [
      {
        name: "secret",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getTaskWorkRatingSecretsInfo",
    outputs: [
      {
        name: "nSecrets",
        type: "uint256",
      },
      {
        name: "lastSubmittedAt",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_role",
        type: "uint8",
      },
    ],
    name: "getTaskWorkRatingSecret",
    outputs: [
      {
        name: "secret",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_user",
        type: "address",
      },
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_childSkillIndex",
        type: "uint256",
      },
    ],
    name: "setTaskManagerRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_user",
        type: "address",
      },
    ],
    name: "setTaskEvaluatorRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_user",
        type: "address",
      },
    ],
    name: "setTaskWorkerRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "removeTaskEvaluatorRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "removeTaskWorkerRole",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_skillId",
        type: "uint256",
      },
    ],
    name: "setTaskSkill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_domainId",
        type: "uint256",
      },
    ],
    name: "setTaskDomain",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_specificationHash",
        type: "bytes32",
      },
    ],
    name: "setTaskBrief",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_dueDate",
        type: "uint256",
      },
    ],
    name: "setTaskDueDate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_deliverableHash",
        type: "bytes32",
      },
    ],
    name: "submitTaskDeliverable",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_deliverableHash",
        type: "bytes32",
      },
      {
        name: "_ratingSecret",
        type: "bytes32",
      },
    ],
    name: "submitTaskDeliverableAndRating",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "finalizeTask",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "cancelTask",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "completeTask",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getTask",
    outputs: [
      {
        name: "specificationHash",
        type: "bytes32",
      },
      {
        name: "deliverableHash",
        type: "bytes32",
      },
      {
        name: "status",
        type: "uint8",
      },
      {
        name: "dueDate",
        type: "uint256",
      },
      {
        name: "fundingPotId",
        type: "uint256",
      },
      {
        name: "completionTimestamp",
        type: "uint256",
      },
      {
        name: "domainId",
        type: "uint256",
      },
      {
        name: "skillIds",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_role",
        type: "uint8",
      },
    ],
    name: "getTaskRole",
    outputs: [
      {
        components: [
          {
            name: "user",
            type: "address",
          },
          {
            name: "rateFail",
            type: "bool",
          },
          {
            name: "rating",
            type: "uint8",
          },
        ],
        name: "role",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_rewardInverse",
        type: "uint256",
      },
    ],
    name: "setRewardInverse",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getRewardInverse",
    outputs: [
      {
        name: "rewardInverse",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_role",
        type: "uint8",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "getTaskPayout",
    outputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setTaskManagerPayout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setTaskEvaluatorPayout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setTaskWorkerPayout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
      {
        name: "_managerAmount",
        type: "uint256",
      },
      {
        name: "_evaluatorAmount",
        type: "uint256",
      },
      {
        name: "_workerAmount",
        type: "uint256",
      },
    ],
    name: "setAllTaskPayouts",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_role",
        type: "uint8",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "claimTaskPayout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
      {
        name: "key",
        type: "bytes",
      },
      {
        name: "value",
        type: "bytes",
      },
      {
        name: "branchMask",
        type: "uint256",
      },
      {
        name: "siblings",
        type: "bytes32[]",
      },
    ],
    name: "startNextRewardPayout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_payoutId",
        type: "uint256",
      },
      {
        name: "_squareRoots",
        type: "uint256[7]",
      },
      {
        name: "key",
        type: "bytes",
      },
      {
        name: "value",
        type: "bytes",
      },
      {
        name: "branchMask",
        type: "uint256",
      },
      {
        name: "siblings",
        type: "bytes32[]",
      },
    ],
    name: "claimRewardPayout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_payoutId",
        type: "uint256",
      },
    ],
    name: "getRewardPayoutInfo",
    outputs: [
      {
        components: [
          {
            name: "reputationState",
            type: "bytes32",
          },
          {
            name: "colonyWideReputation",
            type: "uint256",
          },
          {
            name: "totalTokens",
            type: "uint256",
          },
          {
            name: "amount",
            type: "uint256",
          },
          {
            name: "tokenAddress",
            type: "address",
          },
          {
            name: "blockTimestamp",
            type: "uint256",
          },
        ],
        name: "rewardPayoutCycle",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_payoutId",
        type: "uint256",
      },
    ],
    name: "finalizeRewardPayout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getFundingPot",
    outputs: [
      {
        name: "associatedType",
        type: "uint8",
      },
      {
        name: "associatedTypeId",
        type: "uint256",
      },
      {
        name: "payoutsWeCannotMake",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getFundingPotCount",
    outputs: [
      {
        name: "count",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_potId",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "getFundingPotBalance",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_potId",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "getFundingPotPayout",
    outputs: [
      {
        name: "payout",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        name: "_fromChildSkillIndex",
        type: "uint256",
      },
      {
        name: "_toChildSkillIndex",
        type: "uint256",
      },
      {
        name: "_fromPot",
        type: "uint256",
      },
      {
        name: "_toPot",
        type: "uint256",
      },
      {
        name: "_amount",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "moveFundsBetweenPots",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "claimColonyFunds",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "getNonRewardPotsTotal",
    outputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class IColony__factory {
  static readonly abi = _abi;
  static createInterface(): IColonyInterface {
    return new utils.Interface(_abi) as IColonyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IColony {
    return new Contract(address, _abi, signerOrProvider) as IColony;
  }
}
