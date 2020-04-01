import { Contract } from 'ethers';

import { ColonyVersions } from '../../../versions';

export interface ColonyClient<C = Contract, E = {}> {
  readonly address: string;
  readonly contract: C;
  readonly estimate: E;
  readonly clientVersion: ColonyVersions;
}
