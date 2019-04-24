/* @flow */

import ContractClient from './classes/ContractClient';

export { addParamType } from './modules/paramTypes';

export type {
  ContractClientConstructorArgs,
  ContractMethodSenderArgs,
  ContractResponse,
  MultisigOperationConstructorArgs,
  SendOptions,
} from './flowtypes';

export default ContractClient;
