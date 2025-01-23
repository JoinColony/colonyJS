[**API**](../README.md)

***

# Class: ColonyToken

## Extends

- [`ERC20Token`](ERC20Token.md)

## Constructors

### new ColonyToken()

> **new ColonyToken**(`colonyNetwork`, `token`): [`ColonyToken`](ColonyToken.md)

Creates a new instance of a Colony deployed Token

#### Parameters

##### colonyNetwork

[`ColonyNetwork`](ColonyNetwork.md)

A [ColonyNetwork](ColonyNetwork.md) instance

##### token

A token address or a full contract (like on a colony token client)

`string` | `MetaTxToken`

#### Returns

[`ColonyToken`](ColonyToken.md)

An ERC20 token abstraction instance

#### Remarks

This does not deploy a new token, only connects to an exisiting one

#### Overrides

[`ERC20Token`](ERC20Token.md).[`constructor`](ERC20Token.md#constructors)

## Properties

### address

> **address**: `string`

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`address`](ERC20Token.md#address)

## Methods

### allowance()

> **allowance**(`owner`, `spender`): `Promise`\<`BigNumber`\>

Returns the amount which `spender` is still allowed to withdraw from `owner`

#### Parameters

##### owner

`string`

##### spender

`string`

#### Returns

`Promise`\<`BigNumber`\>

The allowance amount

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`allowance`](ERC20Token.md#allowance)

***

### approve()

> **approve**(`amount`, `spender`?): [`TxCreator`](TxCreator.md)\<`TokenERC20`, `"approve"`, \{ `guy`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Approve `amount` of the wallet owners holdings of the specified token

In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be approved.

#### Parameters

##### amount

`BigNumberish`

Amount of the token to be approved

##### spender?

`string`

Spender to approve the amount for. Defaults to the Colony Network

#### Returns

[`TxCreator`](TxCreator.md)\<`TokenERC20`, `"approve"`, \{ `guy`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that approved the tokens from their wallet |
| `guy` | string | Address of the TokenLocking contract |
| `wad` | BigNumber | Amount that was approved |

#### Example

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Approve 100 tokens to be "activated"
  await colony.token.approve(w`100`).tx().mined();
  // Deposit the tokens
  await colonyNetwork.locking.deposit(token.address, w`100`).tx().mined();
})();
```

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`approve`](ERC20Token.md#approve)

***

### balanceOf()

> **balanceOf**(`owner`): `Promise`\<`BigNumber`\>

Returns the account balance of another account with address `owner`

#### Parameters

##### owner

`string`

#### Returns

`Promise`\<`BigNumber`\>

The account balance of the corresponding address

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`balanceOf`](ERC20Token.md#balanceof)

***

### decimals()

> **decimals**(): `Promise`\<`number`\>

Returns the token's decimals

#### Returns

`Promise`\<`number`\>

The token's decimals (e.g. 18)

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`decimals`](ERC20Token.md#decimals)

***

### name()

> **name**(): `Promise`\<`string`\>

Returns the token's name

#### Returns

`Promise`\<`string`\>

The token's name (e.g. Colony Network Token)

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`name`](ERC20Token.md#name)

***

### setAuthority()

> **setAuthority**(`address`): [`MetaTxCreator`](MetaTxCreator.md)\<`MetaTxToken`, `"setAuthority"`, \{ `authority`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Sets the address of the TokenAuthority for this token

Set the TokenAuthority for this token. Only has to be done once, after the TokenAuthority has been deployed. See [Colony.deployTokenAuthority](Colony.md#deploytokenauthority) for more information.

#### Parameters

##### address

`string`

Address of the TokenAuthority contract

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)\<`MetaTxToken`, `"setAuthority"`, \{ `authority`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `authority` | string | The address of the tokenAuthority that has been set |

#### Remarks

Only works for native tokens deployed with Colony (not imported tokens).

#### Example

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Deploy the TokenAuthority contract
  // (forced transaction example)
  const [{ tokenAuthorityAddress }] = await colony.deployTokenAuthority().tx().mined();
  // Set the TokenAuthority for this token
  // (forced transaction example)
  await colony.token.setAuthority(tokenAuthorityAddress).tx().mined();
})();
```

***

### setOwner()

> **setOwner**(`address`): [`MetaTxCreator`](MetaTxCreator.md)\<`MetaTxToken`, `"setOwner"`, \{ `owner`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Sets the owner of the token

Set the owner address for this token. Should usually be the colony. This will allow the Colony to always affect certain token parameters, event without the TokenAuthority deployed or used

#### Parameters

##### address

`string`

Address to set as the owner of the token (usually the colony)

#### Returns

[`MetaTxCreator`](MetaTxCreator.md)\<`MetaTxToken`, `"setOwner"`, \{ `owner`: `string`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `owner` | string | The address of the owner that has been set |

#### Remarks

Only works for native tokens deployed with Colony (not imported tokens).

***

### symbol()

> **symbol**(): `Promise`\<`string`\>

Returns the token's symbol

#### Returns

`Promise`\<`string`\>

The token's symbol (e.g. CLNY)

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`symbol`](ERC20Token.md#symbol)

***

### totalSupply()

> **totalSupply**(): `Promise`\<`BigNumber`\>

Returns the total token supply

#### Returns

`Promise`\<`BigNumber`\>

The token's total supply

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`totalSupply`](ERC20Token.md#totalsupply)

***

### transfer()

> **transfer**(`to`, `value`): [`TxCreator`](TxCreator.md)\<`TokenERC20`, `"transfer"`, \{ `dst`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Transfers `value` amount of tokens to address `to` from the currently used wallet

#### Parameters

##### to

`string`

##### value

`BigNumberish`

#### Returns

[`TxCreator`](TxCreator.md)\<`TokenERC20`, `"transfer"`, \{ `dst`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that transferred the tokens from their wallet |
| `dst` | string | Address of the recipient of the tokens |
| `wad` | BigNumber | Amount that was transferred |

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`transfer`](ERC20Token.md#transfer)

***

### transferFrom()

> **transferFrom**(`from`, `to`, `value`): [`TxCreator`](TxCreator.md)\<`TokenERC20`, `"transferFrom"`, \{ `dst`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Transfers `value` amount of tokens from address `from` to address `to`

The transferFrom method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies

#### Parameters

##### from

`string`

##### to

`string`

##### value

`BigNumberish`

#### Returns

[`TxCreator`](TxCreator.md)\<`TokenERC20`, `"transferFrom"`, \{ `dst`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that transferred the tokens from their wallet |
| `dst` | string | Address of the recipient of the tokens |
| `wad` | BigNumber | Amount that was transferred |

#### Inherited from

[`ERC20Token`](ERC20Token.md).[`transferFrom`](ERC20Token.md#transferfrom)
