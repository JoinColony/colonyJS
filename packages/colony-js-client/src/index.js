/* @flow */

import type {
  ContractClientConstructorArgs,
  ContractResponse,
  MultisigOperationConstructorArgs,
  SendOptions,
} from '@colony/colony-js-contract-client';

import './paramTypes';

import ColonyNetworkClient from './ColonyNetworkClient/index';

export type {
  ColonyNetworkClient,
  ContractClientConstructorArgs,
  ContractResponse,
  MultisigOperationConstructorArgs,
  SendOptions,
};

export {
  ADMIN_ROLE,
  AUTHORITY_ROLES,
  EMPTY_ADDRESS,
  EVALUATOR_ROLE,
  MANAGER_ROLE,
  OWNER_ROLE,
  ROLES,
  WORKER_ROLE,
  ACTIVE_TASK_STATUS,
  CANCELLED_TASK_STATUS,
  FINALIZED_TASK_STATUS,
  TASK_STATUSES,
} from './constants';

export default ColonyNetworkClient;
