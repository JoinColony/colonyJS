import { sleep } from '../../src/utils/time';

/**
 * Return a time prefix, used for testing,
 * in the form '20180430_200059'
 */
export function timePrefix() {
  // @TODO lpad numbers.
  const d = new Date();
  const a = `${d.getUTCFullYear()}${d.getUTCMonth()}${d.getUTCDay()}`;
  const b = `${d.getUTCHours()}${d.getUTCMinutes()}${d.getUTCSeconds()}`;
  return `${a}_${b}`;
}

/**
 * Retry until the given function returns a non-falsy value.
 *
 * By default try 10 times, with a sleep of 500ms between
 * each attempt.
 *
 * @param f
 * @param attempts
 * @param value
 * @returns {Promise<*>}
 */
export async function retryUntilValue(
  f,
  { attempts = 20, value } = { attempts: 20, value: undefined },
) {
  let attemptsLeft = attempts;

  let r = f();

  const shouldContinue = () => {
    if (value === undefined) {
      return r === undefined;
    }

    return r !== value;
  };

  while (shouldContinue() && attemptsLeft > 0) {
    // await in loop is required here:
    // this code HAS to be blocking, there's nothing to parallelize.
    // eslint-disable-next-line no-await-in-loop
    await sleep(500);
    r = f();
    attemptsLeft -= 1;
  }

  return r;
}
