#!/usr/bin/env bash

log() {
  GREEN='\033[0;32m'
  NC='\033[0m'
  BOLD='\033[1m'
  echo -e "${GREEN}${BOLD}$1${NC}"
}

export ROOT_PATH=$(pwd)
export LIB_PATH="src/lib"
export NETWORK_PATH="${LIB_PATH}/colonyNetwork"
