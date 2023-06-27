#!/bin/bash

cat >"$PWD/dist/cjs/package.json" <<!EOF
{
    "name": "colony-typescript-for-build-only",
    "private": true,
    "version": "0.0.0",
    "type": "commonjs"
}
!EOF

cat >"$PWD/dist/esm/package.json" <<!EOF
{
    "name": "colony-typescript-for-build-only",
    "private": true,
    "version": "0.0.0",
    "type": "module"
}
!EOF
