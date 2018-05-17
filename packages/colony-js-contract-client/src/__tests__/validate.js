/* eslint-env jest */

import BigNumber from 'bn.js';

import validate, { validateParam } from '../modules/validate';

describe('validate', () => {
  test('Validates with no parameters', () => {
    // No params at all
    expect(validate()).toBe(true);
  });

  test('Does not validate with incorrectly-defined input parameters', () => {
    // Invalid params type
    [undefined, null, [], 'abc', 1].forEach(input => {
      expect(() => {
        validate(input, [['id', 'number']]);
      }).toThrowError('Expected parameters as an object');
    });
  });

  test('Does not validate with incorrectly-defined method parameters', () => {
    // Invalid methodParams type
    [
      undefined,
      null,
      {},
      'abc',
      1,
      [1],
      ['a'],
      ['a', 'a'],
      [['a'], ['a']],
      [['a'], {}],
    ].forEach(input => {
      expect(() => {
        validate({ id: 1 }, input);
      }).toThrowError(
        'Expected method parameters as an array of name/type tuples',
      );
    });
  });

  test('Does not validate with mismatching sizes', () => {
    // Different length params/method params
    [[{}, [['id', 'number']]], [{ id: 1 }, []]].forEach(
      ([params, methodParams]) => {
        expect(() => {
          validate(params, methodParams);
        }).toThrowError('Mismatching parameters/method parameters sizes');
      },
    );
  });

  test('Does not validate with mismatching types', () => {
    // Wrong param types
    expect(() => {
      validate({ id: 'abc', name: 'Vitalik' }, [
        ['id', 'number'],
        ['name', 'string'],
      ]);
    }).toThrowError('Parameter "id" expected a value of type "number"');
    expect(() => {
      validate({ id: 1, name: 1 }, [['id', 'number'], ['name', 'string']]);
    }).toThrowError('Parameter "name" expected a value of type "string"');

    // Parameter type not defined
    expect(() => {
      validate({ id: 1, location: '52°31′00″N 13°23′20″E' }, [
        ['id', 'number'],
        ['location', 'geolocation'],
      ]);
    }).toThrowError('Parameter type "geolocation" not defined');
  });

  test('Validates with valid input and method parameters', () => {
    // Valid!
    expect(
      validate({ id: 1, name: 'Vitalik' }, [
        ['id', 'number'],
        ['name', 'string'],
      ]),
    ).toBe(true);
  });

  test('Performs validations correctly for each type', () => {
    // Number (invalid)
    [undefined, null, {}, [], [1], '1'].forEach(input => {
      expect(() => {
        validateParam('id', 'number', input);
      }).toThrowError('expected a value of type "number"');
    });

    // Number/BigBumber (valid)
    [1, 1.1, new BigNumber(1)].forEach(input => {
      expect(validateParam('id', 'number', input)).toBe(true);
    });

    // Address (invalid)
    [
      undefined,
      null,
      1,
      {},
      [],
      '',
      '0x06012c8c', // too short
      0x06012c8cf97bead5deae237070f9587f8e7a266d, // not string
      '0x0000000000000000000000000000000000000000', // undefined
    ].forEach(input => {
      expect(() => {
        validateParam('address', 'address', input);
      }).toThrowError('expected a value of type "address"');
    });

    // Address (valid)
    expect(
      validateParam(
        'address',
        'address',
        '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
      ),
    ).toBe(true);

    // Boolean (invalid)
    [undefined, null, {}, [], 1, [true], '1'].forEach(input => {
      expect(() => {
        validateParam('isThisThingOn', 'boolean', input);
      }).toThrowError('expected a value of type "boolean"');
    });

    // Boolean (valid)
    [true, false].forEach(input => {
      expect(validateParam('isThisThingOn', 'boolean', input)).toBe(true);
    });

    // String (invalid)
    [undefined, null, {}, [], 1, ['a']].forEach(input => {
      expect(() => {
        validateParam('name', 'string', input);
      }).toThrowError('expected a value of type "string"');
    });

    // String (valid)
    ['Vitalik', ''].forEach(input => {
      expect(validateParam('name', 'string', input)).toBe(true);
    });
  });
});
