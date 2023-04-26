type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export const createContractVersionArray = <T extends number>(last: T) => {
  return Array.from(Array(last - 1)).map(
    (i) => (i + 1) as Range<1, typeof last>,
  );
};
