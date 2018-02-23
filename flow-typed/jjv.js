/* @flow */

declare module 'jvv' {
  declare type Options = {
    useDefault?: boolean,
    useCoerce?: boolean,
    checkRequired?: boolean,
    removeAdditional?: boolean,
  };

  declare class JJV {
    schema: {};
    validate(name: string, object: {}, options: Options): boolean;
    addType(name: string, func: (value: *) => boolean): void;
    addTypeCoercion(type: *, func: (value: *) => *): void;
    addCheck(name: string, func: (*) => *): void;
    addFormat(name: string, func: (value: string) => boolean): void;
    addSchema(name: string, schema: {}): void;
  }
  declare module.exports: typeof JJV;
}
