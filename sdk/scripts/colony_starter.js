#!/usr/bin/env node

// Import prerequisites
const chalk = require('chalk');
const cp = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// Exit without error
const handleExit = () => {
  console.log(chalk.cyan('  Exiting without error...'));
  console.log();
  process.exit();
};

// Exit with error
const handleError = error => {
  console.error(error);
  console.log();
  console.log(chalk.red('  Exiting with error...'));
  console.log();
  process.exit(1);
};

// Handle cancel and exceptions
process.on('SIGINT', handleExit);
process.on('uncaughtException', handleError);

// Define root and script path
const rootPath = path.join(__dirname, '..');
const scriptPath = path.join(
  rootPath,
  'packages',
  'colony-starter',
  'index.js',
);

// Define starter script arguments
const scriptArguments = process.argv.slice(2).join(' ');

// Check if build action
if (process.argv[2] === 'build') {

  // Log start
  console.log();
  console.log(chalk.cyan('  Preparing local test build...'));
  console.log();

  // Define paths
  const buildPath = path.join(rootPath, 'build');
  const packagesPath = path.join(rootPath, 'packages');
  const packagePath = path.join(packagesPath, process.argv[3]);
  const packageJSON = path.join(packagePath, 'package.json');

  // Check if package exists
  if (!fs.existsSync(packageJSON)) {
    console.log();
    console.log(chalk.red('  Unable to locate the requested package!'));
    console.log();
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

  // Execute starter script
  cp.execSync(
    `node ${scriptPath} ${scriptArguments} --specific ${packPath}`,
    {
      cwd: buildPath,
      stdio: 'inherit',
    }
  );

} else {

  // Execute starter script
  cp.execSync(
    `node ${scriptPath} ${scriptArguments}`,
    {
      stdio: 'inherit',
    }
  );

}

// Exit script
handleExit();
