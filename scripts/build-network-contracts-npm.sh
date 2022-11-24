#!/bin/bash

# needs pyenv and fnm and probably a global npx fallback for old node versions

set -e
DIR=$(pwd)

cd ./vendor/colonyNetwork
git reset --hard
git clean -df
cd ./lib/colonyToken
git reset --hard
git clean -df
cd ../..
git checkout "${1}"
git submodule update --recursive
cd ./lib/colonyToken
fnm use
rm -rf build/contracts/*.json
git reset --hard
npm install
# yarn --frozen-lockfile
npx truffle compile
# yarn truffle compile
cd ../..
rm -rf build/contracts/*.json
fnm use
npm ci
# yarn --frozen-lockfile
npx truffle compile

# run abi extraction
cd $DIR
npm run extract-contract-abis -- -t="${1}"
