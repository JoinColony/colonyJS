#!/bin/bash

echo 'Testing packages/colony-starter...'
yarn --cwd packages/colony-starter test

echo 'Testing packages/colony-starter-angular...'
yarn --cwd packages/colony-starter-angular test

echo 'Testing packages/colony-starter-contract...'
yarn --cwd packages/colony-starter-contract test

echo 'Testing packages/colony-starter-react...'
yarn --cwd packages/colony-starter-react test

echo 'Testing packages/colony-example...'
yarn --cwd packages/colony-example test

echo 'Testing packages/colony-example-angular...'
yarn --cwd packages/colony-example-angular test

echo 'Testing packages/colony-example-react...'
yarn --cwd packages/colony-example-react test
