/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  VotingReputation,
  VotingReputationInterface,
} from "../VotingReputation";

const _abi = [
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
        indexed: true,
        internalType: "uint256",
        name: "motionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "domainId",
        type: "uint256",
      },
    ],
    name: "MotionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "motionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "escalator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "domainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newDomainId",
        type: "uint256",
      },
    ],
    name: "MotionEscalated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "motionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eventIndex",
        type: "uint256",
      },
    ],
    name: "MotionEventSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "motionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "action",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    name: "MotionFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "motionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MotionRewardClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "motionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MotionStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "motionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
    ],
    name: "MotionVoteRevealed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "motionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "MotionVoteSubmitted",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract DSAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_sig",
        type: "bytes4",
      },
    ],
    name: "getCapabilityRoles",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getColony",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeprecated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DSAuthority",
        name: "authority_",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_sigV",
        type: "uint8",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getMetatransactionNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "identifier",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_colony",
        type: "address",
      },
    ],
    name: "install",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalStakeFraction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_voterRewardFraction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userMinStakeFraction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxVoteFraction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stakePeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_submitPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_revealPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_escalationPeriod",
        type: "uint256",
      },
    ],
    name: "initialise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finishUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_deprecated",
        type: "bool",
      },
    ],
    name: "deprecate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uninstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_domainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_altTarget",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_action",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_branchMask",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_siblings",
        type: "bytes32[]",
      },
    ],
    name: "createMotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_altTarget",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_action",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_branchMask",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_siblings",
        type: "bytes32[]",
      },
    ],
    name: "createRootMotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_domainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_action",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_branchMask",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_siblings",
        type: "bytes32[]",
      },
    ],
    name: "createDomainMotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_vote",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_branchMask",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_siblings",
        type: "bytes32[]",
      },
    ],
    name: "stakeMotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_voteSecret",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_branchMask",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_siblings",
        type: "bytes32[]",
      },
    ],
    name: "submitVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_vote",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_branchMask",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_siblings",
        type: "bytes32[]",
      },
    ],
    name: "revealVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newDomainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_branchMask",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_siblings",
        type: "bytes32[]",
      },
    ],
    name: "escalateMotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
    ],
    name: "finalizeMotion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
    ],
    name: "failingExecutionAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_permissionDomainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_childSkillIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_vote",
        type: "uint256",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalStakeFraction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVoterRewardFraction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserMinStakeFraction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxVoteFraction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSubmitPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRevealPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEscalationPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMotionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
    ],
    name: "getMotion",
    outputs: [
      {
        components: [
          {
            internalType: "uint64[3]",
            name: "events",
            type: "uint64[3]",
          },
          {
            internalType: "bytes32",
            name: "rootHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "domainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skillId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skillRep",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "repSubmitted",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paidVoterComp",
            type: "uint256",
          },
          {
            internalType: "uint256[2]",
            name: "pastVoterComp",
            type: "uint256[2]",
          },
          {
            internalType: "uint256[2]",
            name: "stakes",
            type: "uint256[2]",
          },
          {
            internalType: "uint256[2]",
            name: "votes",
            type: "uint256[2]",
          },
          {
            internalType: "bool",
            name: "escalated",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "finalized",
            type: "bool",
          },
          {
            internalType: "address",
            name: "altTarget",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "action",
            type: "bytes",
          },
        ],
        internalType: "struct VotingReputation.Motion",
        name: "motion",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_vote",
        type: "uint256",
      },
    ],
    name: "getStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_structHash",
        type: "bytes32",
      },
    ],
    name: "getExpenditureMotionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_actionHash",
        type: "bytes32",
      },
    ],
    name: "getExpenditurePastVote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
    ],
    name: "getMotionState",
    outputs: [
      {
        internalType: "enum VotingReputation.MotionState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_voterRep",
        type: "uint256",
      },
    ],
    name: "getVoterReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_voterRep",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_voterAddress",
        type: "address",
      },
    ],
    name: "getVoterRewardRange",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_motionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_vote",
        type: "uint256",
      },
    ],
    name: "getStakerReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "action",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "createClaimDelayAction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class VotingReputation__factory {
  static readonly abi = _abi;
  static createInterface(): VotingReputationInterface {
    return new utils.Interface(_abi) as VotingReputationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingReputation {
    return new Contract(address, _abi, signerOrProvider) as VotingReputation;
  }
}
