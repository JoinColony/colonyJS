#!/bin/bash

# Move to colonyNetwork directory
cd lib/colonyNetwork

# Start Trufflepig using the accounts defined in the colonyNetwork directory
trufflepig --ganacheKeyFile ganache-accounts.json
