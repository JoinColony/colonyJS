# colonyEventMetadataConverter


## Documentation


## Get Started


- To retrieve Colony MetaData from IPFS. (String to Object)
```
  ipfsMetadata = await ipfs.getString(ipfsHash);
  const colonyMetadata = parseEventMetadata(ipfsMetadata || '') as ColonyMetadata;
```

- To retrieve colonyAvatarHash from IPFS. (String to image)
```
  response = await ipfs.getString(colonyMetadata.colonyAvatarHash);
  avatarObject = { image: getColonyAvatarImage(response || '') || null };
```




To send to IPFS. (Object to String)
```
 const annotationMetadata = getMetadataStringForAnnotation({
    annotationMsg: annotationMessage,
  });
  ipfsHash = yield call(ipfsUpload, annotationMetadata);
```



## Contributing

## Development

### Local development

## License

GPL-3.0
