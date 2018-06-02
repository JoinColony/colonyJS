#!/usr/bin/env bash

. ./scripts/config.sh

log "Compiling contracts"
cd "${NETWORK_PATH}"
./node_modules/.bin/truffle migrate --compile-all --reset
