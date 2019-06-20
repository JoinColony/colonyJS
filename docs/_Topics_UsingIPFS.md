---
title: Using IPFS
section: Topics
order: 11
---

A natural way to use the `specificationHash` and `deliverableHash` properties within a task is to point to a file hosted on IPFS. This leaves open the format for the task specification (the description of the work to be done) and the task deliverable (the work done) and provides the opportunity to use text files, PDFs, or other forms of media.

## Installation

Install the [ipfs](https://github.com/ipfs/ipfs) package with the following command:

```
yarn add ipfs
```

Import the packages and create a new IPFS instance:

```js

const IPFS = require('ipfs');

const ipfs = new IPFS();

```

## Storing Objects

The IPFS hash is returned after adding the file to IPFS. IPFS requires that files be uploaded as a `Buffer` type, which is a binary representation of the data to host. To create a buffer, the object must first be converted to a JSON string.

```js

// Use Buffer from IPFS
const { Buffer } = IPFS;

// Convert the object to a Buffer type
const data = Buffer.from(JSON.stringify(object));

// Upload the data to IPFS
const files = await ipfs.add(data);

// Get the hash of the uploaded file
const { hash } = files[0];

```

## Restoring Objects

To restore the object, you will need to retrieve and the parse the Buffer object.

```js

// Get the spec from IPFS using the hash
const spec = await ipfs.cat(`/ipfs/${hash}`);

// Parse the returned JSON to get the object
const object = JSON.parse(spec.toString());

```
