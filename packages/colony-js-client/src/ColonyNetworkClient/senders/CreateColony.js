/* @flow */
/* eslint-disable import/no-cycle */

import ContractClient from '@colony/colony-js-contract-client';
import { MAX_VERSION } from '../../constants';

export default class CreateColony extends ContractClient.Sender<*, *, *, *> {
  async send(inputValues: *, options: *) {
    if (inputValues.version > MAX_VERSION) {
      throw new Error(`Only versions ${MAX_VERSION} and below are supported`);
    }
    return super.send(inputValues, options);
  }
}
