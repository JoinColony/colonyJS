#!/usr/bin/env node

const chalk = require('chalk');
const commander = require('commander');
const fs = require('fs-extra');
const path = require('path');
const cp = require('child_process');
const spawn = require('cross-spawn');
const semver = require('semver');
const dns = require('dns');
const tmp = require('tmp');
const tarPack = require('tar-pack');
const url = require('url');
const os = require('os');

let packageName;

// Define program command
const program = new commander
  .Command('colony-starter')
  .arguments('<starter-package>')
  .action(name => { packageName = name })
  .option('--specific <version-or-source>', 'use a specific version or source')
  .option('--verbose', 'print additional logs')
  .allowUnknownOption()
  .parse(process.argv);

// Create starter project from program command
const createStarter = (name, specific, verbose) => {

  console.log();
  console.log(`  Verifying ${chalk.cyan('yarn')} is installed...`);

  // Make sure yarn is installed
  if (!isYarnInstalled()) {
    console.log();
    console.log(chalk.red('  Yarn must be installed!'));
    console.log();
    process.exit(1);
  }

  console.log();
  console.log(`  Creating ${chalk.cyan(name)} folder...`);

  // Create new directory
  fs.ensureDirSync(name);

  // Define root directory
  const root = path.resolve(name);

  // Make sure root directory is empty
  if (fs.readdirSync(root).length > 0) {
    console.log();
    console.log(chalk.red(`  The ${name} folder must be empty!`));
    console.log();
    process.exit(1);
  }

  // Define origin directory
  const origin = process.cwd();

  // Move to root directory
  process.chdir(root);

  // Determine specific package version or source
  const packageToInstall = getSpecificPackage(specific);

  console.log();
  console.log(`  Preparing to install ${chalk.cyan(packageToInstall)}...`);

  // Get package name from url or path
  prepareInstall(packageToInstall, root)
    .then(packageName =>

      // Check if online and return online status and package name
      checkIfOnline().then(isOnline => ({ isOnline, packageName }))

    ).then(info => {

      const isOnline = info.isOnline;
      const packageName = info.packageName;

      console.log();
      console.log(`  Installing ${chalk.cyan(packageName)}...`);
      console.log();

      // Install the package
      return installPackage(
        root,
        packageToInstall,
        verbose,
        isOnline
      );

    }).then(() => {

      console.log();
      console.log(`  Success! Created ${chalk.cyan(name)} at ${chalk.cyan(root)}`);
      console.log();

    }).catch(reason => {

      console.log();
      console.log(chalk.red('  Aborting installation. Please report an issue.'));
      console.log();

      if (reason.command) {

        console.log();
        console.log(`  ${chalk.cyan(reason.command)} failed.`);
        console.log();

      } else {

        console.log();
        console.log(reason);
        console.log();

      }

      process.exit(1);

    });

}

// Make sure yarn is installed
const isYarnInstalled = () => {
  try {
    cp.execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Format specific package if specific
const getSpecificPackage = (specific) => {
  let specificPackage = packageName;
  const validSemver = semver.valid(specific);
  if (validSemver) {
    specificPackage += `@${validSemver}`;
  } else if (specific) {
    specificPackage = specific;
  }
  return specificPackage;
}

// Get package tarball and/or unpack package tarball
const prepareInstall = (packageToInstall, root) => {

  // Get pacakge tarball if package is not already one
  if (!packageToInstall.match(/^.+\.(tgz|tar\.gz)$/)) {

    // Get package tarball
    const tarballName = cp.execSync(`npm pack ${packageToInstall}`)
      .toString()
      .trim();

    // Set tarball path
    tarballPath = path.join(root, tarballName);

  } else {

    // Set tarball path
    tarballPath = packageToInstall;

  }

  // Get temporary directory
  return getTemporaryDirectory()
    .then(obj => {

      // Create read stream from temporary directory
      const stream = fs.createReadStream(tarballPath);
      return extractStream(stream, obj.tmpdir).then(() => obj);

    })
    .then(obj => {

      // Copy temporary directory files to root directory
      return fs.copy(obj.tmpdir, root).then(() => {

        // Get package name
        const packageName = require(path.join(root, 'package.json')).name;

        // Cleanup
        obj.cleanup()

        // Return package name
        return packageName;

      });

    // Catch any errors
    }).catch(err => err);

}

// Get temporary directory
const getTemporaryDirectory = () => {
  return new Promise((resolve, reject) => {
    tmp.dir({ unsafeCleanup: true }, (err, tmpdir, callback) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          tmpdir: tmpdir,
          cleanup: () => {
            try {
              callback();
            } catch (ignored) {
            }
          },
        });
      }
    });
  });
}

// Extract read stream for temporary directory
const extractStream = (stream, dest) => {
  return new Promise((resolve, reject) => {
    stream.pipe(
      tarPack.unpack(dest, err => {
        if (err) {
          reject(err);
        } else {
          resolve(dest);
        }
      })
    );
  });
}

// Check yarn registry
const checkIfOnline = () => {
  return new Promise(resolve => {
    dns.lookup('registry.yarnpkg.com', err => {
      let proxy;
      if (err != null && (proxy = getProxy())) {
        dns.lookup(url.parse(proxy).hostname, proxyErr => {
          resolve(proxyErr == null);
        });
      } else {
        resolve(err == null);
      }
    });
  });
}

// Get proxy to check yarn registry
const getProxy = () => {
  if (process.env.https_proxy) {
    return process.env.https_proxy;
  } else {
    try {
      let httpsProxy = cp.execSync('npm config get https-proxy')
        .toString()
        .trim();
      return httpsProxy !== 'null' ? httpsProxy : undefined;
    } catch (e) {
      return;
    }
  }
}

// Install packages in root directory
const installPackage = (root, pack, verbose, isOnline) => {
  return new Promise((resolve, reject) => {
    const args = [];
    args.push('add');
    args.push('--exact');
    args.push(pack);
    args.push('--cwd');
    args.push(root);
    if (verbose) args.push('--verbose');
    if (!isOnline) args.push('--offline');
    const child = spawn('yarnpkg', args, { stdio: 'inherit' });
    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `yarnpkg ${args.join(' ')}`,
        });
        return;
      }
      resolve();
    });
  });
}

// Make sure package is not undefined
if (typeof packageName === 'undefined') {
  console.log();
  console.error('Please specify a starter package:');
  console.log();
  console.log(`  ${chalk.cyan(program.name())} ${chalk.cyan('<starter-package>')}`);
  console.log();
  console.log('For example:');
  console.log();
  console.log(`  ${chalk.cyan(program.name())} ${chalk.cyan('colony-starter-basic')}`);
  console.log();
  process.exit(1);
}

// Execute
createStarter(
  packageName,
  program.specific,
  program.verbose
);
