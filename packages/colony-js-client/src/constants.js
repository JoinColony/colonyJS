/* @flow */

export const WORKER_ROLE = 'WORKER';
export const EVALUATOR_ROLE = 'EVALUATOR';
export const MANAGER_ROLE = 'MANAGER';

export const ROLES = {
  [MANAGER_ROLE]: 0,
  [EVALUATOR_ROLE]: 1,
  [WORKER_ROLE]: 2,
};

export const DEFAULT_DOMAIN_ID = 1;

export const OWNER_ROLE = 'OWNER';
export const ADMIN_ROLE = 'ADMIN';

export const AUTHORITY_ROLES = {
  [OWNER_ROLE]: 0,
  [ADMIN_ROLE]: 1,
};

export const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';
