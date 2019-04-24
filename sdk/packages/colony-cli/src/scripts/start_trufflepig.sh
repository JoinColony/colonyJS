#!/bin/bash

# Start Trufflepig using the accounts defined in the colonyNetwork submodule
./node_modules/.bin/trufflepig \
  --contractDir $1/build/contracts \
  --ganacheKeyFile $1/ganache-accounts.json
