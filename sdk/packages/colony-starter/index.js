const chalk = require('chalk');
const commander = require('commander');
const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;
const spawn = require('cross-spawn');
const semver = require('semver');
const dns = require('dns');
const tmp = require('tmp');
const unpack = require('tar-pack').unpack;
const url = require('url');
const hyperquest = require('hyperquest');
const os = require('os');

let packageName;

// Define command program
const program = new commander
  .Command('colony-starter')
  .arguments('<starter-package>')
  .usage(`${chalk.green('<starter-package>')} [options]`)
  .action(name => { packageName = name })
  .option('--source <package-path>', 'use a package from another source')
  .option('--verbose', 'print additional logs')
  .allowUnknownOption()
  .parse(process.argv);

// Create starter project
const createStarter = (name, version, verbose) => {

  // Define root and template
  const root = path.resolve(name);
  const template = 'packages/' + name;

  // Create new directory
  fs.ensureDirSync(name);

  // Make sure directory is empty
  if (fs.readdirSync(root).length > 0) {
    console.log();
    console.log(`The directory ${chalk.green(name)} must be empty!`);
    console.log();
    process.exit(1);
  }

  // Log the location where the starter project is being created
  console.log(`Creating starter project in ${chalk.green(root)}.`);

  // Create initial package.json file
  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify({ license: 'MIT' }, null, 2) + os.EOL
  );

  // Make sure yarn is available
  if (!isYarnAvailable()) {
    console.log();
    console.log('Yarn must be installed!');
    console.log();
    process.exit(1);
  }

  // Define origin directory
  const origin = process.cwd();

  // Move to root directory
  process.chdir(root);

  // Install starter package
  installStarter(root, name, version, verbose, origin, template);

}

// Check if yarn is available
const isYarnAvailable = () => {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

// Install starter package
const installStarter = (
  root,
  name,
  version,
  verbose,
  origin,
  template
) => {

  // Get starter package that will be installed
  const packageToInstall = getInstallPackage(version, origin);

  // Get package name from url or path
  getPackageName(packageToInstall)
    .then(packageName =>

      // Check if online and return online status and package name
      checkIfOnline().then(isOnline => ({ isOnline, packageName }))

    ).then(info => {

      const isOnline = info.isOnline;
      const packageName = info.packageName;

      // Log the start of the installation process
      console.log(`Installing ${chalk.cyan(packageName)}`);

      // Install the package
      return installPackage(
        root,
        packageToInstall,
        verbose,
        isOnline
      );

    }).then(() => {

      console.log();
      console.log(`Success! Created ${name} at ${root}`);
      console.log();

    }).catch(reason => {

      console.log();
      console.log('Aborting installation.');
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

const getInstallPackage = (version, origin) => {
  let packageToInstall = packageName;
  const validSemver = semver.valid(version);
  if (validSemver) {
    packageToInstall += `@${validSemver}`;
  } else if (version) {
    if (version[0] === '@' && version.indexOf('/') === -1) {
      packageToInstall += version;
    } else if (version.match(/^file:/)) {
      packageToInstall = `file:${path.resolve(
        origin,
        version.match(/^file:(.*)?$/)[1]
      )}`;
    } else {
      packageToInstall = version;
    }
  }
  return packageToInstall;
}

const getPackageName = (packageSource) => {
  if (packageSource.match(/^.+\.(tgz|tar\.gz)$/)) {
    return getTemporaryDirectory()
      .then(obj => {
        let stream;
        if (/^http/.test(packageSource)) {
          stream = hyperquest(packageSource);
        } else {
          stream = fs.createReadStream(packageSource);
        }
        return extractStream(stream, obj.tmpdir).then(() => obj);
      })
      .then(obj => {
        const packageName = require(path.join(obj.tmpdir, 'package.json')).name;
        obj.cleanup();
        return packageName;
      })
      .catch(err => {
        console.log(
          `Could not extract the package name from the archive: ${err.message}`
        );
        const assumedProjectName = packageSource.match(
          /^.+\/(.+?)(?:-\d+.+)?\.(tgz|tar\.gz)$/
        )[1];
        console.log(
          `Based on the filename, assuming it is "${chalk.cyan(
            assumedProjectName
          )}"`
        );
        return Promise.resolve(assumedProjectName);
      });
  } else if (packageSource.indexOf('git+') === 0) {
    return Promise.resolve(packageSource.match(/([^/]+)\.git(#.*)?$/)[1]);
  } else if (packageSource.match(/.+@/)) {
    return Promise.resolve(
      packageSource.charAt(0) + packageSource.substr(1).split('@')[0]
    );
  } else if (packageSource.match(/^file:/)) {
    const packageSourcePath = packageSource.match(/^file:(.*)?$/)[1];
    const packageSourceJson = require(path.join(
      packageSourcePath,
      'package.json'
    ));
    return Promise.resolve(packageSourceJson.name);
  }
  return Promise.resolve(packageSource);
}

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

const extractStream = (stream, dest) => {
  return new Promise((resolve, reject) => {
    stream.pipe(
      unpack(dest, err => {
        if (err) {
          reject(err);
        } else {
          resolve(dest);
        }
      })
    );
  });
}

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

const getProxy = () => {
  if (process.env.https_proxy) {
    return process.env.https_proxy;
  } else {
    try {
      let httpsProxy = execSync('npm config get https-proxy')
        .toString()
        .trim();
      return httpsProxy !== 'null' ? httpsProxy : undefined;
    } catch (e) {
      return;
    }
  }
}

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

if (typeof packageName === 'undefined') {
  console.log();
  console.error('Please specify a starter package:');
  console.log();
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<starter-package>')}`);
  console.log();
  console.log('For example:');
  console.log();
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('colony-starter-basic')}`);
  console.log();
  process.exit(1);
}

createStarter(
  packageName,
  program.source,
  program.verbose
);
