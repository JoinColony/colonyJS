/* @flow */

export const DEFAULT_TIMEOUT = 1000 * 60; // 1 minute

export const DEFAULT_MINING_TIMEOUT = 1000 * 60 * 3; // 3 minutes

export const DEFAULT_SEND_OPTIONS = {
  timeoutMs: DEFAULT_TIMEOUT,
  miningTimeoutMs: DEFAULT_MINING_TIMEOUT,
};

export const DEFAULT_CALL_OPTIONS = {
  timeoutMs: DEFAULT_TIMEOUT,
};
