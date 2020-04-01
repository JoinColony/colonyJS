#!/usr/bin/env node

const fs = require('fs');
const path = require("path");

const attributes = [
  "contractName",
  "abi",
  "compiler",
  "schemaVersion",
  "updatedAt"
]

const bytecodeFiles = [
  "EtherRouter",
  "OneTxPayment",
  "OneTxPaymentFactory",
  "Token",
  "TokenAuthority"
]

const networksFiles = [
  "EtherRouter",
  "OneTxPaymentFactory",
]

process.argv.slice(2).forEach(abiPath => {
  const abiFullPath = path.resolve(__dirname, abiPath);
  const abi = JSON.parse(fs.readFileSync(abiFullPath).toString());

  const newAbi = {}

  attributes.forEach(attribute => {
    newAbi[attribute] = abi[attribute];
  })

  bytecodeFiles.forEach(bytecodeFile => {
    if (abiFullPath.indexOf(bytecodeFile) > 0) {
      newAbi["bytecode"] = abi["bytecode"];
    }
  })

  networksFiles.forEach(networkFile => {
    if (abiFullPath.indexOf(networkFile) > 0) {
      newAbi["networks"] = "REPLACE ME";
    }
  })

  fs.writeFileSync(abiFullPath, JSON.stringify(newAbi, null, 2));
});

