/* @flow */
/* eslint-disable import/no-cycle */

import DomainAuth from './DomainAuth';

// XXX This is a good use-case for some kind of async validation step,
// but since the underlying method functionality is due to change very soon,
// we're opting to not make big changes to the Sender behaviour, and simply
// extend the `send` method to perform this async validation.
export default class SetExpenditurePayoutModifier extends DomainAuth<*, *, *> {
  async send(inputValues: *, options: *) {
    // Validate that the expenditure exists before attempting to modify the payout
    if (Object.hasOwnProperty.call(inputValues, 'expenditureId')) {
      const { count } = await this.client.getExpenditureCount.call();
      if (count < inputValues.expenditureId)
        throw new Error(`Domain ID ${inputValues.domainId} not found`);
    }
    return super.send(inputValues, options);
  }
}
