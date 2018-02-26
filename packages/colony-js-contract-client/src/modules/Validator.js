/* @flow */

import validation from './validation';

export default class Validator<Params = {}> {
  parseParams: Params => Array<*>;
  static +schema: {};
  static +name: string;
  constructor() {
    const { schema, name } = this.constructor;
    if (schema && name) {
      validation.addSchema(name, {
        type: 'object',
        ...schema,
      });
    }
  }
  validate(params: Params): boolean {
    const { name } = this.constructor;
    const schema = validation.schema[name];
    if (!schema) return true;

    if (params == null || typeof params !== 'object')
      throw new Error('Parameters must be supplied as an object');

    const report = validation.validate(name, params);

    if (report) {
      const { validation: errors } = report;
      // TODO more meaningful errors, or use another library...
      throw new Error(`Validation error: ${JSON.stringify(errors)}`);
    }

    return true;
  }
}
