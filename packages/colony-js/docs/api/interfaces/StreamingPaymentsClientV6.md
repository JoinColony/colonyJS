# Interface: StreamingPaymentsClientV6

## Hierarchy

- `AugmentedStreamingPayments`<`StreamingPayments`\>

  ↳ **`StreamingPaymentsClientV6`**

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
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `cancel` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancel(uint256,uint256,uint256)` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelAndWaive` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelAndWaive(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claim` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claim(uint256,uint256,uint256,uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `create` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_startTime`: `BigNumberish`, `_endTime`: `BigNumberish`, `_interval`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_startTime`: `BigNumberish`, `_endTime`: `BigNumberish`, `_interval`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `finishUpgrade` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `finishUpgrade()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getAmountClaimableLifetime` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAmountClaimableLifetime(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAmountEntitledFromStart` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAmountEntitledFromStart(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNUnresolvedStreamingPayments` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNUnresolvedStreamingPayments()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNumStreamingPayments` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getNumStreamingPayments()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getStreamingPayment` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`StreamingPaymentStructOutput`\> |
| `getStreamingPayment(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`StreamingPaymentStructOutput`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `install` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setEndTime` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_endTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setEndTime(uint256,uint256,uint256,uint256)` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_endTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStartTime` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_startTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setStartTime(uint256,uint256,uint256,uint256)` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_startTime`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTokenAmount` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_interval`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_interval`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `uninstall()` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Inherited from

AugmentedStreamingPayments.callStatic

___

### clientType

• **clientType**: [`StreamingPaymentsClient`](../enums/ClientType.md#streamingpaymentsclient)

#### Inherited from

AugmentedStreamingPayments.clientType

___

### clientVersion

• **clientVersion**: ``6``

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
| `ClaimWaived` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`) => `ClaimWaivedEventFilter` |
| `ClaimWaived(address,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`) => `ClaimWaivedEventFilter` |
| `EndTimeSet` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `endTime?`: ``null``) => `EndTimeSetEventFilter` |
| `EndTimeSet(address,uint256,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `endTime?`: ``null``) => `EndTimeSetEventFilter` |
| `ExtensionInitialised` | () => `ExtensionInitialisedEventFilter` |
| `ExtensionInitialised()` | () => `ExtensionInitialisedEventFilter` |
| `LogSetAuthority` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetAuthority(address)` | (`authority?`: ``null`` \| `string`) => `LogSetAuthorityEventFilter` |
| `LogSetOwner` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `LogSetOwner(address)` | (`owner?`: ``null`` \| `string`) => `LogSetOwnerEventFilter` |
| `MetaTransactionExecuted` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `MetaTransactionExecuted(address,address,bytes)` | (`userAddress?`: ``null``, `relayerAddress?`: ``null``, `payload?`: ``null``) => `MetaTransactionExecutedEventFilter` |
| `PaymentTokenUpdated` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `interval?`: ``null``) => `PaymentTokenUpdatedEventFilter` |
| `PaymentTokenUpdated(address,uint256,uint256,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `amount?`: ``null``, `interval?`: ``null``) => `PaymentTokenUpdatedEventFilter` |
| `StartTimeSet` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `startTime?`: ``null``) => `StartTimeSetEventFilter` |
| `StartTimeSet(address,uint256,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `startTime?`: ``null``) => `StartTimeSetEventFilter` |
| `StreamingPaymentClaimed` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `StreamingPaymentClaimedEventFilter` |
| `StreamingPaymentClaimed(address,uint256,address,uint256)` | (`agent?`: ``null``, `streamingPaymentId?`: ``null`` \| `BigNumberish`, `token?`: ``null``, `amount?`: ``null``) => `StreamingPaymentClaimedEventFilter` |
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
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `cancel` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `cancel(uint256,uint256,uint256)` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `cancelAndWaive` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `cancelAndWaive(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `claim` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `claim(uint256,uint256,uint256,uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `create` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_startTime`: `BigNumberish`, `_endTime`: `BigNumberish`, `_interval`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_startTime`: `BigNumberish`, `_endTime`: `BigNumberish`, `_interval`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `getAmountClaimableLifetime` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getAmountClaimableLifetime(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getAmountEntitledFromStart` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getAmountEntitledFromStart(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `amount`: `BigNumber`  }\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_nonce`: `BigNumber`  }\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_nonce`: `BigNumber`  }\> |
| `getNUnresolvedStreamingPayments` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nUnresolvedPayments`: `BigNumber`  }\> |
| `getNUnresolvedStreamingPayments()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `nUnresolvedPayments`: `BigNumber`  }\> |
| `getNumStreamingPayments` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numPayments`: `BigNumber`  }\> |
| `getNumStreamingPayments()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `numPayments`: `BigNumber`  }\> |
| `getStreamingPayment` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`StreamingPaymentStructOutput`] & { `streamingPayment`: `StreamingPaymentStructOutput`  }\> |
| `getStreamingPayment(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`StreamingPaymentStructOutput`] & { `streamingPayment`: `StreamingPaymentStructOutput`  }\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `_identifier`: `string`  }\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setEndTime` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_endTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setEndTime(uint256,uint256,uint256,uint256)` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_endTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setStartTime` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_startTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setStartTime(uint256,uint256,uint256,uint256)` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_startTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setTokenAmount` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_interval`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_interval`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`ContractTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `_version`: `BigNumber`  }\> |

#### Inherited from

AugmentedStreamingPayments.functions

___

### interface

• **interface**: `StreamingPaymentsInterface`

#### Inherited from

AugmentedStreamingPayments.interface

___

### off

• **off**: `OnEvent`<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Inherited from

AugmentedStreamingPayments.off

___

### on

• **on**: `OnEvent`<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Inherited from

AugmentedStreamingPayments.on

___

### once

• **once**: `OnEvent`<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Inherited from

AugmentedStreamingPayments.once

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authority` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `authority()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `cancel` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `cancel(uint256,uint256,uint256)` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelAndWaive` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelAndWaive(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `claim` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `claim(uint256,uint256,uint256,uint256,uint256)` | (`_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `create` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_startTime`: `BigNumberish`, `_endTime`: `BigNumberish`, `_interval`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_domainId`: `BigNumberish`, `_startTime`: `BigNumberish`, `_endTime`: `BigNumberish`, `_interval`: `BigNumberish`, `_recipient`: `string`, `_token`: `string`, `_amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `deprecate(bool)` | (`_deprecated`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `finishUpgrade()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `getAmountClaimableLifetime` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAmountClaimableLifetime(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAmountEntitledFromStart` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAmountEntitledFromStart(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCapabilityRoles(bytes4)` | (`_sig`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getColony()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDeprecated()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMetatransactionNonce(address)` | (`_user`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNUnresolvedStreamingPayments` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNUnresolvedStreamingPayments()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNumStreamingPayments` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getNumStreamingPayments()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStreamingPayment` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getStreamingPayment(uint256)` | (`_id`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `identifier()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `install` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `install(address)` | (`_colony`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `multicall(bytes[])` | (`data`: `BytesLike`[], `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `owner()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setAuthority(address)` | (`authority_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setEndTime` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_endTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setEndTime(uint256,uint256,uint256,uint256)` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_endTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setOwner(address)` | (`owner_`: `string`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setStartTime` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_startTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setStartTime(uint256,uint256,uint256,uint256)` | (`_adminPermissionDomainId`: `BigNumberish`, `_adminChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_startTime`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setTokenAmount` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_interval`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)` | (`_fundingPermissionDomainId`: `BigNumberish`, `_fundingChildSkillIndex`: `BigNumberish`, `_permissionDomainId`: `BigNumberish`, `_childSkillIndex`: `BigNumberish`, `_fromChildSkillIndex`: `BigNumberish`, `_toChildSkillIndex`: `BigNumberish`, `_id`: `BigNumberish`, `_amount`: `BigNumberish`, `_interval`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `uninstall()` | (`overrides?`: `Overrides` & { `from?`: `string`  }) => `Promise`<`PopulatedTransaction`\> |
| `verify` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)` | (`_user`: `string`, `_nonce`: `BigNumberish`, `_chainId`: `BigNumberish`, `_payload`: `BytesLike`, `_sigR`: `BytesLike`, `_sigS`: `BytesLike`, `_sigV`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Inherited from

AugmentedStreamingPayments.populateTransaction

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

AugmentedStreamingPayments.provider

___

### removeListener

• **removeListener**: `OnEvent`<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

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

### streamingPaymentsEvents

• **streamingPaymentsEvents**: `StreamingPaymentsEvents`

The streamingPaymentsEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

AugmentedStreamingPayments.streamingPaymentsEvents

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

### attach

▸ **attach**(`addressOrName`): [`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)

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

### authority()

▸ **authority()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.authority()

___

### cancel

▸ **cancel**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_adminPermissionDomainId` | `BigNumberish` |
| `_adminChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.cancel

___

### cancel(uint256,uint256,uint256)

▸ **cancel(uint256,uint256,uint256)**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_adminPermissionDomainId` | `BigNumberish` |
| `_adminChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.cancel(uint256,uint256,uint256)

___

### cancelAndWaive

▸ **cancelAndWaive**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.cancelAndWaive

___

### cancelAndWaive(uint256)

▸ **cancelAndWaive(uint256)**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.cancelAndWaive(uint256)

___

### cancelWithProofs

▸ **cancelWithProofs**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [cancel](StreamingPaymentsClientV6.md#cancel), but let colonyJS figure out the permission proofs for you.
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

▸ **claim**(`_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_fromChildSkillIndex` | `BigNumberish` |
| `_toChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.claim

___

### claim(uint256,uint256,uint256,uint256,uint256)

▸ **claim(uint256,uint256,uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_fromChildSkillIndex` | `BigNumberish` |
| `_toChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.claim(uint256,uint256,uint256,uint256,uint256)

___

### claimWithProofs

▸ **claimWithProofs**(`_id`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [claim](StreamingPaymentsClientV6.md#claim), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | The id of the streaming payment |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.claimWithProofs

___

### connect

▸ **connect**(`signerOrProvider`): [`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)

#### Inherited from

AugmentedStreamingPayments.connect

___

### create

▸ **create**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_adminPermissionDomainId`, `_adminChildSkillIndex`, `_domainId`, `_startTime`, `_endTime`, `_interval`, `_recipient`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fundingPermissionDomainId` | `BigNumberish` |
| `_fundingChildSkillIndex` | `BigNumberish` |
| `_adminPermissionDomainId` | `BigNumberish` |
| `_adminChildSkillIndex` | `BigNumberish` |
| `_domainId` | `BigNumberish` |
| `_startTime` | `BigNumberish` |
| `_endTime` | `BigNumberish` |
| `_interval` | `BigNumberish` |
| `_recipient` | `string` |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.create

___

### create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)

▸ **create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_adminPermissionDomainId`, `_adminChildSkillIndex`, `_domainId`, `_startTime`, `_endTime`, `_interval`, `_recipient`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fundingPermissionDomainId` | `BigNumberish` |
| `_fundingChildSkillIndex` | `BigNumberish` |
| `_adminPermissionDomainId` | `BigNumberish` |
| `_adminChildSkillIndex` | `BigNumberish` |
| `_domainId` | `BigNumberish` |
| `_startTime` | `BigNumberish` |
| `_endTime` | `BigNumberish` |
| `_interval` | `BigNumberish` |
| `_recipient` | `string` |
| `_token` | `string` |
| `_amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.create(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256)

___

### createWithProofs

▸ **createWithProofs**(`_domainId`, `_startTime`, `_endTime`, `_interval`, `_recipient`, `_token`, `_amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [create](StreamingPaymentsClientV6.md#create), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_domainId` | `BigNumberish` | The domain out of which the streaming payment will be paid |
| `_startTime` | `BigNumberish` | The time at which the payment begins paying out |
| `_endTime` | `BigNumberish` | The time at which the payment ends paying out |
| `_interval` | `BigNumberish` | The period of time over which _amounts are paid out |
| `_recipient` | `string` | The recipient of the streaming payment |
| `_token` | `string` | - |
| `_amount` | `BigNumberish` | - |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.createWithProofs

___

### deployed

▸ **deployed**(): `Promise`<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Returns

`Promise`<[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)\>

#### Inherited from

AugmentedStreamingPayments.deployed

___

### deprecate

▸ **deprecate**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.deprecate

___

### deprecate(bool)

▸ **deprecate(bool)**(`_deprecated`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_deprecated` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.deprecate(bool)

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.executeMetaTransaction

___

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

▸ **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`_user`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.finishUpgrade

___

### finishUpgrade()

▸ **finishUpgrade()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.finishUpgrade()

___

### getAmountClaimableLifetime

▸ **getAmountClaimableLifetime**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getAmountClaimableLifetime

___

### getAmountClaimableLifetime(uint256)

▸ **getAmountClaimableLifetime(uint256)**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getAmountClaimableLifetime(uint256)

___

### getAmountEntitledFromStart

▸ **getAmountEntitledFromStart**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getAmountEntitledFromStart

___

### getAmountEntitledFromStart(uint256)

▸ **getAmountEntitledFromStart(uint256)**(`_id`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getAmountEntitledFromStart(uint256)

___

### getCapabilityRoles

▸ **getCapabilityRoles**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.getCapabilityRoles

___

### getCapabilityRoles(bytes4)

▸ **getCapabilityRoles(bytes4)**(`_sig`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sig` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.getCapabilityRoles(bytes4)

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

### getColony()

▸ **getColony()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.getColony()

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

### getDeprecated()

▸ **getDeprecated()**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedStreamingPayments.getDeprecated()

___

### getMetatransactionNonce

▸ **getMetatransactionNonce**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getMetatransactionNonce

___

### getMetatransactionNonce(address)

▸ **getMetatransactionNonce(address)**(`_user`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getMetatransactionNonce(address)

___

### getNUnresolvedStreamingPayments

▸ **getNUnresolvedStreamingPayments**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getNUnresolvedStreamingPayments

___

### getNUnresolvedStreamingPayments()

▸ **getNUnresolvedStreamingPayments()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getNUnresolvedStreamingPayments()

___

### getNumStreamingPayments

▸ **getNumStreamingPayments**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getNumStreamingPayments

___

### getNumStreamingPayments()

▸ **getNumStreamingPayments()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.getNumStreamingPayments()

___

### getStreamingPayment

▸ **getStreamingPayment**(`_id`, `overrides?`): `Promise`<`StreamingPaymentStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`StreamingPaymentStructOutput`\>

#### Inherited from

AugmentedStreamingPayments.getStreamingPayment

___

### getStreamingPayment(uint256)

▸ **getStreamingPayment(uint256)**(`_id`, `overrides?`): `Promise`<`StreamingPaymentStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`StreamingPaymentStructOutput`\>

#### Inherited from

AugmentedStreamingPayments.getStreamingPayment(uint256)

___

### identifier

▸ **identifier**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.identifier

___

### identifier()

▸ **identifier()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.identifier()

___

### install

▸ **install**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colony` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.install

___

### install(address)

▸ **install(address)**(`_colony`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_colony` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.install(address)

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
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

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

### multicall

▸ **multicall**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.multicall

___

### multicall(bytes[])

▸ **multicall(bytes[])**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike`[] |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.multicall(bytes[])

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

### owner()

▸ **owner()**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Inherited from

AugmentedStreamingPayments.owner()

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)

#### Inherited from

AugmentedStreamingPayments.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`StreamingPaymentsClientV6`](StreamingPaymentsClientV6.md)

#### Inherited from

AugmentedStreamingPayments.removeAllListeners

___

### setAuthority

▸ **setAuthority**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setAuthority

___

### setAuthority(address)

▸ **setAuthority(address)**(`authority_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `authority_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setAuthority(address)

___

### setEndTime

▸ **setEndTime**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_endTime`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_adminPermissionDomainId` | `BigNumberish` |
| `_adminChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `_endTime` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setEndTime

___

### setEndTime(uint256,uint256,uint256,uint256)

▸ **setEndTime(uint256,uint256,uint256,uint256)**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_endTime`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_adminPermissionDomainId` | `BigNumberish` |
| `_adminChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `_endTime` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setEndTime(uint256,uint256,uint256,uint256)

___

### setEndTimeWithProofs

▸ **setEndTimeWithProofs**(`_id`, `_endTime`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setEndTime](StreamingPaymentsClientV6.md#setendtime), but let colonyJS figure out the permission proofs for you.
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
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setOwner

___

### setOwner(address)

▸ **setOwner(address)**(`owner_`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner_` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setOwner(address)

___

### setStartTime

▸ **setStartTime**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_startTime`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_adminPermissionDomainId` | `BigNumberish` |
| `_adminChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `_startTime` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setStartTime

___

### setStartTime(uint256,uint256,uint256,uint256)

▸ **setStartTime(uint256,uint256,uint256,uint256)**(`_adminPermissionDomainId`, `_adminChildSkillIndex`, `_id`, `_startTime`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_adminPermissionDomainId` | `BigNumberish` |
| `_adminChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `_startTime` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setStartTime(uint256,uint256,uint256,uint256)

___

### setStartTimeWithProofs

▸ **setStartTimeWithProofs**(`_id`, `_startTime`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setStartTime](StreamingPaymentsClientV6.md#setstarttime), but let colonyJS figure out the permission proofs for you.
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

▸ **setTokenAmount**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `_amount`, `_interval`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fundingPermissionDomainId` | `BigNumberish` |
| `_fundingChildSkillIndex` | `BigNumberish` |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_fromChildSkillIndex` | `BigNumberish` |
| `_toChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_interval` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setTokenAmount

___

### setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)

▸ **setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)**(`_fundingPermissionDomainId`, `_fundingChildSkillIndex`, `_permissionDomainId`, `_childSkillIndex`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_id`, `_amount`, `_interval`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fundingPermissionDomainId` | `BigNumberish` |
| `_fundingChildSkillIndex` | `BigNumberish` |
| `_permissionDomainId` | `BigNumberish` |
| `_childSkillIndex` | `BigNumberish` |
| `_fromChildSkillIndex` | `BigNumberish` |
| `_toChildSkillIndex` | `BigNumberish` |
| `_id` | `BigNumberish` |
| `_amount` | `BigNumberish` |
| `_interval` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setTokenAmount(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)

___

### setTokenAmountWithProofs

▸ **setTokenAmountWithProofs**(`_id`, `_amount`, `_interval`, `overrides?`): `Promise`<`ContractTransaction`\>

Same as [setTokenAmount](StreamingPaymentsClientV6.md#settokenamount), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `BigNumberish` | The id of the streaming payment |
| `_amount` | `BigNumberish` | The new amount to pay out |
| `_interval` | `BigNumberish` | - |
| `overrides?` | [`TxOverrides`](../README.md#txoverrides) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.setTokenAmountWithProofs

___

### uninstall

▸ **uninstall**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.uninstall

___

### uninstall()

▸ **uninstall()**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string`  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Inherited from

AugmentedStreamingPayments.uninstall()

___

### verify

▸ **verify**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_nonce` | `BigNumberish` |
| `_chainId` | `BigNumberish` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedStreamingPayments.verify

___

### verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

▸ **verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)**(`_user`, `_nonce`, `_chainId`, `_payload`, `_sigR`, `_sigS`, `_sigV`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_user` | `string` |
| `_nonce` | `BigNumberish` |
| `_chainId` | `BigNumberish` |
| `_payload` | `BytesLike` |
| `_sigR` | `BytesLike` |
| `_sigS` | `BytesLike` |
| `_sigV` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AugmentedStreamingPayments.verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.version

___

### version()

▸ **version()**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

AugmentedStreamingPayments.version()
