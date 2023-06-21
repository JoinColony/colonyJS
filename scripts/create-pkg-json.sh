#!/bin/bash

cat >"$PWD/dist/cjs/package.json" <<!EOF
{
    "name": "colony-typescript-for-build-only",
    "type": "commonjs"
}
!EOF

cat >"$PWD/dist/esm/package.json" <<!EOF
{
    "name": "colony-typescript-for-build-only",
    "type": "module"
}
!EOF
