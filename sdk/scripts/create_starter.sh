#!/bin/bash

NPM_PATH="$(npm root -g)"

mkdir $1

cp -R "${NPM_PATH}/@colony/colony-starter/packages/$1/" "$1"
