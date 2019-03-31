#!/bin/bash

# Paths
ROOT_PATH=$(pwd)

# Log
log() {
  CYAN='\033[0;36m'
  NONE='\033[0m'
  echo "${CYAN}$1${NONE}"
}

# Move to colonyNetwork
cd $1

# Check for specified version
if [ $2 ]; then

  # Set colonyNework to specified version
  log "Checking out colonyNetwork version..."
  git -c advice.detachedHead=false checkout $2

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

# Compile and deploy colonyNetwork contracts
log "Compiling and deploying colonyNetwork contracts..."
$ROOT_PATH/node_modules/.bin/truffle migrate --reset
