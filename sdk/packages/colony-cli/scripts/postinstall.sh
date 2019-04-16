#!/bin/bash

# Check colonyNetwork directory
if [ ! -d "lib/colonyNetwork" ]; then

  # Pull docker image
  docker pull ethereum/solc:0.4.23

  # Create and move to lib directory
  mkdir lib && cd lib

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

  # Checkout default colonyNetwork version
  git checkout 543423abb133119a4029ac2adcc8cebb16a8c6d9

  # Install colonyNetwork dependencies
  yarn

fi
