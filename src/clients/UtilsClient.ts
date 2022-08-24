import { BigNumber, BytesLike, CallOverrides, utils } from 'ethers';

import { ClientType, ColonyRole, SignerOrProvider } from '../types';

import { Utils, Utils__factory as UtilsFactory } from '../contracts';
import { nonNullable } from '../utils';

export interface UtilsClient extends Utils {
  clientType: ClientType.UtilsClient;

  getCapabilityRolesAsArray(
    _sig: BytesLike,
    overrides?: CallOverrides,
  ): Promise<ColonyRole[]>;
}

async function getCapabilityRolesAsArray(
  this: Utils,
  _sig: BytesLike,
  overrides: CallOverrides = {},
): Promise<ColonyRole[]> {
  const rolesHexString = await this.getCapabilityRoles(
    utils.hexZeroPad(_sig, 4),
    overrides,
  );
  const rolesNum = BigNumber.from(rolesHexString);
  return [...Array(ColonyRole.LAST_ROLE).keys()]
    .map((i) => {
      if (rolesNum.shr(i).mask(1).eq(1)) {
        return i as ColonyRole;
      }
      return null;
    })
    .filter(nonNullable);
}

/** @internal */
const getUtilsClient = (
  address: string,
  signerOrProvider: SignerOrProvider,
): UtilsClient => {
  const utilsClient = UtilsFactory.connect(
    address,
    signerOrProvider,
  ) as UtilsClient;

  utilsClient.clientType = ClientType.UtilsClient;
  utilsClient.getCapabilityRolesAsArray =
    getCapabilityRolesAsArray.bind(utilsClient);

  return utilsClient;
};

export default getUtilsClient;
