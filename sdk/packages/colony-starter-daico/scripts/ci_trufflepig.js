#!/usr/bin/env node

// This file is only for use on Continuous Integration platforms and does not contribute to the example code itself

const path = require('path');
const TrufflePig = require('trufflepig');

const trufflePigOptions = {
  contractDir: path.resolve(__dirname, '..', 'src', 'lib', 'colonyNetwork', 'build', 'contracts'),
  ganacheKeyFile: path.resolve(__dirname, '..', 'src', 'lib', 'colonyNetwork', 'ganache-accounts.json'),
  verbose: true,
};

const trufflePigServer = new TrufflePig(trufflePigOptions);

trufflePigServer.on('ready', rd => console.log('Truffle pig is ready'))
trufflePigServer.on('error', err => console.log(err))
trufflePigServer.on('log', log => console.log(log))

trufflePigServer.start();
