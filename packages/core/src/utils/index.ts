/** @internal */
export const assertExhaustiveSwitch = (x: never, msg: string): never => {
  throw new Error(`${msg}: ${x}`);
};

/** @internal */
export const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};
