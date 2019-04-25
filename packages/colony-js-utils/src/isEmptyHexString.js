/* @flow */

export default function isEmptyHexString(hex: string) {
  if (typeof hex !== 'string') return false;

  const prefix = hex.slice(0, 2);
  const rest = [...hex.slice(2)];
  return prefix === '0x' && rest.every(char => char === '0');
}
