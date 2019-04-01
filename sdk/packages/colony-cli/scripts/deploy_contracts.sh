#!/bin/bash

# Log
log() {
  CYAN='\033[0;36m'
  NONE='\033[0m'
  echo "${CYAN}$1${NONE}"
}

# Check for specified version
if [ $1 ]; then

  # Set colonyNework to specified version
  log "Checking out colonyNetwork version..."
  git -c advice.detachedHead=false checkout $1

else

  # Set colonyNework to default version
  log "Checking out colonyNetwork version..."
  git -c advice.detachedHead=false checkout 543423abb133119a4029ac2adcc8cebb16a8c6d9

fi

# Install colonyNetwork dependencies
log "Installing colonyNetwork dependencies..."
yarn

# Update colonyNetwork submodules
log "Updating colonyNetwork submodules..."
git submodule update --init --recursive

# Provision colonyNetwork submodules
log "Provisioning colonyNetwork contracts..."
yarn run provision:token:contracts

# Migrate colonyNetwork contracts
log "Migrating colonyNetwork contracts..."
./node_modules/truffle/build/cli.bundled.js migrate --reset
