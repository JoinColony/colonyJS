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

// Check to make sure there are no uncommitted changes
if (cp.execSync(`git status --porcelain`).toString().trim() !== '') {
  console.log('Please commit your changes before running this script!');
  process.exit(1);
}

// Get package name from argument
const packageName = process.argv[2];

// Define package path and json file
const rootDir = path.join(__dirname, '..');
const packsDir = path.join(rootDir, 'packs');
const buildsDir = path.join(rootDir, 'builds');
const packagesDir = path.join(rootDir, 'packages');
const packageDir = path.join(packagesDir, packageName);
const packageJson = path.join(packageDir, 'package.json');

// Check if the package exists
if (!fs.existsSync(packageJson)) {
  console.log('Unable to locate package!');
  process.exit(1);
}

// Ensure packs directory exists
fs.ensureDirSync(packsDir);

// Pack package
const packName = cp
  .execSync(`npm pack`, { cwd: packageDir })
  .toString()
  .trim();

// Define path to pack file
const packPath = path.join(packsDir, packName);

// Move packed starter file to packs directory
fs.rename(path.join(packageDir, packName), packPath);

// Define starter command path
const starterScriptPath = path.join(packagesDir, 'colony-starter', 'index.js');

// Ensure builds directory exists
fs.ensureDirSync(buildsDir);

// Execute starter command
cp.execSync(
  `node ${starterScriptPath} --specific ${packPath} ${packageName}`,
  {
    cwd: buildsDir,
    stdio: 'inherit',
  }
);

// Exit script
handleExit();
