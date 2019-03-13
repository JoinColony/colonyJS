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
const handleError = (error) => {
  console.error(error);
  console.log();
  console.log(chalk.red('  Exiting with error...'));
  console.log();
  process.exit(1);
};

// Handle cancel and exceptions
process.on('SIGINT', handleExit);
process.on('uncaughtException', handleError);

// Define root and starter script path
const rootPath = path.join(__dirname, '..');
const scriptPath = path.join(
  rootPath,
  'packages',
  'colony-starter',
  'index.js',
);

// Set starter script action
const scriptAction = process.argv[2];

// Set starter script arguments
const scriptArguments = process.argv.slice(2).join(' ');

// Check starter script action
if (scriptAction === 'build') {

  console.log();
  console.log('  Starting local build...');
  console.log();

  // Set package name
  const packageName = process.argv[3];

  // Format package name
  const formattedName = packageName.includes('colony-starter-')
    ? packageName
    : `colony-starter-${packageName}`;

  // Define build and package paths
  const buildPath = path.join(rootPath, 'build');
  const packagesPath = path.join(rootPath, 'packages');
  const packagePath = path.join(packagesPath, formattedName);
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
    },
  );

} else {

  // Execute starter script
  cp.execSync(
    `node ${scriptPath} ${scriptArguments}`,
    { stdio: 'inherit' },
  );

}

// Exit script
handleExit();
