#!/bin/bash

# Move to colonyNetwork directory
cd src/lib/colonyNetwork

# Start Ganache using the accounts defined in the colonyNetwork directory
ganache-cli -d --gasLimit 7000000 --acctKeys ganache-accounts.json --noVMErrorsOnRPCResponse
