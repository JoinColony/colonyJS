#!/bin/bash

# Move to colonyNetwork directory
cd src/lib/colonyNetwork

# Start Trufflepig using the accounts defined in the colonyNetwork directory
trufflepig --ganacheKeyFile ganache-accounts.json
