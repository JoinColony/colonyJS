#!/bin/bash

# Move to colonyNetwork directory
cd src/lib/colonyNetwork

# Compile and deploy colonyNetwork contracts
./node_modules/.bin/truffle migrate --compile-all --reset
