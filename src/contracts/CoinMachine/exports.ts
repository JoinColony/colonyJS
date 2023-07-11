// Always add the next CoinMachine version here
import type { CoinMachine as CoinMachine1 } from './1';
import type { CoinMachine as CoinMachine2 } from './2';
import type { CoinMachine as CoinMachine3 } from './3';
import type { CoinMachine as CoinMachine4 } from './4';
import type { CoinMachine as CoinMachine5 } from './5';
import type { CoinMachine as CoinMachine6 } from './6';
import type { CoinMachine as CoinMachine7 } from './7';
import type { CoinMachine as CoinMachine8 } from './8';

// Always adjust to the latest factory
export { CoinMachine__factory as CoinMachineFactory } from './8/factories/CoinMachine__factory';

export type CoinMachineV1 = CoinMachine1;
export type CoinMachineV2 = CoinMachine2;
export type CoinMachineV3 = CoinMachine3;
export type CoinMachineV4 = CoinMachine4;
export type CoinMachineV5 = CoinMachine5;
export type CoinMachineV6 = CoinMachine6;
export type CoinMachineV7 = CoinMachine7;
export type CoinMachineV8 = CoinMachine8;

export type AnyCoinMachine =
  | CoinMachine1
  | CoinMachine2
  | CoinMachine3
  | CoinMachine4
  | CoinMachine5
  | CoinMachine6
  | CoinMachine7
  | CoinMachine8;
