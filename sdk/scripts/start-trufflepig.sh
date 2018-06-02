#!/usr/bin/env bash

. ./scripts/config.sh

log "Starting Trufflepig"
cd "${NETwORK_PATH}"
trufflepig --ganacheKeyFile ganache-accounts.json . -v
