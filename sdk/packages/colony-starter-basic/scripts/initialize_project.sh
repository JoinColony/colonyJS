#!/bin/bash

# Paths
ROOT_PATH=$(pwd)

# Log
log() {
  CYAN='\033[0;36m'
  NONE='\033[0m'
  echo "\n  ${CYAN}[colony-starter-basic]${NONE} $1\n"
}

# Initialize git repository
log "Initializing git repository..."
git init

# Add gitignore file
log "Adding gitignore file..."
echo "node_modules" >> .gitignore

# Add colonyNetwork submodule
log "Adding colonyNetwork submodule..."
git submodule add https://github.com/JoinColony/colonyNetwork src/lib/colonyNetwork

# Move to colonyNetwork directory
cd src/lib/colonyNetwork

# Set colonyNework version
log "Checking out colonyNetwork version..."
git -c advice.detachedHead=false checkout e82710813605a929e55236879fbb44585d1761ae

# Initialize colonyNetwork submodule
log "Initializing colonyNetwork submodule..."
git submodule update --init --recursive

# Install colonyNetwork dependencies
log "Installing colonyNetwork dependencies..."
yarn
