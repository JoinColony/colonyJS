#!/bin/bash

# Paths
ROOT_PATH=$(pwd)

# Log
log() {
  CYAN='\033[0;36m'
  NONE='\033[0m'
  echo "${CYAN}$1${NONE}"
}

# Move to colonyNetwork directory
cd lib/colonyNetwork

# If version specified
if [ $1 ]; then

  # Set colonyNework version
  log "Checking out colonyNetwork version..."
  git -c advice.detachedHead=false checkout $1

else

  # Set colonyNework version
  log "Checking out colonyNetwork version..."
  git -c advice.detachedHead=false checkout temp/eth-denver

fi

# Install colonyNetwork dependencies
log "Installing colonyNetwork dependencies..."
yarn

# Initialize colonyNetwork submodules
log "Initializing colonyNetwork submodules..."
git submodule update --init --recursive

# Provision colonyNetwork submodules
log "Provisioning colonyNetwork submodules..."
yarn run provision:token:contracts

# Compile and deploy colonyNetwork contracts
./node_modules/.bin/truffle migrate --compile-all --reset
