#!/bin/bash

# Paths
ROOT_PATH=$(pwd)

# Log
log() {
  CYAN='\033[0;36m'
  NONE='\033[0m'
  echo "${CYAN}$1${NONE}"
}

# Pull docker image
log "Pulling docker image..."
docker pull ethereum/solc:0.4.23

# Initialize colonyNetwork submodule
log "Initializing colonyNetwork submodule..."
git submodule update --init --recursive

# Move to colonyNetwork directory
cd lib/colonyNetwork

# Set colonyNework version
log "Checking out colonyNetwork version..."
git -c advice.detachedHead=false checkout f73dc84a41f5fc1962c999a24e13b15ba491b8a6

# Install colonyNetwork dependencies
log "Installing colonyNetwork dependencies..."
yarn

# Initialize colonyNetwork submodules
log "Initializing colonyNetwork submodules..."
git submodule update --init --recursive

# Provision colonyNetwork submodules
log "Provisioning colonyNetwork submodules..."
yarn run provision:token:contracts
