#!/bin/bash

# TODO The ganache-cli version in colonyNetwork is breaking on gas estimation.
# We need to switch the ganache-cli used in this script back to the version in
# colonyNetwork when colonyNetwork is using a version with an appropriate fix.
# --ganacheKeyFile $1/ganache-accounts.json

# Start Trufflepig using the accounts defined in the colonyNetwork submodule
./node_modules/.bin/trufflepig \
  --contractDir $1/build/contracts \
  --ganacheKeyFile ganache-accounts.json
