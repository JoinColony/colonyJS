// Import dependencies
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

// Install and build a starter package
const build = (commander, shortName) => {

  const packageName = `colony-starter-${shortName}`;

  // Make sure package name is defined
  if (typeof packageName === 'undefined') {
    console.log();
    console.error('Please specify a starter package:');
    console.log();
    console.log(`  ${chalk.cyan(commander.name())} build ${chalk.cyan('<package-name>')}`);
    console.log();
    console.log('For example:');
    console.log();
    console.log(`  ${chalk.cyan(commander.name())} build ${chalk.cyan('basic')}`);
    console.log();
    process.exit(1);
  }

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
  console.log(`  Creating ${chalk.cyan(packageName)} folder...`);

  // Set destination path
  const destinationPath = path.resolve(packageName);

  // Ensure destination path exists
  fs.ensureDirSync(destinationPath);

  // Make sure destination directory is empty
  if (fs.readdirSync(destinationPath).length > 0) {
    console.log();
    console.log(chalk.red(`  The ${packageName} folder must be empty!`));
    console.log();
    process.exit(1);
  }

  // Move to destination path
  process.chdir(destinationPath);

  // Determine specific package version or source
  const packageToInstall = getSpecificPackage(packageName, commander.specific);

  console.log();
  console.log(`  Preparing to install ${chalk.cyan(packageToInstall)}...`);

  // Get package name from url or path
  prepareInstall(packageToInstall, destinationPath)
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
        destinationPath,
        commander.verbose,
        isOnline
      );

    }).then(() => {

      console.log();
      console.log(`  Initializing ${chalk.cyan(packageName)}...`);
      console.log();

      // Initialize git
      cp.execSync(`git init`);

      // Add gitignore file
      cp.execSync(`echo "node_modules" >> .gitignore`);

      // Add add postinstall script
      cp.execSync(`json -I -f package.json -e 'this.scripts.postinstall="sh scripts/postinstall.sh"'`);

      // Add add colonyNetwork submodule
      cp.execSync(`git submodule add https://github.com/JoinColony/colonyNetwork lib/colonyNetwork`);

      // Run postinstall script
      cp.execSync(`yarn`, { stdio: [0, 1, 2] });

    }).then(() => {

      console.log();
      console.log(`  Success! Created ${chalk.cyan(packageName)} at ${chalk.cyan(destinationPath)}`);
      console.log();

    }).catch(reason => {

      console.log();
      console.log(chalk.red('  Aborting installation. Please report an issue.'));
      console.log();

      if (reason.command) {

        console.log(chalk.red(`  Failed to execute ${reason.command}`));
        console.log();

      } else {

        console.log(chalk.red(`  ${reason}`));
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

// Format package name based on specific
const getSpecificPackage = (packageName, specific) => {
  const validSemver = semver.valid(specific);
  if (validSemver) {
    return `@colony/colony-starter-${packageName}@${validSemver}`;
  }
  if (specific) {
    return specific;
  }
  return `@colony/colony-starter-${packageName}`;
}

// Get package tarball and/or unpack package tarball
const prepareInstall = (packageToInstall, destination) => {

  const tarball = {};

  // Get tarball if not already tarball and/or set declared tarball properties
  if (!packageToInstall.match(/^.+\.(tgz|tar\.gz)$/) || packageToInstall[0] === '/') {

    // Get package tarball using npm
    const result = getPackageTarball(packageToInstall, destination);

    // Set tarball properties
    tarball.name = result.name;
    tarball.path = result.path;

  } else {

    // Set tarball properties
    tarball.name = packageToInstall;
    tarball.path = path.join(destination, tarball.name);

  }

  // Get temporary directory
  return getTemporaryDirectory()
    .then(obj => {

      // Create read stream for temporary directory
      const stream = fs.createReadStream(tarball.path);
      return extractStream(stream, obj.tmpdir).then(() => obj);

    })
    .then(obj => {

      // Copy temporary directory to destination directory
      return fs.copy(obj.tmpdir, destination).then(() => {

        // Cleanup
        obj.cleanup();

        // Check if tarball file is in destination directory
        if (fs.existsSync(path.join(destination, tarball.name))) {

          // Remove tarball file
          fs.unlink(tarball.path);

        }

        // Get package name
        const packageName = require(path.join(destination, 'package.json')).name;

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

// Get package tarball using npm
const getPackageTarball = (packageToInstall, destination) => {

  try {

    // Download tarball
    const tarballName = cp
      .execSync(`npm pack ${packageToInstall} --silent`)
      .toString()
      .trim();

    // Set tarball path to current/destination directory
    const tarballPath = path.join(destination, tarballName);

    // Return tarball info
    return {
      name: tarballName,
      path: tarballPath,
    };

  } catch (exec) {

    console.log();
    console.log(chalk.red(`  Unable to locate ${packageToInstall} on npm`));
    console.log();

    process.exit(1);

  }

}

// Install packages in destination directory
const installPackage = (destination, verbose, isOnline) => {
  return new Promise((resolve, reject) => {
    const args = [];
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

module.exports = build;
