/* @flow */

async function raceAgainstTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  timeoutCallback?: Function, // useful for e.g. cleaning up
): Promise<T> {
  let timeout;
  const timeoutPromise = new Promise((resolve, reject) => {
    timeout = setTimeout(() => {
      const error = new Error(`Timeout after ${timeoutMs} ms`);
      if (timeoutCallback) timeoutCallback();
      reject(error);
    }, timeoutMs);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    clearTimeout(timeout);
  }
}

export default raceAgainstTimeout;
