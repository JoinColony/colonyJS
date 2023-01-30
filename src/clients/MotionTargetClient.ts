import { BigNumber, BytesLike, CallOverrides, utils } from 'ethers';

import { SignerOrProvider } from '../types';
import { ClientType, ColonyRole } from '../constants';

import {
  MotionTarget,
  MotionTarget__factory as MotionTargetFactory,
} from '../contracts';
import { nonNullable } from '../utils';

export interface MotionTargetClient extends MotionTarget {
  clientType: ClientType.MotionTargetClient;

  getCapabilityRolesAsArray(
    _sig: BytesLike,
    overrides?: CallOverrides,
  ): Promise<ColonyRole[]>;
}

async function getCapabilityRolesAsArray(
  this: MotionTarget,
  _sig: BytesLike,
  overrides: CallOverrides = {},
): Promise<ColonyRole[]> {
  let rolesHexString: string;
  try {
    // This will work if the target has the getCapabilityRoles method
    rolesHexString = await this.getCapabilityRoles(
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
  } catch (e) {
    // Otherwise we assume that the encoded method is not permissioned
    return [];
  }
}

/** @internal */
const getMotionTargetClient = (
  address: string,
  signerOrProvider: SignerOrProvider,
): MotionTargetClient => {
  const motionTargetClient = MotionTargetFactory.connect(
    address,
    signerOrProvider,
  ) as MotionTargetClient;

  motionTargetClient.clientType = ClientType.MotionTargetClient;
  motionTargetClient.getCapabilityRolesAsArray =
    getCapabilityRolesAsArray.bind(motionTargetClient);

  return motionTargetClient;
};

export default getMotionTargetClient;
