#!/bin/bash

# Log
log() {
  CYAN='\033[0;36m'
  NONE='\033[0m'
  echo "${CYAN}$1${NONE}"
}

# Pull docker image
log "Pulling docker image..."
docker pull ethereum/solc:0.4.23

if [ ! -d "lib/colonyNetwork" ]; then

  # Ensure lib directory exists
  if [ ! -d "lib" ]; then mkdir lib; fi

  # Move to lib directory
  cd lib

  # Clone colonyNetwork repository
  log "Cloning colonyNetwork repository..."
  git clone https://github.com/JoinColony/colonyNetwork

  # Move to colonyNetwork directory
  cd colonyNetwork

  # Checkout default default version
  log "Checking out colonyNetwork version..."
  git checkout 543423abb133119a4029ac2adcc8cebb16a8c6d9

  # Install colonyNetwork dependencies
  log "Installing colonyNetwork dependencies..."
  yarn

fi
