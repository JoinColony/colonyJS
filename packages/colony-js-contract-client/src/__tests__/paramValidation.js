/* eslint-env jest */
/* eslint-disable no-underscore-dangle,no-console */

import createSandbox from 'jest-sandbox';
import { makeAssert } from '@colony/colony-js-utils';
import * as validation from '../modules/paramValidation';
import * as types from '../modules/paramTypes';

const failureMessage = 'Validation failed for SampleObject';
const assertValid = makeAssert(failureMessage);

describe('validateParams', () => {
  const sandbox = createSandbox();

  beforeEach(() => {
    sandbox.clear();
  });

  test('Empty parameters validate correctly', () => {
    expect(validation.validateParams({}, [])).toBe(true);
  });

  test('Parameters validate correctly', () => {
    const spec = [
      ['taskId', 'number'],
      ['potId', 'number'],
      ['domainId', 'number'],
    ];

    const params = {
      taskId: 6,
      potId: 420,
      domainId: 1,
    };

    sandbox.spyOn(types, 'validateValueType');

    expect(validation.validateParams(params, spec)).toBe(true);
    expect(types.validateValueType).toHaveBeenCalledWith(6, spec[0][1]);
    expect(types.validateValueType).toHaveBeenCalledWith(420, spec[1][1]);

    // Missing parameters/wrong type
    [undefined, null, [], 'a', 6].forEach(wrongType => {
      expect(() => {
        validation.validateParams(wrongType, spec);
      }).toThrowError('Expected parameters as an object');
    });

    // No parameters
    expect(() => {
      validation.validateParams({}, spec);
    }).toThrowError('Missing parameters');

    // Missing parameter
    expect(() => {
      validation.validateParams({ taskId: 6, domainId: 1 }, spec);
    }).toThrowError('Missing parameters: "potId"');

    // Wine parameters
    expect(() => {
      validation.validateParams(
        {
          caskId: 6,
          côteId: 420,
          domaineId: 'Domaine de la Romanee-Conti',
        },
        spec,
      );
    }).toThrowError('Missing parameters');

    // Extra parameter
    expect(() => {
      validation.validateParams(
        {
          taskId: 6,
          domainId: 1,
          potId: 420,
          somethingElse: 2,
        },
        spec,
      );
    }).not.toThrow();

    // Wrong type
    // validateValue.mockImplementationOnce(() => false);
    expect(() => {
      validation.validateParams(
        { taskId: 'six', domainId: 1, potId: 420 },
        spec,
      );
    }).toThrowError('Parameter "taskId" expected a value of type "number"');
  });
});

describe('validateValue', () => {
  const sandbox = createSandbox();

  beforeEach(() => {
    sandbox.clear();
  });

  test('Valid values are reported as valid', () => {
    sandbox.spyOn(types, 'validateValueType');

    expect(validation.validateValue(1, ['id', 'number'])).toBe(true);
    expect(types.validateValueType).toHaveBeenCalledWith(1, 'number');
  });

  test('Invalid values are reported as invalid, with reasons', () => {
    sandbox.spyOn(types, 'validateValueType');

    // Invalid value
    expect(() => {
      expect(validation.validateValue('abc', ['id', 'number']));
    }).toThrowError('Parameter "id" expected a value of type "number"');
    expect(types.validateValueType).toHaveBeenCalledWith('abc', 'number');

    // Invalid value with reasons (caught validation errors)
    types.validateValueType.mockImplementationOnce(() => {
      throw new Error('The reason this validation failed');
    });

    expect(() => {
      expect(validation.validateValue('abc', ['id', 'number']));
    }).toThrowError(
      'Parameter "id" expected a value of type ' +
        '"number" (The reason this validation failed)',
    );

    // Validation error messages contain the method name
    expect(() => {
      expect(validation.validateValue('abc', ['id', 'number'], assertValid));
    }).toThrowError(failureMessage);
  });
});

describe('areParamPairsEmpty', () => {
  test('Empty method parameters are identified properly', () => {
    expect(validation.areParamPairsEmpty(null)).toBe(true);
    expect(validation.areParamPairsEmpty([])).toBe(true);
    expect(validation.areParamPairsEmpty([['prop', 'string']])).toBe(false);
  });
});

describe('isInputEmpty', () => {
  test('Empty input values are identified properly', () => {
    expect(validation.isInputEmpty(null)).toBe(true);
    expect(validation.isInputEmpty({})).toBe(true);
    expect(validation.isInputEmpty({ prop: 'something' })).toBe(false);
  });
});
