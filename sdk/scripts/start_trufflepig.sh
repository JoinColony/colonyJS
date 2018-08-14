#!/bin/bash

# Move to colonyNetwork directory
cd modules/colonyNetwork

# Start Trufflepig using the accounts defined in the colonyNetwork directory
trufflepig --ganacheKeyFile ganache-accounts.json
