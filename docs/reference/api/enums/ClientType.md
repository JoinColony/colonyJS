# Enumeration: ClientType

The type for a specific contract-client (extended ethers `Contract`).
This is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)

**`remarks`**
Every contract-client in ColonyJS needs to have a clientType property which a value of this enum needs to be assigned to

## Enumeration members

### CoinMachineClient

• **CoinMachineClient** = `"CoinMachineClient"`

### ColonyClient

• **ColonyClient** = `"ColonyClient"`

### NetworkClient

• **NetworkClient** = `"NetworkClient"`

### OneTxPaymentClient

• **OneTxPaymentClient** = `"OneTxPaymentClient"`

### TokenClient

• **TokenClient** = `"TokenClient"`

### TokenLockingClient

• **TokenLockingClient** = `"TokenLockingClient"`

### UtilsClient

• **UtilsClient** = `"UtilsClient"`

### VotingReputationClient

• **VotingReputationClient** = `"VotingReputationClient"`

### WhitelistClient

• **WhitelistClient** = `"WhitelistClient"`
