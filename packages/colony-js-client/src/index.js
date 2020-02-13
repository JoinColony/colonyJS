/* @flow */
/* eslint-disable import/no-cycle */

import type {
  ContractClientConstructorArgs,
  ContractResponse,
  MultisigOperationConstructorArgs,
  SendOptions,
} from '@colony/colony-js-contract-client';

import './paramTypes';

import ColonyNetworkClient from './ColonyNetworkClient/index';
import ColonyClient from './ColonyClient/index';
import TokenClient from './TokenClient/index';
import TokenLockingClient from './TokenLockingClient/index';

import getColonyClient from './getColonyClient';
import getNetworkClient from './getNetworkClient';

export type {
  ColonyClient,
  ColonyNetworkClient,
  ContractClientConstructorArgs,
  ContractResponse,
  MultisigOperationConstructorArgs,
  SendOptions,
  TokenClient,
  TokenLockingClient,
};

export {
  COLONY_ROLE_ADMINISTRATION,
  COLONY_ROLE_ARBITRATION,
  COLONY_ROLE_ARCHITECTURE,
  COLONY_ROLE_FUNDING,
  COLONY_ROLE_RECOVERY,
  COLONY_ROLE_ROOT,
  COLONY_ROLES,
  EMPTY_ADDRESS,
  ETHER_ADDRESS,
  FUNDING_POT_TYPE_DOMAIN,
  FUNDING_POT_TYPE_PAYMENT,
  FUNDING_POT_TYPE_TASK,
  FUNDING_POT_TYPE_UNASSIGNED,
  FUNDING_POT_TYPES,
  TASK_RATING_EXCELLENT,
  TASK_RATING_NONE,
  TASK_RATING_SATISFACTORY,
  TASK_RATING_UNSATISFACTORY,
  TASK_RATINGS,
  TASK_ROLE_EVALUATOR,
  TASK_ROLE_MANAGER,
  TASK_ROLE_WORKER,
  TASK_ROLES,
  TASK_STATUS_ACTIVE,
  TASK_STATUS_CANCELLED,
  TASK_STATUS_FINALIZED,
  TASK_STATUSES,
} from './constants';

export { getColonyClient, getNetworkClient };

export default ColonyNetworkClient;
