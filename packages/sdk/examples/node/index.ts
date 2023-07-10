import { basename, resolve } from 'node:path';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import inquirer from 'inquirer';
import glob from 'fast-glob';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const { argv } = yargs(hideBin(process.argv));

const dirname = fileURLToPath(new URL('.', import.meta.url));

if ('example' in argv) {
  fork(resolve(dirname, `${argv.example}.ts`));
} else {
  const examples = glob
    .sync(resolve(dirname, './*.ts'))
    .map((path) => basename(path, '.ts'))
    .filter((example) => example !== 'index');

  const questions = [
    {
      type: 'list',
      name: 'example',
      message: 'Which example would you like to run?',
      choices: examples,
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    fork(resolve(dirname, `${answers.example}.ts`));
  });
}
