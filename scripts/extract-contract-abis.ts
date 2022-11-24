import { readFileSync, writeFileSync } from 'fs';
import { resolve as resolvePath, basename } from 'path';
import { promisify } from 'util';
import rimraf from 'rimraf';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import fg from 'fast-glob';
import { sync as mkdirpSync } from 'mkdirp';

const DEPLOY_CONTRACTS = ['MetaTxToken', 'TokenAuthority'];

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
  const inputDirToken = resolvePath(
    inputDir,
    '../../lib/colonyToken/build/contracts',
  );

  const outputTag = tag === 'develop' ? 'latest' : tag;
  const outputDir = resolvePath(OUTPUT_DIR, outputTag);
  await promisify(rimraf)(outputDir);
  mkdirpSync(outputDir);

  const inputArtifacts = await fg(`${inputDir}/*.json`);
  const inputTokenArtifacts = await fg(`${inputDirToken}/*.json`);
  const inputFiles = inputArtifacts.concat(inputTokenArtifacts);
  inputFiles.forEach((file) => {
    const { abi, contractName, bytecode, devdoc, userdoc } = JSON.parse(
      readFileSync(file).toString(),
    );
    const content = DEPLOY_CONTRACTS.includes(contractName)
      ? { contractName, abi, bytecode, devdoc, userdoc }
      : { contractName, abi, devdoc, userdoc };
    writeFileSync(
      resolvePath(outputDir, basename(file)),
      JSON.stringify(content, null, 4),
    );
  });
};

extract();
