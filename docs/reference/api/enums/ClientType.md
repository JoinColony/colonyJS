# Enumeration: ClientType

The type for a specific contract-client (extended ethers `Contract`).
This is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)

**`Remarks`**

Every contract-client in ColonyJS needs to have a clientType property which a value of this enum needs to be assigned to

## Enumeration Members

### CoinMachineClient

• **CoinMachineClient** = ``"CoinMachineClient"``

___

### ColonyClient

• **ColonyClient** = ``"ColonyClient"``

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

### TokenClient

• **TokenClient** = ``"TokenClient"``

___

### TokenLockingClient

• **TokenLockingClient** = ``"TokenLockingClient"``

___

### VotingReputationClient

• **VotingReputationClient** = ``"VotingReputationClient"``

___

### WhitelistClient

• **WhitelistClient** = ``"WhitelistClient"``
