#!/bin/bash

# Paths
ROOT_PATH=$(pwd)

# Log
log() {
  GREEN='\033[0;32m'
  NONE='\033[0m'
  BOLD='\033[1m'
  echo "${GREEN}${BOLD}$1${NONE}"
}

# Update / re-pull submodules
log "Initialize submodule libs"
git submodule update --init --recursive

# Build network
log "Building colonyNetwork submodule"
cd "lib/colonyNetwork"
git submodule update --init
yarn
cd ${ROOT_PATH}
