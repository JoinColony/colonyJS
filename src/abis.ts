import * as metatransactionsToken from './contracts/deploy/MetaTxToken.json';
import * as tokenAuthority from './contracts/deploy/TokenAuthority.json';
import * as vestingSimple from './contracts/vesting/VestingSimple.json';
import * as WrappedToken from './contracts/vesting/WrappedToken.json';

const abis = {
  metatransactionsToken,
  tokenAuthority,
  vestingSimple,
  WrappedToken,
};

export default abis;
