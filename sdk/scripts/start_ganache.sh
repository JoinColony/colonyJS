#!/bin/bash

# Move to colonyNetwork directory
cd modules/colonyNetwork

# Start Ganache using the accounts defined in the colonyNetwork directory
ganache-cli -d --gasLimit 7000000 --acctKeys ganache-accounts.json --noVMErrorsOnRPCResponse
