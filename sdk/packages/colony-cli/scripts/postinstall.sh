#!/bin/bash

# Log
log() {
  CYAN="\033[0;36m"
  NONE="\033[0m"
  echo "${CYAN}$1${NONE}"
}

# Check colonyNetwork directory
if [ ! -d "lib/colonyNetwork" ]; then

  # Pull docker image
  log "Pulling docker image..."
  docker pull ethereum/solc:0.4.23

  # Create and move to lib directory
  mkdir lib && cd lib

  # Clone colonyNetwork repository
  log "Cloning colonyNetwork repository..."

  # Check CI variable
  if [ -z $CI ]; then
    git clone ssh://git@github.com/JoinColony/colonyNetwork.git
  else
    git clone https://github.com/JoinColony/colonyNetwork
  fi

  # Move to colonyNetwork directory
  cd colonyNetwork

  # Checkout default colonyNetwork version
  log "Checking out colonyNetwork version..."
  git checkout 543423abb133119a4029ac2adcc8cebb16a8c6d9

  # Install colonyNetwork dependencies
  log "Installing colonyNetwork dependencies..."
  yarn

fi
