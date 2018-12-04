---
title: Using IPFS
section: Docs
order: 7
---

A natural way to use the `specificationHash` and `deliverableHash` fields within a task is to point to a file hosted on IPFS. With IPFS, the format for the task specification (the description of the work to be done) and the task deliverable (the work done) is left open. The use of IPFS provides the opportunity to use text files, PDFs, or other forms of media.

## IPFS Setup

For development with colonyJS, IPFS must be aded to your project.

Install the package with yarn:

```

yarn add ipfs

```

Then import the package and create an instance:

```js

const IPFS = require('ipfs');
const ipfs = new IPFS();

```

This will run a full IPFS node in Node.js or your browser. Heads up! Running your IPFS node in your browser will require you to install the [`Buffer` package](https://www.npmjs.com/package/buffer) separately (which is included in Node.js by default).

## Alternative IPFS Setup

You can also run a Go node and access it via [js-ipfs-api](https://github.com/ipfs/js-ipfs-api) which should conform to the [IPFS core interface specification](https://github.com/ipfs/interface-ipfs-core).

If you decided to use the Go node approach, this should get you a running installation of `go-ipfs`:

Download `ipfs-update` for your platform [Install IPFS | IPFS Docs](https://ipfs.io/docs/install/#installing-with-ipfs-update):

```

curl -O https://dist.ipfs.io/ipfs-update/v1.5.2/ipfs-update_v1.5.2_darwin-amd64.tar.gz`

```

Unpack and install:

```

tar -xvzf ipfs-update_v1.5.2_darwin-amd64.tar.gz

cd ipfs-update && ./install.sh

```

Get the latest version:

```

ipfs-update install latest

```

Check whether `ipfs` is installed properly:

```

$ ipfs --version

```

## Set Hash

The IPFS hash is returned after adding the file to IPFS.

IPFS requires that files be uploaded as a `Buffer`, which is a binary representation of the data to host.

To create that buffer, the object must first be converted to a JSON string.

```js

// Prepare our data by passing the object as a JSON string to `Buffer`
const data = Buffer.from(JSON.stringify(object));

// Upload our file to IPFS
const files = await ipfs.files.add(data);

// Set the hash after upload
const { hash } = files[0];

```

## Get Hash

Retrieving the hash from IPFS is simple.

```js

// IPFS will provide a binary representation ('buffer') of our spec given the hash from our task
const buffer = await node.files.cat(`/ipfs/${hash}`);

// You likely will want to parse the buffer back into a regular JS object
const contents = JSON.parse(buffer.toString());

```
