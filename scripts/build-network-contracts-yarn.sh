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
pyenv local 2.7.18
rm -rf build/contracts/*.json
git reset --hard
npx yarn --frozen-lockfile
npx truffle compile
cd ../..
rm -rf build/contracts/*.json
fnm use
npx yarn --frozen-lockfile
npx truffle compile

# run abi extraction
cd $DIR
npm run extract-contract-abis -- -t="${1}"
