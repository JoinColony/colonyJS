/* @flow */

import validation from './validation';

export default class Validator<Params = {}> {
  parseParams: Params => Array<*>;
  _schema: {} | null;
  +schema: {};
  +name: string;
  constructor() {
    if (this.schema && this.name) {
      this._schema = validation.addSchema(this.name, {
        type: 'object',
        ...this.schema,
      });
    }
  }
  validate(params: Params): boolean {
    if (!this._schema) return true;

    if (params == null || typeof params !== 'object')
      throw new Error('Parameters must be supplied as an object');

    const report = validation.validate(this.name, params);

    if (report) {
      const { validation: { errors: { schema } } } = report;
      // TODO more meaningful errors
      throw new Error(`Validation error: ${JSON.stringify(schema)}`);
    }

    return true;
  }
}
