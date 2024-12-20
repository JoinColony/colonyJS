/** Make sure to use all possible options in a switch statement */
export const assertExhaustiveSwitch = (x: never, msg: string): never => {
  throw new Error(`${msg}: ${x}`);
};

/** Use this to filter empty undefinied values from arrays in a type-safe way */
export const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};
