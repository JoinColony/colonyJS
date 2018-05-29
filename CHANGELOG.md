# Changelog

## v.NEXT

**Bug fixes**

* Fixed the documentation site link in the `README`
* Fixed a bug where string input values were not converted properly (`@colony/colony-js-contract-client`)

## v1.1.0

**Documentation**

* General documentation updates
* Added automatic documentation generation for `@colony/colony-js-client` (`yarn build:docs`, also runs on precommit hook)

**New features**

* Added method `ColonyNetworkClient.getMetaColonyClient`
* Added Caller `ColonyClient.getDomain`
* Added `bignumber` parameter type for contract methods
* Added `role` parameter type for contract methods
* Added declarative parameter type mapping for contract methods, and `addParamType` method

**Enhancements**

* Better handling for empty values from contracts; e.g. addresses reported as '0x000...0' are cleaned as `null`
* Failed validation reasons are now added to error messages
* Updated `ColonyNetworkClient`/`ColonyClient` to match `colonyNetwork`
* Upon starting or restoring a `MultisigOperation`, the operation is refreshed to get the latest values
* Removed separate error/success contract event handling

**Bug fixes**

* Fixed a bug where the isBigNumber utility function didn't look for the correct property in ethers-ified BigNumbers
* Add `babel-runtime dependency`


## v1.0.0

*Released Tue, 22 May 2018 17:19:06 GMT*

* First release.
