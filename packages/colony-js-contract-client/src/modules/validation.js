/* @flow */

import JJV from 'jjv';
import { isAddress } from 'web3-utils';

const validation = new JJV();

validation.addType('date', value => !Number.isNaN(Date.parse(value)));

validation.addFormat('address', isAddress);

// TODO add BigBumber support?

// FIXME: provide an interface to add format plugins
validation.addFormat('role', role =>
  ['WORKER', 'EVALUATOR', 'MANAGER'].includes(role),
);

export default validation;
