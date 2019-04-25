---
title: Using IPFS
section: Topics
order: 10
---

A natural way to use the `specificationHash` and `deliverableHash` properties within a task is to point to a file hosted on IPFS. This leaves open the format for the task specification (the description of the work to be done) and the task deliverable (the work done) and provides the opportunity to use text files, PDFs, or other forms of media.

==TOC==

## Installation

Install the [ipfs](https://github.com/ipfs/ipfs) package with the following command:

```
yarn add ipfs
```

This will allow you to run a full IPFS node. If you are running an IPFS node in your browser (as opposed to running it in Node), you will need to install the [buffer](https://www.npmjs.com/package/buffer) package separately.

Install the buffer package with the following command:

```
yarn add buffer
```

Import the packages and create a new IPFS instance:

```js

const Buffer = require('buffer');
const IPFS = require('ipfs');

const ipfs = new IPFS();

```



## Storing objects

The IPFS hash is returned after adding the file to IPFS. IPFS requires that files be uploaded as a `Buffer` type, which is a binary representation of the data to host. To create a buffer, the object must first be converted to a JSON string.

```js

// Prepare our data by passing the object as a JSON string to `Buffer`
const data = Buffer.from(JSON.stringify(object));

// Upload our file to IPFS
const files = await ipfs.files.add(data);

// Set the hash after upload
const { hash } = files[0];

```

## Restoring objects

To get the hash, you will need to retrieve the buffer object and the parse the buffer object.

```js

// IPFS will provide a binary representation (buffer) of our spec given the hash from our task
const buffer = await node.files.cat(`/ipfs/${hash}`);

// You likely will want to parse the buffer back into a regular JS object
const contents = JSON.parse(buffer.toString());

```
