# Enumeration: ClientType

The type for a specific contract-client (extended ethers `Contract`).
This is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)

**`Remarks`**

Every contract-client in ColonyJS needs to have a clientType property which a value of this enum needs to be assigned to

## Enumeration Members

### ColonyClient

• **ColonyClient** = ``"ColonyClient"``

___

### FundingQueueClient

• **FundingQueueClient** = ``"FundingQueueClient"``

___

### MotionTargetClient

• **MotionTargetClient** = ``"MotionTargetClient"``

___

### NetworkClient

• **NetworkClient** = ``"NetworkClient"``

___

### OneTxPaymentClient

• **OneTxPaymentClient** = ``"OneTxPaymentClient"``

___

### ReputationBootstrapperClient

• **ReputationBootstrapperClient** = ``"ReputationBootstrapperClient"``

___

### StagedExpenditureClient

• **StagedExpenditureClient** = ``"StagedExpenditureClient"``

___

### StakedExpenditureClient

• **StakedExpenditureClient** = ``"StakedExpenditureClient"``

___

### StreamingPaymentsClient

• **StreamingPaymentsClient** = ``"StreamingPaymentsClient"``

___

### TokenClient

• **TokenClient** = ``"TokenClient"``

___

### TokenLockingClient

• **TokenLockingClient** = ``"TokenLockingClient"``

___

### TokenSupplierClient

• **TokenSupplierClient** = ``"TokenSupplierClient"``

___

### VotingReputationClient

• **VotingReputationClient** = ``"VotingReputationClient"``
