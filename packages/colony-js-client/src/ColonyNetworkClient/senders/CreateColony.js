/* @flow */

import type { EventHandlers } from '@colony/colony-js-adapter';
import type BigNumber from 'bn.js';
import { toUtf8Bytes } from 'ethers-utils';

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyNetworkClient from '../index';

type Params = {
  name: string,
  tokenName: string,
  tokenSymbol: string,
  tokenDecimals: number,
};
type EventData = { colonyId: number };

export default class CreateColony extends ContractClient.Sender<
  Params,
  EventData,
  ColonyNetworkClient,
> {
  static get schema(): {} {
    return {
      name: {
        type: 'string',
        minLength: 3,
        maxLength: 100,
      },
      tokenName: {
        type: 'string',
        maxLength: 32,
      },
      tokenSymbol: {
        type: 'string',
        maxLength: 3,
      },
      tokenDecimals: {
        type: 'number',
        min: 0,
        max: 100,
      },
    };
  }
  static parseParams({
    name,
    tokenName,
    tokenSymbol,
    tokenDecimals = 2,
  }: Params) {
    return [
      toUtf8Bytes(name),
      toUtf8Bytes(tokenName),
      toUtf8Bytes(tokenSymbol),
      tokenDecimals,
    ];
  }
  static get eventHandlers(): EventHandlers {
    return {
      ColonyAdded({ id }: { id: BigNumber }) {
        return {
          colonyId: id.toNumber(),
        };
      },
    };
  }
  get _estimate(): string => * {
    return this.client.contract.estimate.createColony;
  }
  get _send(): string => * {
    return this.client.contract.functions.createColony;
  }
}
