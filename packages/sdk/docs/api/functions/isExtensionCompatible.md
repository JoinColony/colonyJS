[**API**](../README.md)

***

# Function: isExtensionCompatible()

> **isExtensionCompatible**(`extension`, `extensionVersion`, `colonyVersion`): `boolean`

Checks the compatibility of an extension version with a colony version it requests to be installed in
Returns `true` if an extension version is compatible with the given colony version

## Parameters

### extension

[`Extension`](../enumerations/Extension.md)

A valid `Extension` contract name

### extensionVersion

`ExtensionVersion`

The version of the extension to check against the colony

### colonyVersion

The version of the colony to check for

`1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12` | `13` | `14` | `15` | `16` | `17`

## Returns

`boolean`

indication whether extension in given version is compatible with colony at the given version
