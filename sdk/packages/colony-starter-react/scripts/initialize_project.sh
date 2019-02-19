#!/bin/bash

# Paths
ROOT_PATH=$(pwd)

# Log
log() {
  CYAN='\033[0;36m'
  NONE='\033[0m'
  echo "\n  ${CYAN}[colony-starter-react]${NONE} $1\n"
}

# Initialize git repository
log "Initializing git repository..."
git init

# Add gitignore file
log "Adding gitignore file..."
echo "node_modules" >> .gitignore
echo "node_modules"

# Pull docker image
log "Pulling docker image..."
docker pull ethereum/solc:0.4.23

# Add colonyNetwork submodule
log "Adding colonyNetwork submodule..."
git submodule add https://github.com/JoinColony/colonyNetwork lib/colonyNetwork

# Move to colonyNetwork directory
cd lib/colonyNetwork

# Set colonyNework version
log "Checking out colonyNetwork version..."
git -c advice.detachedHead=false checkout 9bba127b0286708d4f8919526a943b0e916cfd7c

# Install colonyNetwork dependencies
log "Installing colonyNetwork dependencies..."
yarn

# Initialize colonyNetwork submodules
log "Initializing colonyNetwork submodules..."
git submodule update --init --recursive

# Provision colonyNetwork submodules
log "Provisioning colonyNetwork submodules..."
yarn run provision:token:contracts
