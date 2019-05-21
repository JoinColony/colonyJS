/* @flow */
/* eslint-disable import/no-cycle */

import DomainAuth from './DomainAuth';

// XXX This is a good use-case for some kind of async validation step,
// but since the underlying method functionality is due to change very soon,
// we're opting to not make big changes to the Sender behaviour, and simply
// extend the `send` method to perform this async validation.
export default class AddTask extends DomainAuth<*, *, *> {
  async send(inputValues: *, options: *) {
    // Validate that the domain exists before attempting to create a task
    if (Object.hasOwnProperty.call(inputValues, 'domainId')) {
      const { count } = await this.client.getDomainCount.call();
      if (count < inputValues.domainId)
        throw new Error(`Domain ID ${inputValues.domainId} not found`);
    }
    return super.send(inputValues, options);
  }
}
