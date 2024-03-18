#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cp "$SCRIPT_DIR/../packages/__templates/package.json" "$PWD/dist/cjs/package.json"
if [[ $(uname) == "Darwin" ]]; then
  sed -i '' 's/{{MODULE_TYPE}}/commonjs/g' "$PWD/dist/cjs/package.json"
else
  sed -i 's/{{MODULE_TYPE}}/commonjs/g' "$PWD/dist/cjs/package.json"
fi

cp "$SCRIPT_DIR/../packages/__templates/package.json" "$PWD/dist/esm/package.json"
if [[ $(uname) == "Darwin" ]]; then
  sed -i '' 's/{{MODULE_TYPE}}/module/g' "$PWD/dist/esm/package.json"
else
  sed -i 's/{{MODULE_TYPE}}/module/g' "$PWD/dist/esm/package.json"
fi
