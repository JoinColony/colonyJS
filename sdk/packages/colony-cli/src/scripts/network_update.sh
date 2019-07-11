#!/bin/bash

# Log
log() {
  CYAN='\033[0;36m'
  NONE='\033[0m'
  echo "${CYAN}$1${NONE}"
}

# Remove build directory
log "Removing build directory..."
rm -rf build

# Check out specific version
log "Checking out specific version..."
git -c advice.detachedHead=false checkout $1

# Update colonyNetwork dependencies
log "Updating colonyNetwork dependencies..."
yarn
