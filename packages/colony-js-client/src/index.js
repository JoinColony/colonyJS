/* @flow */

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

export type {
  ColonyClient,
  ColonyNetworkClient,
  ContractClientConstructorArgs,
  ContractResponse,
  MultisigOperationConstructorArgs,
  SendOptions,
  TokenClient,
};

export {
  ACTIVE_TASK_STATUS,
  ADMIN_ROLE,
  AUTHORITY_ROLES,
  CANCELLED_TASK_STATUS,
  EMPTY_ADDRESS,
  EVALUATOR_ROLE,
  FINALIZED_TASK_STATUS,
  FOUNDER_ROLE,
  MANAGER_ROLE,
  TASK_ROLES,
  TASK_STATUSES,
  WORKER_ROLE,
} from './constants';

export default ColonyNetworkClient;
