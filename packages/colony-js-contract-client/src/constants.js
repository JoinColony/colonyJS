/* @flow */

export const DEFAULT_TIMEOUT = 60 * 1000; // 1 minute
export const MINING_TIMEOUT = 5 * 60 * 1000; // 5 minutes
export const DEFAULT_CALL_OPTIONS = { timeoutMs: DEFAULT_TIMEOUT };
export const DEFAULT_SEND_OPTIONS = {
  miningTimeoutMs: MINING_TIMEOUT,
  timeoutMs: DEFAULT_TIMEOUT,
  waitForMining: true,
};
export const NON_EXISTENT_ADDRESS =
  '0x0000000000000000000000000000000000000000';
