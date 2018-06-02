#!/usr/bin/env bash

. ./scripts/config.sh

log "Initialize submodule libs"
git submodule update --init --recursive

log "Building 'colonyNetwork' submodule"
cd "${NETWORK_PATH}"
yarn
cd "${ROOT_PATH}"
