/* @flow */

export type ParamTypes =
  | '[address]'
  | '[bigNumber]'
  | '[number]'
  | 'address'
  | 'bigNumber'
  | 'boolean'
  | 'bytes32String'
  | 'date'
  | 'hexString'
  | 'ipfsHash'
  | 'number'
  | 'anyAddress'
  | 'string';

// [param name, param type]
export type Param = [string, ParamTypes];
export type Params = Array<Param>;

export type ParamTypeDef = {
  validate: (value: any) => boolean,
  convertOutput: (value: any) => *,
  convertInput: (value: any) => *,
};
