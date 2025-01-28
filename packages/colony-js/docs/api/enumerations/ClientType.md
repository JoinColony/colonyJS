# Enumeration: ClientType

The type for a specific contract-client (extended ethers `Contract`).
This is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)

## Remarks

Every contract-client in ColonyJS needs to have a clientType property which a value of this enum needs to be assigned to

## Enumeration Members

### ColonyClient

> **ColonyClient**: `"ColonyClient"`

***

### FundingQueueClient

> **FundingQueueClient**: `"FundingQueueClient"`

***

### MotionTargetClient

> **MotionTargetClient**: `"MotionTargetClient"`

***

### MultisigPermissionsClient

> **MultisigPermissionsClient**: `"MultisigPermissionsClient"`

***

### NetworkClient

> **NetworkClient**: `"NetworkClient"`

***

### OneTxPaymentClient

> **OneTxPaymentClient**: `"OneTxPaymentClient"`

***

### ReputationBootstrapperClient

> **ReputationBootstrapperClient**: `"ReputationBootstrapperClient"`

***

### StagedExpenditureClient

> **StagedExpenditureClient**: `"StagedExpenditureClient"`

***

### StakedExpenditureClient

> **StakedExpenditureClient**: `"StakedExpenditureClient"`

***

### StreamingPaymentsClient

> **StreamingPaymentsClient**: `"StreamingPaymentsClient"`

***

### TokenClient

> **TokenClient**: `"TokenClient"`

***

### TokenLockingClient

> **TokenLockingClient**: `"TokenLockingClient"`

***

### TokenSupplierClient

> **TokenSupplierClient**: `"TokenSupplierClient"`

***

### VotingReputationClient

> **VotingReputationClient**: `"VotingReputationClient"`
