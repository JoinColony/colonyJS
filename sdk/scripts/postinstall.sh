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
cd modules/colonyNetwork

# Install colonyNetwork dependencies
log "Installing colonyNetwork dependencies..."
yarn
