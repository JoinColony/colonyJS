#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const cp = require('child_process');

// Exit without error
const handleExit = () => {
  console.log('Exiting without error.');
  process.exit();
};

// Exit with error
const handleError = e => {
  console.error(e);
  console.log('Exiting with error.');
  process.exit(1);
};

// Handle cancel and exceptions
process.on('SIGINT', handleExit);
process.on('uncaughtException', handleError);

// Check to make sure the git status is empty
if (cp.execSync(`git status --porcelain`).toString().trim() !== '') {
  console.log('Please commit your changes before running this script!');
  process.exit(1);
}

// Get package name
const packageName = process.argv[2];

// Define package path and json file
const rootDir = path.join(__dirname, '..');
const packsDir = path.join(rootDir, 'packs');
const packagesDir = path.join(rootDir, 'packages');
const packageDir = path.join(packagesDir, packageName);
const packageJson = path.join(packageDir, 'package.json');

// Check if the package exists
if (!fs.existsSync(packageJson)) {
  console.log('Unable to locate package!');
  process.exit(1);
}

// Pack starter package
const starterFileName = cp
  .execSync(`npm pack`, { cwd: path.join(packagesDir, packageName) })
  .toString()
  .trim();

// Define packed starter path
const starterPath = path.join(packagesDir, packageName, starterFileName);

// Clean yarn global cache
cp.execSync('yarn cache clean');

// Define starter command path
const starterScriptPath = path.join(packagesDir, 'colony-starter', 'index.js');

// Execute starter command
cp.execSync(
  `node ${starterScriptPath} --source ${starterPath} ${packageName}`,
  {
    cwd: rootDir,
    stdio: 'inherit',
  }
);

// Delete pack file
fs.unlink(starterPath);

// Exit script
handleExit();
