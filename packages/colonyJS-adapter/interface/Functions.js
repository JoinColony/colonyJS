/* @flow */

import type BigNumber from 'bn.js';

import type { Transaction } from './Transaction';
import type { TransactionDescription } from './TransactionDescription';

export type CallFn<args, returns> = (...args) => Promise<returns>;
export type SendFn<args> = (...args) => Promise<Transaction>;
export type EstimateFn<args> = (...args) => Promise<BigNumber>;
export type InterfaceFn<args> = (...args) => TransactionDescription;
