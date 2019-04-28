#!/usr/bin/env node

// Import prerequisites
const chalk = require('chalk');
const cp = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// Define root and starter script path
const rootPath = path.join(__dirname, '..');
const cliPath = path.join(rootPath, 'packages', 'colony-cli');
const scriptPath = path.join(cliPath, 'src', 'index.js');

// Set starter script action
const scriptAction = process.argv[2];

// Set starter script arguments
const scriptArguments = process.argv.slice(2).join(' ');

// Check starter script action
if (scriptAction === 'build') {

  // Log step
  console.log(chalk.cyan('Starting local build...'));

  // Set package name
  const packageName = process.argv[3];

  // Define build and package paths
  const buildPath = path.join(rootPath, 'build');
  const packagesPath = path.join(rootPath, 'packages');
  const packagePath = path.join(packagesPath, packageName);
  const packageJSON = path.join(packagePath, 'package.json');

  // Check if package exists
  if (!fs.existsSync(packageJSON)) {

    // Log error
    console.log();
    console.log(chalk.red('ERROR: Unable to locate the requested package!'));
    console.log();

    // Exit on error
    process.exit(1);

  }

  // Ensure build path exists
  fs.ensureDirSync(buildPath);

  // Pack package
  const packName = cp
    .execSync(`npm pack`, { cwd: packagePath })
    .toString()
    .trim();

  // Pack path
  const packPath = path.join(buildPath, packName);

  // Move pack to build directory
  fs.rename(
    path.join(packagePath, packName),
    packPath,
  );

  // Execute build action
  cp.execSync(
    `node ${scriptPath} ${scriptArguments} --specific ${packPath}`,
    {
      cwd: buildPath,
      stdio: 'inherit',
    },
  );

} else if (scriptAction === 'service') {

  // Execute other actions
  cp.execSync(
    `node ${scriptPath} ${scriptArguments}`,
    {
      stdio: 'inherit',
    },
  );

} else {

  // Log error
  console.log();
  console.log(chalk.red('ERROR: The action you provided does not exist!'));
  console.log();

  // Exit on error
  process.exit(1);

}
