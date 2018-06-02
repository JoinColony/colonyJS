#!/usr/bin/env bash

. ./scripts/config.sh

log "Starting Ganache"
cd "${NETWORK_PATH}"
ganache-cli -d --gasLimit 7000000 --acctKeys ganache-accounts.json
