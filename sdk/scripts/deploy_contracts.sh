#!/bin/bash

# Move to colonyNetwork directory
cd modules/colonyNetwork

# Compile and deploy colonyNetwork contracts
./node_modules/.bin/truffle migrate --compile-all --reset
