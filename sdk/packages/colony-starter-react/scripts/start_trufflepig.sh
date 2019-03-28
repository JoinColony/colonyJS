#!/bin/bash

# Start Trufflepig using the accounts defined in the colonyNetwork submodule
./node_modules/.bin/trufflepig \
  --contractDir ./lib/colonyNetwork/build/contracts \
  --ganacheKeyFile ./lib/colonyNetwork/ganache-accounts.json
