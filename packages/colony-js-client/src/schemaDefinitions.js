/* @flow */

import { MIN_RATING, MAX_RATING } from './constants';

export const TASK_ID = {
  taskId: {
    type: 'number',
    min: 1,
  },
};

export const SKILL_ID = {
  skillId: {
    type: 'number',
    min: 1,
  },
};

export const DOMAIN_ID = {
  domainId: {
    type: 'number',
    min: 1,
  },
};

export const TRANSACTION_ID = {
  transactionId: {
    type: 'number',
    min: 1,
  },
};

export const RATING = {
  taskId: {
    type: 'number',
    min: MIN_RATING,
    max: MAX_RATING,
  },
};

export const AMOUNT_POSITIVE = {
  amount: {
    type: 'number',
    min: 0,
  },
};

export const AMOUNT_NEGATIVE = {
  amount: {
    type: 'number',
    max: 0,
  },
};

export const ROLE = {
  role: {
    type: 'string',
    format: 'role',
  },
};

export const ADDRESS = {
  address: {
    type: 'string',
    format: 'address',
  },
};

export const TOKEN = {
  token: {
    type: 'string',
    format: 'address',
  },
};
