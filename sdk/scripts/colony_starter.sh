#!/bin/bash

YARN_GLOBAL="$(yarn global dir)"

mkdir $1

cp -R "${YARN_GLOBAL}/node_modules/@colony/colony-starter/packages/$1/" "$1"
