import { basename, resolve } from 'path';
import { fork } from 'child_process';

import { prompt } from 'inquirer';
import { sync as glob } from 'fast-glob';
// eslint-disable-next-line import/extensions
import yargs from 'yargs/yargs';
// eslint-disable-next-line import/extensions
import { hideBin } from 'yargs/helpers';

const { argv } = yargs(hideBin(process.argv));

if ('example' in argv) {
  fork(resolve(__dirname, `${argv.example}.ts`));
} else {
  const examples = glob(resolve(__dirname, './*.ts'))
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

  prompt(questions).then((answers) => {
    fork(resolve(__dirname, `${answers.example}.ts`));
  });
}
