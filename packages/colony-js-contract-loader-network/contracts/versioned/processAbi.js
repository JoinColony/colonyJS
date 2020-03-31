#!/usr/bin/env node

const fs = require('fs');
const path = require("path");

const attributes = [
  "contractName",
  "abi",
  "bytecode",
  "compiler",
  "schemaVersion",
  "updatedAt"
]

process.argv.slice(2).forEach(abiPath => {
  const abiFullPath = path.resolve(__dirname, abiPath);
  const abi = JSON.parse(fs.readFileSync(abiFullPath).toString());

  const newAbi = {}

  attributes.forEach(attribute => {
    newAbi[attribute] = abi[attribute];
  })

  fs.writeFileSync(abiFullPath, JSON.stringify(newAbi, null, 2));
});

