import { Contract } from 'ethers';

import { ColonyVersions } from '../../../versions';

export { ColonyVersions } from '../../../versions';

export interface ColonyClient<C extends Contract> {
  readonly address: string;

  readonly contract?: C;

  readonly version: ColonyVersions;
}
