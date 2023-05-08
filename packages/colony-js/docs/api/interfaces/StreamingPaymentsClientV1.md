# Interface: StreamingPaymentsClientV1

## Hierarchy

- `AugmentedStreamingPayments`<`StreamingPayments`\>

  ↳ **`StreamingPaymentsClientV1`**

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

AugmentedStreamingPayments.\_deployedPromise

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

AugmentedStreamingPayments.\_runningEvents

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

AugmentedStreamingPayments.\_wrappedEmits

___

### address

• `Readonly` **address**: `string`

#### Inherited from

AugmentedStreamingPayments.address

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addToken` | (`_fundingPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_fundingChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `cancel` | (`_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelAndWaive` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `_tokens`: `PromiseOrValue`<`string`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claim` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_fromChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_toChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_tokens`: `PromiseOrValue`<`string`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `create` | (`_fundingPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_fundingChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_startTime`: `PromiseOrValue`<`BigNumberish`\>, `_endTime`: `PromiseOrValue`<`BigNumberish`\>, `_interval`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `_tokens`: `PromiseOrValue`<`string`\>[], `_amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getAmountEntitledFromStart` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMetatransactionNonce` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNumStreamingPayments` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPaymentToken` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PaymentTokenStructOutput`\> |
| `getStreamingPayment` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`StreamingPaymentStructOutput`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setEndTime` | (`_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_endTime`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStartTime` | (`_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_startTime`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTokenAmount` | (`_fundingPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_fundingChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_fromChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_toChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedStreamingPayments.callStatic

___

### clientType

• **clientType**: [`StreamingPaymentsClient`](../enums/ClientType.md#streamingpaymentsclient)

#### Inherited from

AugmentedStreamingPayments.clientType

___

### clientVersion

• **clientVersion**: ``1``

#### Overrides

AugmentedStreamingPayments.clientVersion

___

### colonyClient

• **colonyClient**: `AugmentedIColony`<`ValidColony`\>

An instance of the corresponding ColonyClient

#### Inherited from

AugmentedStreamingPayments.colonyClient

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

AugmentedStreamingPayments.deployTransaction

___

### estimateGas

• **estimateGas**: `Object`

#### Inherited from

AugmentedStreamingPayments.estimateGas

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `PromiseOrValue`<`string`\>) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`user?`: ``null``, `relayerAddress?`: ``null``, `functionSignature?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `PaymentTokenUpdated` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null``, `amount?`: ``null``) => `PaymentTokenUpdatedEventFilter` |
| `PaymentTokenUpdated(address,uint256,address,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null``, `amount?`: ``null``) => `PaymentTokenUpdatedEventFilter` |
| `StreamingPaymentClaimed` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null``, `amount?`: ``null``) => `StreamingPaymentClaimedEventFilter` |
| `StreamingPaymentClaimed(address,uint256,address,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `PromiseOrValue`<`BigNumberish`\>, `token?`: ``null``, `amount?`: ``null``) => `StreamingPaymentClaimedEventFilter` |
| `StreamingPaymentCreated` | (`agent?`: ``null``, `streamingPaymentId?`: ``null``) => `StreamingPaymentCreatedEventFilter` |
| `StreamingPaymentCreated(address,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null``) => `StreamingPaymentCreatedEventFilter` |

#### Inherited from

AugmentedStreamingPayments.filters

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addToken` | (`_fundingPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_fundingChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `cancel` | (`_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelAndWaive` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `_tokens`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claim` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_fromChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_toChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_tokens`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `create` | (`_fundingPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_fundingChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_startTime`: `PromiseOrValue`<`BigNumberish`\>, `_endTime`: `PromiseOrValue`<`BigNumberish`\>, `_interval`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `_tokens`: `PromiseOrValue`<`string`\>[], `_amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getAmountEntitledFromStart` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMetatransactionNonce` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nonce`: `BigNumber`  }\> |
| `getNumStreamingPayments` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numPayments`: `BigNumber`  }\> |
| `getPaymentToken` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`PaymentTokenStructOutput`] & { `paymentToken`: `PaymentTokenStructOutput`  }\> |
| `getStreamingPayment` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`StreamingPaymentStructOutput`] & { `streamingPayment`: `StreamingPaymentStructOutput`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setEndTime` | (`_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_endTime`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setStartTime` | (`_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_startTime`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setTokenAmount` | (`_fundingPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_fundingChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_fromChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_toChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |

#### Inherited from

AugmentedStreamingPayments.functions

___

### interface

• **interface**: `StreamingPaymentsInterface`

#### Inherited from

AugmentedStreamingPayments.interface

___

### off

• **off**: `OnEvent`<[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)\>

#### Inherited from

AugmentedStreamingPayments.off

___

### on

• **on**: `OnEvent`<[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)\>

#### Inherited from

AugmentedStreamingPayments.on

___

### once

• **once**: `OnEvent`<[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)\>

#### Inherited from

AugmentedStreamingPayments.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addToken` | (`_fundingPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_fundingChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `cancel` | (`_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelAndWaive` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `_tokens`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claim` | (`_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_fromChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_toChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_tokens`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `create` | (`_fundingPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_fundingChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_domainId`: `PromiseOrValue`<`BigNumberish`\>, `_startTime`: `PromiseOrValue`<`BigNumberish`\>, `_endTime`: `PromiseOrValue`<`BigNumberish`\>, `_interval`: `PromiseOrValue`<`BigNumberish`\>, `_recipient`: `PromiseOrValue`<`string`\>, `_tokens`: `PromiseOrValue`<`string`\>[], `_amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `PromiseOrValue`<`string`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getAmountEntitledFromStart` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getChainId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`_user`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNumStreamingPayments` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPaymentToken` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStreamingPayment` | (`_id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setEndTime` | (`_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_endTime`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setStartTime` | (`_adminPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_adminChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_startTime`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setTokenAmount` | (`_fundingPermissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_fundingChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_permissionDomainId`: `PromiseOrValue`<`BigNumberish`\>, `_childSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_fromChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_toChildSkillIndex`: `PromiseOrValue`<`BigNumberish`\>, `_id`: `PromiseOrValue`<`BigNumberish`\>, `_token`: `PromiseOrValue`<`string`\>, `_amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_owner`: `PromiseOrValue`<`string`\>, `_nonce`: `PromiseOrValue`<`BigNumberish`\>, `_chainId`: `PromiseOrValue`<`BigNumberish`\>, `_payload`: `PromiseOrValue`<`BytesLike`\>, `_sigR`: `PromiseOrValue`<`BytesLike`\>, `_sigS`: `PromiseOrValue`<`BytesLike`\>, `_sigV`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedStreamingPayments.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedStreamingPayments.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)\>

#### Inherited from

AugmentedStreamingPayments.removeListener

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.resolvedAddress

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

AugmentedStreamingPayments.signer

___

### stakedExpenditureEvents

• **stakedExpenditureEvents**: `StreamingPaymentsEvents`

The stakedExpenditureEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedStreamingPayments.stakedExpenditureEvents

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

AugmentedStreamingPayments.\_checkRunningEvents

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

AugmentedStreamingPayments.\_deployed

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

AugmentedStreamingPayments.\_wrapEvent

___

### addToken

▸ **addToken**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Add a new token/amount pair

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_fundingPermissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain in which the caller holds the funding permission |
| `_fundingChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index linking the fundingPermissionDomainId to the domainId |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `_token` | `PromiseOrValue`<`string`\> | The address of the token |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The amount to pay out |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.addToken

___

### addTokenWithProofs

▸ **addTokenWithProofs**(`_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [addToken](StreamingPaymentsClientV1.md#addtoken), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | The id of the streaming payment |
| `_token` | `string` | The address of the token |
| `_amount` | `BigNumberish` | The amount to pay out |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.addTokenWithProofs

___

### attach

▸ **attach**(`addressOrName`): [`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)

#### Inherited from

AugmentedStreamingPayments.attach

___

### authority

▸ **authority**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.authority

___

### cancel

▸ **cancel**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Cancel the streaming payment, specifically by setting endTime to block.timestamp

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_adminPermissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain in which the caller holds the admin permission |
| `_adminChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index linking the adminPermissionDomainId to the domainId |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.cancel

___

### cancelAndWaive

▸ **cancelAndWaive**(`_id`, `_tokens`, `overrides?`): `Promise`<`ContractTransaction`\>

Cancel the streaming payment, specifically by setting endTime to block.timestamp, and waive claim to specified tokens already earned. Only callable by the recipient.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `_tokens` | `PromiseOrValue`<`string`\>[] | The tokens to waive any claims to. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.cancelAndWaive

___

### cancelWithProofs

▸ **cancelWithProofs**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [cancel](StreamingPaymentsClientV1.md#cancel), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | The id of the streaming payment |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.cancelWithProofs

___

### claim

▸ **claim**(`_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `_tokens`, `overrides?`): `Promise`<`ContractTransaction`\>

Claim a streaming payment

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain in which the extension holds the funding & admin permissions |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index linking the permissionDomainId to the domainId the payment is in |
| `_fromChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The linking the domainId to the fromPot domain |
| `_toChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The linking the domainId to the toPot domain |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `_tokens` | `PromiseOrValue`<`string`\>[] | The tokens to be paid out |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.claim

___

### claimWithProofs

▸ **claimWithProofs**(`_id`, `_tokens`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [claim](StreamingPaymentsClientV1.md#claim), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | The id of the streaming payment |
| `_tokens` | `string`[] | The tokens to be paid out |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.claimWithProofs

___

### connect

▸ **connect**(`signerOrProvider`): [`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)

#### Inherited from

AugmentedStreamingPayments.connect

___

### create

▸ **create**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_adminPermissionDomainId`, `_adminChildSkillIndex`, `_domainId`, `_startTime`, `_endTime`, `_interval`, `_recipient`, `_tokens`, `_amounts`, `overrides?`): `Promise`<`ContractTransaction`\>

Creates a new streaming payment

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_fundingPermissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain in which the caller holds the funding permission |
| `_fundingChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index linking the fundingPermissionDomainId to the domainId |
| `_adminPermissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain in which the caller holds the admin permission |
| `_adminChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index linking the adminPermissionDomainId to the domainId |
| `_domainId` | `PromiseOrValue`<`BigNumberish`\> | The domain out of which the streaming payment will be paid |
| `_startTime` | `PromiseOrValue`<`BigNumberish`\> | The time at which the payment begins paying out |
| `_endTime` | `PromiseOrValue`<`BigNumberish`\> | The time at which the payment ends paying out |
| `_interval` | `PromiseOrValue`<`BigNumberish`\> | The period of time over which _amounts are paid out |
| `_recipient` | `PromiseOrValue`<`string`\> | The recipient of the streaming payment |
| `_tokens` | `PromiseOrValue`<`string`\>[] | The tokens to be paid out |
| `_amounts` | `PromiseOrValue`<`BigNumberish`\>[] | The amounts to be paid out (per _interval of time) |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.create

___

### createWithProofs

▸ **createWithProofs**(`_domainId`, `_startTime`, `_endTime`, `_interval`, `_recipient`, `_tokens`, `_amounts`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [create](StreamingPaymentsClientV1.md#create), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain out of which the streaming payment will be paid |
| `_startTime` | `BigNumberish` | The time at which the payment begins paying out |
| `_endTime` | `BigNumberish` | The time at which the payment ends paying out |
| `_interval` | `BigNumberish` | The period of time over which _amounts are paid out |
| `_recipient` | `string` | The recipient of the streaming payment |
| `_tokens` | `string`[] | The tokens to be paid out |
| `_amounts` | `BigNumberish`[] | The amounts to be paid out (per _interval of time) |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.createWithProofs

___

### deployed

▸ **deployed**(): `Promise`<[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)\>

#### Returns

`Promise`<[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)\>

#### Inherited from

AugmentedStreamingPayments.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

Called when deprecating (or undeprecating) the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_deprecated` | `PromiseOrValue`<`boolean`\> | Indicates whether the extension should be deprecated or undeprecated |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.deprecate

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

AugmentedStreamingPayments.emit

___

### executeMetaTransaction

▸ **executeMetaTransaction**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

Main function to be called when user wants to execute meta transaction. The actual function to be called should be passed as param with name functionSignature Here the basic signature recovery is being used. Signature is expected to be generated using personal_sign method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> | Address of user trying to do meta transaction |
| `_payload` | `PromiseOrValue`<`BytesLike`\> | Function call to make via meta transaction |
| `_sigR` | `PromiseOrValue`<`BytesLike`\> | R part of the signature |
| `_sigS` | `PromiseOrValue`<`BytesLike`\> | S part of the signature |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\> | V part of the signature |
| `overrides?` | `PayableOverrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.executeMetaTransaction

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

AugmentedStreamingPayments.fallback

___

### finishUpgrade

▸ **finishUpgrade**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when upgrading the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.finishUpgrade

___

### getAmountEntitledFromStart

▸ **getAmountEntitledFromStart**(`_id`, `_token`, `overrides?`): `Promise`<`BigNumber`\>

Get the amount entitled to claim from the start of the stream

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `_token` | `PromiseOrValue`<`string`\> | The address of the token |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getAmountEntitledFromStart

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.getCapabilityRoles

___

### getChainId

▸ **getChainId**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getChainId

___

### getColony

▸ **getColony**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.getColony

___

### getDeprecated

▸ **getDeprecated**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedStreamingPayments.getDeprecated

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getMetatransactionNonce

___

### getNumStreamingPayments

▸ **getNumStreamingPayments**(`overrides?`): `Promise`<`BigNumber`\>

Get the total number of streaming payments

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getNumStreamingPayments

___

### getPaymentToken

▸ **getPaymentToken**(`_id`, `_token`, `overrides?`): `Promise`<`PaymentTokenStructOutput`\>

Get the payment token struct by Id and token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `_token` | `PromiseOrValue`<`string`\> | The address of the token |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`PaymentTokenStructOutput`\>

#### Inherited from

AugmentedStreamingPayments.getPaymentToken

___

### getStreamingPayment

▸ **getStreamingPayment**(`_id`, `overrides?`): `Promise`<`StreamingPaymentStructOutput`\>

Get the streaming payment struct by Id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`StreamingPaymentStructOutput`\>

#### Inherited from

AugmentedStreamingPayments.getStreamingPayment

___

### identifier

▸ **identifier**(`overrides?`): `Promise`<`string`\>

Returns the identifier of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.identifier

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

Configures the extension

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_colony` | `PromiseOrValue`<`string`\> | The colony in which the extension holds permissions |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.install

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

AugmentedStreamingPayments.listenerCount

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Inherited from

AugmentedStreamingPayments.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Inherited from

AugmentedStreamingPayments.listeners

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.owner

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Inherited from

AugmentedStreamingPayments.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)

#### Inherited from

AugmentedStreamingPayments.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`StreamingPaymentsClientV1`](StreamingPaymentsClientV1.md)

#### Inherited from

AugmentedStreamingPayments.removeAllListeners

___

### setAuthority

▸ **setAuthority**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setAuthority

___

### setEndTime

▸ **setEndTime**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_endTime`, `overrides?`): `Promise`<`ContractTransaction`\>

Update the endTime, only if the new endTime is in the future

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_adminPermissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain in which the caller holds the admin permission |
| `_adminChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index linking the adminPermissionDomainId to the domainId |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `_endTime` | `PromiseOrValue`<`BigNumberish`\> | The new endTime to set |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setEndTime

___

### setEndTimeWithProofs

▸ **setEndTimeWithProofs**(`_id`, `_endTime`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setEndTime](StreamingPaymentsClientV1.md#setendtime), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | The id of the streaming payment |
| `_endTime` | `BigNumberish` | The new endTime to set |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setEndTimeWithProofs

___

### setOwner

▸ **setOwner**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setOwner

___

### setStartTime

▸ **setStartTime**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_startTime`, `overrides?`): `Promise`<`ContractTransaction`\>

Update the startTime, only if the current startTime is in the future

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_adminPermissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain in which the caller holds the admin permission |
| `_adminChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index linking the adminPermissionDomainId to the domainId |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `_startTime` | `PromiseOrValue`<`BigNumberish`\> | The new startTime to set |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setStartTime

___

### setStartTimeWithProofs

▸ **setStartTimeWithProofs**(`_id`, `_startTime`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setStartTime](StreamingPaymentsClientV1.md#setstarttime), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | The id of the streaming payment |
| `_startTime` | `BigNumberish` | The new startTime to set |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setStartTimeWithProofs

___

### setTokenAmount

▸ **setTokenAmount**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Update the token amount to be paid out. Claims existing payout prior to the change

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_fundingPermissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain in which the caller holds the funding permission |
| `_fundingChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index linking the fundingPermissionDomainId to the domainId |
| `_permissionDomainId` | `PromiseOrValue`<`BigNumberish`\> | The domain in which the extension holds the funding & admin permissions |
| `_childSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The index linking the permissionDomainId to the domainId |
| `_fromChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The linking the domainId to the fromPot domain |
| `_toChildSkillIndex` | `PromiseOrValue`<`BigNumberish`\> | The linking the domainId to the toPot domain |
| `_id` | `PromiseOrValue`<`BigNumberish`\> | The id of the streaming payment |
| `_token` | `PromiseOrValue`<`string`\> | The address of the token |
| `_amount` | `PromiseOrValue`<`BigNumberish`\> | The new amount to pay out |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setTokenAmount

___

### setTokenAmountWithProofs

▸ **setTokenAmountWithProofs**(`_id`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setTokenAmount](StreamingPaymentsClientV1.md#settokenamount), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | The id of the streaming payment |
| `_token` | `string` | The address of the token |
| `_amount` | `BigNumberish` | The new amount to pay out |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setTokenAmountWithProofs

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

Called when uninstalling the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.uninstall

___

### verify

▸ **verify**(`_owner`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `PromiseOrValue`<`string`\> |
| `_nonce` | `PromiseOrValue`<`BigNumberish`\> |
| `_chainId` | `PromiseOrValue`<`BigNumberish`\> |
| `_payload` | `PromiseOrValue`<`BytesLike`\> |
| `_sigR` | `PromiseOrValue`<`BytesLike`\> |
| `_sigS` | `PromiseOrValue`<`BytesLike`\> |
| `_sigV` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedStreamingPayments.verify

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

Returns the version of the extension

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.version
