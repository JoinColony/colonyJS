[ColonyJS](../README.md) / [Exports](../modules.md) / ClientType

# Enumeration: ClientType

The type for a specific contract-client (extended ethers `Contract`).
This is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)

**`remarks`**
Every contract-client in ColonyJS needs to have a clientType property which a value of this enum needs to be assigned to

## Table of contents

### Enumeration members

- [CoinMachineClient](ClientType.md#coinmachineclient)
- [ColonyClient](ClientType.md#colonyclient)
- [NetworkClient](ClientType.md#networkclient)
- [OneTxPaymentClient](ClientType.md#onetxpaymentclient)
- [TokenClient](ClientType.md#tokenclient)
- [TokenLockingClient](ClientType.md#tokenlockingclient)
- [UtilsClient](ClientType.md#utilsclient)
- [VotingReputationClient](ClientType.md#votingreputationclient)
- [WhitelistClient](ClientType.md#whitelistclient)

## Enumeration members

### CoinMachineClient

• **CoinMachineClient** = `"CoinMachineClient"`

___

### ColonyClient

• **ColonyClient** = `"ColonyClient"`

___

### NetworkClient

• **NetworkClient** = `"NetworkClient"`

___

### OneTxPaymentClient

• **OneTxPaymentClient** = `"OneTxPaymentClient"`

___

### TokenClient

• **TokenClient** = `"TokenClient"`

___

### TokenLockingClient

• **TokenLockingClient** = `"TokenLockingClient"`

___

### UtilsClient

• **UtilsClient** = `"UtilsClient"`

___

### VotingReputationClient

• **VotingReputationClient** = `"VotingReputationClient"`

___

### WhitelistClient

• **WhitelistClient** = `"WhitelistClient"`
