#!/bin/bash

# Log
log() {
  CYAN='\033[0;36m'
  NONE='\033[0m'
  echo "${CYAN}$1${NONE}"
}

log "Cloning colonyNetwork..."

# Check CI variable
if [ $CI ]; then

  # Clone colonyNetwork repository using ssh
  git clone ssh://git@github.com/JoinColony/colonyNetwork.git

else

  # Clone colonyNetwork repository using https
  git clone https://github.com/JoinColony/colonyNetwork

fi

# Move to colonyNetwork directory
cd colonyNetwork

# Check for specific version
if [ $1 ]; then

  # Set colonyNework to specific version
  log "Checking out specific version..."
  git -c advice.detachedHead=false checkout $1

else

  # Set colonyNework to default version
  log "Checking out default version..."
  git -c advice.detachedHead=false checkout 543423abb133119a4029ac2adcc8cebb16a8c6d9

fi

# Install colonyNetwork dependencies
log "Installing colonyNetwork dependencies..."
yarn
