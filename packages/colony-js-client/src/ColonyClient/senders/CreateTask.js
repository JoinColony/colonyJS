/* @flow */

import type BigNumber from 'bn.js';
import { toUtf8Bytes } from 'ethers-utils';
import type { EventHandlers } from '@colony/colony-js-adapter';

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';
import { DOMAIN_ID } from '../../schemaDefinitions';

type Params = { specificationHash: string, domainId: number };
type EventData = { taskId: number };

export default class CreateTask extends ContractClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    // TODO JJV is bad, use another library or roll our own mini library...
    return {
      properties: {
        specificationHash: {
          type: 'string',
          maxLength: 2,
          // TODO later: `format: 'hash'`?
        },
        ...DOMAIN_ID,
      },
      required: ['specificationHash', 'domainId'],
    };
  }
  static parseParams({ specificationHash, domainId }: Params) {
    return [toUtf8Bytes(specificationHash), domainId];
  }
  static get eventHandlers(): EventHandlers {
    return {
      TaskAdded({ id }: { id: BigNumber }) {
        return {
          taskId: id.toNumber(),
        };
      },
    };
  }
  get _send(): (string, number) => * {
    return this.client.contract.functions.makeTask;
  }
  get _estimate(): (string, number) => * {
    return this.client.contract.estimate.makeTask;
  }
}
