#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cp "$SCRIPT_DIR/../packages/__templates/package.json" "$PWD/dist/cjs/package.json"
sed -i 's/{{MODULE_TYPE}}/commonjs/g' "$PWD/dist/cjs/package.json"

cp "$SCRIPT_DIR/../packages/__templates/package.json" "$PWD/dist/esm/package.json"
sed -i 's/{{MODULE_TYPE}}/module/g' "$PWD/dist/esm/package.json"
