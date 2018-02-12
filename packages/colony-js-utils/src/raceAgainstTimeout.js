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
  const wrappedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      promise.then((...args) => resolve(...args)).catch(error => reject(error));
    }, 1000);
  });

  try {
    return timeoutPromise;
  } finally {
    clearTimeout(timeout);
  }
}

export default raceAgainstTimeout;
