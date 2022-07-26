# Colony Event Metadata Parser

**Metadata format versions**
ColonyDapp should support legacy Metadata formats.
Therefore, when parsing (in ColonyDapp) it is necessary to check the Metadata format version and support V1 & later versions.
```ts
const metadataVersion = getEventMetadataVersion(ipfsMetadata);
if (metadataVersion === 1) {
/*
* original metadata format
*/
...
}
else {
/*
* new metadata format
*/
....
}
```

**Parsing**
To retrieve MetaData from IPFS. (String to Object)

```ts
// Colony MetaData
const colonyMetadata = getColonyMetadataFromResponse(ipfsDataJSON);

// Domain MetaData
const domainMetadata = getDomainMetadataFromResponse(ipfsDataJSON);

// Annotation Message
const annotation = getAnnotationMsgFromResponse(ipfsDataJSON);

/////////
// Get Avatar Image
//
// First get Colony Metadata
const colonyMetadata = getColonyMetadataFromResponse(ipfsMetadata);

// Then get IPFS response from avatarHash
avatarHash = colonyMetadata?.colonyAvatarHash;
response = await ipfs.getString(avatarHash);

// Finally, get the avatar image
avatarObject = { image: getColonyAvatarImage(response) };
/////////


// Generic Misc data
// An Agreement is used as example:
const response = await ipfsWithFallback.getString(agreementHash);
const agreement = getNameValueFromMisc('agreement', response);

```


**Deserialising**
Preparing Metadata to send to IPFS. (Object to String)

```ts
// Colony Metadata packed and converted to string
const metadataForIPFS = getStringForMetadataColony({
	colonyDisplayName,
	colonyAvatarHash: colonyAvatarIpfsHash
	colonyTokens,
	verifiedAddresses,
	isWhitelistActivated,
});
colonyMetadataIpfsHash = yield call(ipfsUpload, metadataForIPFS);

// Domain Metadata packed and converted to string
domainMetadataIpfsHash = yield  call(
	ipfsUpload,
	getStringForMetadataDomain({
		domainName,
		domainColor,
		domainPurpose,
}),

// Annotation message packed and converted to string
ipfsHash = yield call(
	ipfsUpload,
	getStringForMetadataAnnotation({
		annotationMsg:  annotationMessage || '',
	}),
);

// ColonyAvatarImage packed and converted to string
colonyAvatarIpfsHash = yield call(
	ipfsUpload,
	getStringForColonyAvatarImage(colonyAvatarImage),
);

// Pack and convert string to be used in a MiscMetadata
// This example uploads a whitelist agreement to IPFS
let  agreementHash = '';
if (payload.agreement) {
	const  miscMetadata = {
		name:  'agreement',
		value:  payload?.agreement,
	};
	agreementHash = yield  call(
		ipfsUpload,
		getStringForMetadataMisc(miscMetadata),
	);
}

```

## License
GPL-3.0
