/* @flow */
/* eslint-disable no-underscore-dangle */

import ContractClient from '@colony/colony-js-contract-client';
import type ColonyClient from '../index';

type InputValues = {
  specificationHash: string,
  domainId: number,
};

type OutputValues = {
  id: number,
};

// XXX This is a good use-case for some kind of async validation step,
// but since the underlying method functionality is due to change very soon,
// we're opting to not make big changes to the Sender behaviour, and simply
// extend the `send` method to perform this async validation.
export default class CreateTask extends ContractClient.Sender<
  InputValues,
  OutputValues,
  ColonyClient,
> {
  async send(inputValues: InputValues, options: *) {
    // Validate that the domain exists before attempting to create a task
    if (Object.hasOwnProperty.call(inputValues, 'domainId')) {
      const { count } = await this.client.getDomainCount.call();
      if (count < inputValues.domainId)
        throw new Error(`Domain ID ${inputValues.domainId} not found`);
    }
    return super.send(inputValues, options);
  }
}
