import { readFileSync, writeFileSync } from 'fs';
import { resolve as resolvePath, basename } from 'path';
import { promisify } from 'util';
import * as rimraf from 'rimraf';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as fg from 'fast-glob';
import * as mkdirp from 'mkdirp';

const ARTIFACTS_DIR = resolvePath(
  __dirname,
  '../vendor/colonyNetwork/build/contracts',
);

const OUTPUT_DIR = resolvePath(__dirname, '../src/abis');

const extract = async () => {
  const { argv } = yargs(hideBin(process.argv)).options({
    inputDir: { alias: 'i', type: 'string', default: ARTIFACTS_DIR },
    tag: { alias: 't', type: 'string', default: 'develop' },
  });

  const args = await argv;
  let { inputDir } = args;
  const { tag } = args;

  if (inputDir !== ARTIFACTS_DIR) {
    inputDir = resolvePath(process.cwd(), inputDir);
  }
  const outputDir = resolvePath(OUTPUT_DIR, tag);
  await promisify(rimraf)(outputDir);
  mkdirp.sync(outputDir);

  const inputFiles = await fg(`${inputDir}/*.json`);
  inputFiles.forEach((file) => {
    const { contractName, abi, bytecode } = JSON.parse(
      readFileSync(file).toString(),
    );
    writeFileSync(
      resolvePath(outputDir, basename(file)),
      JSON.stringify({ contractName, abi, bytecode }),
    );
  });
};

extract();
