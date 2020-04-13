[@colony/colony-js](../README.md) › [Globals](../globals.md) › ["contracts/4/IReputationMiningCycleFactory"](_contracts_4_ireputationminingcyclefactory_.md)

# Module: "contracts/4/IReputationMiningCycleFactory"

## Index

### Classes

* [IReputationMiningCycleFactory](../classes/_contracts_4_ireputationminingcyclefactory_.ireputationminingcyclefactory.md)

### Variables

* [_abi](_contracts_4_ireputationminingcyclefactory_.md#const-_abi)

## Variables

### `Const` _abi

• **_abi**: *object | object | object[]* = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_miner",
        type: "address"
      },
      {
        indexed: false,
        name: "_newHash",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_nNodes",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_jrh",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_entryIndex",
        type: "uint256"
      }
    ],
    name: "ReputationRootHashSubmitted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_newHash",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_nNodes",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_jrh",
        type: "bytes32"
      }
    ],
    name: "JustificationRootHashConfirmed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_newHash",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_nNodes",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_jrh",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_firstDisagreeIdx",
        type: "uint256"
      }
    ],
    name: "BinarySearchConfirmed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_newHash",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_nNodes",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_jrh",
        type: "bytes32"
      }
    ],
    name: "ChallengeCompleted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_newHash",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_nNodes",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_jrh",
        type: "bytes32"
      }
    ],
    name: "HashInvalidated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "previousNewReputationUID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_disagreeStateReputationUID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "existingUID",
        type: "bool"
      }
    ],
    name: "ProveUIDSuccess",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_agreeStateReputationValue",
        type: "int256"
      },
      {
        indexed: false,
        name: "_disagreeStateReputationValue",
        type: "int256"
      },
      {
        indexed: false,
        name: "_originReputationValue",
        type: "int256"
      }
    ],
    name: "ProveValueSuccess",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_round",
        type: "uint256"
      }
    ],
    name: "getDisputeRound",
    outputs: [
      {
        components: [
          {
            name: "firstSubmitter",
            type: "address"
          },
          {
            name: "lastResponseTimestamp",
            type: "uint256"
          },
          {
            name: "challengeStepCompleted",
            type: "uint256"
          },
          {
            name: "intermediateReputationHash",
            type: "bytes32"
          },
          {
            name: "intermediateReputationNNodes",
            type: "uint256"
          },
          {
            name: "lowerBound",
            type: "uint256"
          },
          {
            name: "upperBound",
            type: "uint256"
          },
          {
            name: "targetHashDuringSearch",
            type: "bytes32"
          },
          {
            name: "hash1",
            type: "bytes32"
          },
          {
            name: "hash2",
            type: "bytes32"
          }
        ],
        name: "submissions",
        type: "tuple[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_user",
        type: "address"
      }
    ],
    name: "getReputationHashSubmission",
    outputs: [
      {
        components: [
          {
            name: "proposedNewRootHash",
            type: "bytes32"
          },
          {
            name: "nNodes",
            type: "uint256"
          },
          {
            name: "jrh",
            type: "bytes32"
          },
          {
            name: "jrhNNodes",
            type: "uint256"
          }
        ],
        name: "submission",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "submitter",
        type: "address"
      },
      {
        name: "entryIndex",
        type: "uint256"
      },
      {
        name: "newHash",
        type: "bytes32"
      }
    ],
    name: "getEntryHash",
    outputs: [
      {
        name: "entryHash",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_miner",
        type: "address"
      },
      {
        name: "_index",
        type: "uint256"
      }
    ],
    name: "minerSubmittedEntryIndex",
    outputs: [
      {
        name: "result",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "resetWindow",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newHash",
        type: "bytes32"
      },
      {
        name: "nNodes",
        type: "uint256"
      },
      {
        name: "jrh",
        type: "bytes32"
      },
      {
        name: "entryIndex",
        type: "uint256"
      }
    ],
    name: "submitRootHash",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "round",
        type: "uint256"
      }
    ],
    name: "challengeRoundComplete",
    outputs: [
      {
        name: "complete",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "roundNumber",
        type: "uint256"
      }
    ],
    name: "confirmNewHash",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "round",
        type: "uint256"
      },
      {
        name: "idx",
        type: "uint256"
      }
    ],
    name: "invalidateHash",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "round",
        type: "uint256"
      },
      {
        name: "idx",
        type: "uint256"
      },
      {
        name: "jhIntermediateValue",
        type: "bytes"
      },
      {
        name: "siblings",
        type: "bytes32[]"
      }
    ],
    name: "respondToBinarySearchForChallenge",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "round",
        type: "uint256"
      },
      {
        name: "idx",
        type: "uint256"
      },
      {
        name: "jhIntermediateValue",
        type: "bytes"
      },
      {
        name: "siblings",
        type: "bytes32[]"
      }
    ],
    name: "confirmBinarySearchResult",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "u",
        type: "uint256[26]"
      },
      {
        name: "b32",
        type: "bytes32[7]"
      },
      {
        name: "reputationSiblings",
        type: "bytes32[]"
      },
      {
        name: "agreeStateSiblings",
        type: "bytes32[]"
      },
      {
        name: "disagreeStateSiblings",
        type: "bytes32[]"
      },
      {
        name: "userOriginReputationSiblings",
        type: "bytes32[]"
      },
      {
        name: "childReputationSiblings",
        type: "bytes32[]"
      },
      {
        name: "adjacentReputationSiblings",
        type: "bytes32[]"
      }
    ],
    name: "respondToChallenge",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "round",
        type: "uint256"
      },
      {
        name: "index",
        type: "uint256"
      },
      {
        name: "siblings1",
        type: "bytes32[]"
      },
      {
        name: "siblings2",
        type: "bytes32[]"
      }
    ],
    name: "confirmJustificationRootHash",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_user",
        type: "address"
      },
      {
        name: "_amount",
        type: "int256"
      },
      {
        name: "_skillId",
        type: "uint256"
      },
      {
        name: "_colonyAddress",
        type: "address"
      },
      {
        name: "_nParents",
        type: "uint128"
      },
      {
        name: "_nChildren",
        type: "uint128"
      }
    ],
    name: "appendReputationUpdateLog",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getReputationUpdateLogLength",
    outputs: [
      {
        name: "nUpdates",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "uint256"
      }
    ],
    name: "getReputationUpdateLogEntry",
    outputs: [
      {
        components: [
          {
            name: "user",
            type: "address"
          },
          {
            name: "amount",
            type: "int256"
          },
          {
            name: "skillId",
            type: "uint256"
          },
          {
            name: "colony",
            type: "address"
          },
          {
            name: "nUpdates",
            type: "uint128"
          },
          {
            name: "nPreviousUpdates",
            type: "uint128"
          }
        ],
        name: "reputationUpdateLogEntry",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "stakers",
        type: "address[]"
      },
      {
        name: "weights",
        type: "uint256[]"
      },
      {
        name: "metaColonyAddress",
        type: "address"
      },
      {
        name: "reward",
        type: "uint256"
      },
      {
        name: "miningSkillId",
        type: "uint256"
      }
    ],
    name: "rewardStakersWithReputation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getReputationMiningWindowOpenTimestamp",
    outputs: [
      {
        name: "timestamp",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "tokenLocking",
        type: "address"
      },
      {
        name: "clnyToken",
        type: "address"
      }
    ],
    name: "initialise",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getNUniqueSubmittedHashes",
    outputs: [
      {
        name: "nUniqueSubmittedHashes",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getNInvalidatedHashes",
    outputs: [
      {
        name: "nInvalidatedHashes",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getMinStake",
    outputs: [
      {
        name: "minStake",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getMiningWindowDuration",
    outputs: [
      {
        name: "miningWindowDuration",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getDecayConstant",
    outputs: [
      {
        name: "numerator",
        type: "uint256"
      },
      {
        name: "denominator",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "hash",
        type: "bytes32"
      },
      {
        name: "nNodes",
        type: "uint256"
      },
      {
        name: "jrh",
        type: "bytes32"
      },
      {
        name: "index",
        type: "uint256"
      }
    ],
    name: "getSubmissionUser",
    outputs: [
      {
        name: "user",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "hash",
        type: "bytes32"
      },
      {
        name: "nNodes",
        type: "uint256"
      },
      {
        name: "jrh",
        type: "bytes32"
      }
    ],
    name: "getNSubmissionsForHash",
    outputs: [
      {
        name: "count",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
]

*Defined in [src/contracts/4/IReputationMiningCycleFactory.ts:22](https://github.com/JoinColony/colonyJS/blob/60b53ae/src/contracts/4/IReputationMiningCycleFactory.ts#L22)*
