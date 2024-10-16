# Class: OneTxPayment

## `OneTxPayment` (One Transaction Payment)

Ordinarily payments require more than one transaction, because the payment lifecycle requires more than one permissioned role.

In some use cases, there might be a need for one authorized individual to be able to create, funds, and finalize a payment within a single transaction.

The OneTxPayment extension adds this functionality by adding a makePayment function which requires the caller to have both Funding and administration ability within the domain of the payment.

Extension therefore requires Administration and Funding roles to function.

Note: if you deployed your Colony using the Dapp, the OneTxPayment extension is already installed for you

## Properties

### address

• **address**: `string`

The extension contract's address

___

### version

• **version**: ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9``

The extension contract's version

___

### extensionType

▪ `Static` **extensionType**: [`OneTxPayment`](../enums/Extension.md#onetxpayment) = `Extension.OneTxPayment`

___

### supportedVersions

▪ `Static` **supportedVersions**: ({ `factory`: typeof `OneTxPayment__factory` = OneTxPaymentFactory3; `version`: `number` = 3 } \| { `factory`: typeof `OneTxPayment__factory` = OneTxPaymentFactory4; `version`: `number` = 4 })[]

The currently supported OneTXPayment contract version. If the extension contract is not on this version it has to be upgraded.

## Methods

### pay

▸ **pay**(`recipient`, `amount`, `teamId?`, `tokenAddress?`): [`ColonyTxCreator`](ColonyTxCreator.md)<`SupportedOneTxPaymentContract`, ``"makePaymentFundedFromDomain"``, { `agent?`: `string` ; `fundamentalId?`: `BigNumber` ; `nPayouts?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Make a payment to a single or multiple addresses using one or more tokens

**`Remarks`**

Requires the `OneTxPayment` extension to be installed for the Colony (this is usually the case for Colonies created via the Dapp). Note that most tokens use 18 decimals, so add a bunch of zeros or use our `w` or `toWei` functions (see example)

**`Example`**

```typescript
import { Id, Tokens, w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Pay 10 CLNY (on ArbitrumOne chain) from the root domain to the following address
  // (forced transaction example)
  await colony.ext.oneTx.pay(
     '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
     w`10`,
     Id.RootDomain,
     Tokens.ArbitrumOne.CLNY,
  ).tx().mined();
})();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | `string` \| `string`[] | Wallet address of account to send the funds to (also awarded reputation when sending the native token) - can also be an array of addresses to pay |
| `amount` | `BigNumberish` \| `BigNumberish`[] | Amount to pay in wei - can also be an array of amounts for the different tokens |
| `teamId?` | `BigNumberish` | The team to use to send the funds from. Has to have funding of at least the amount you need to send. See [moveFundsToTeam](Colony.md#movefundstoteam). Defaults to the Colony's root team |
| `tokenAddress?` | `string` \| `string`[] | The address of the token to make the payment in. Default is the Colony's native token - can also be an array of token addresses (needs to be the same length as `amount`) |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<`SupportedOneTxPaymentContract`, ``"makePaymentFundedFromDomain"``, { `agent?`: `string` ; `fundamentalId?`: `BigNumber` ; `nPayouts?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Required permissions for forced transaction:

* [Administration](../enums/ColonyRole.md#administration), [Funding](../enums/ColonyRole.md#funding)

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `agent` | string | The address that is responsible for triggering this event |
| `fundamentalId` | BigNumber | The newly added payment id |
| `nPayouts` | BigNumber | Number of payouts in total |

___

### upgrade

▸ **upgrade**(`toVersion?`): [`ColonyTxCreator`](ColonyTxCreator.md)<[`SupportedColonyContract`](../README.md#supportedcolonycontract), ``"upgradeExtension"``, { `colony?`: `string` ; `extensionId?`: `string` ; `version?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

Upgrade this extension to the next or a custom version

This method upgrades this extension to a specified version or, if no version is provided to the next higher version.

**`Remarks`**

* Only users with *Root* role are allowed to upgrade an extension (or another extension with appropriate permissions)
* Downgrading of extensions is not possible

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toVersion?` | `BigNumberish` | Specify a custom version to upgrade the extension to |

#### Returns

[`ColonyTxCreator`](ColonyTxCreator.md)<[`SupportedColonyContract`](../README.md#supportedcolonycontract), ``"upgradeExtension"``, { `colony?`: `string` ; `extensionId?`: `string` ; `version?`: `BigNumber`  }, [`MetadataType`](../enums/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `extensionId` | string | Extension id (name of the extension) that was upgraded |
| `oldVersion` | BigNumber | Version of the extension before the upgrade |
| `newVersion` | BigNumber | Version of the extension after the upgrade |

___

### connect

▸ `Static` **connect**(`colony`): `Promise`<[`OneTxPayment`](OneTxPayment.md)\>

Create an instance of a OneTxPayment extension client and connect the Colony to it

Only supports the latest version of the OneTxPayment contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colony` | [`Colony`](Colony.md) | The Colony instance |

#### Returns

`Promise`<[`OneTxPayment`](OneTxPayment.md)\>

A connected OneTxPayment instance

___

### getLatestSupportedVersion

▸ `Static` **getLatestSupportedVersion**(): ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9``

#### Returns

``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9``
