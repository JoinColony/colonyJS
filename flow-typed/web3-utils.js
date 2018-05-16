/* @flow */

// eslint-disable-next-line no-unused-vars
import type BigNumber from 'bn.js';

// Very simple type definitions for web3-utils (just the things that we use)

declare module 'web3-utils' {
  declare export function BN(input: string | number): BigNumber;
  declare export function isBN(input: any): boolean;
  declare export function isBigNumber(input: any): boolean;
  declare export function sha3(str: string): string;
  declare export function soliditySha3(input: any): string;
  declare export function isHex(input: any): boolean;
  declare export function isHexStrict(input: any): boolean;
  declare export function isAddress(input: any): boolean;
  declare export function toBN(input: any): BigNumber;
  // TODO fill these out, see https://web3js.readthedocs.io/en/1.0/web3-utils.html
  declare export function isBloom(input: any): boolean;
  declare export function isTopic(input: any): boolean;
  declare export function checkAddressChecksum(address: string): boolean;
  declare export function utf8ToHex(utf8String: string): string;
  declare export function hexToUtf8(hex: string): string;
  declare export function hexToNumber(hex: string): number;
  declare export function hexToNumberString(hex: string): string;
  declare export function numberToHex(n: number): string;
  declare export function toHex(input: any): string;
  declare export function hexToBytes(hex: string): Array<number>;
  declare export function bytesToHex(bytes: string): string;
  declare export function keccak256(input: string): string;
  declare export function padLeft(
    input: string | number,
    characterAmount: number,
    sign?: string,
  ): string;
  declare export function padRight(
    input: string | number,
    characterAmount: number,
    sign?: string,
  ): string;
  declare export function toTwosComplement(
    n: number | string | BigNumber,
  ): string;
  declare export function sha3(): string;
  declare export function toDecimal(input: any): number;
}
