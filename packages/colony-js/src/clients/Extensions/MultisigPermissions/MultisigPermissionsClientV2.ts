import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { MultisigPermissions } from '../../../contracts/MultisigPermissions/2/MultisigPermissions.js';

import { MultisigPermissions__factory as MultisigPermissionsFactory } from '../../../contracts/MultisigPermissions/2/factories/MultisigPermissions__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedMultisigPermissions,
  type ValidColony,
} from './augments/commonAugments.js';

export interface MultisigPermissionsClientV2
  extends AugmentedMultisigPermissions<MultisigPermissions> {
  clientVersion: 2;
}

export default function getMultisigPermissionsClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): MultisigPermissionsClientV2 {
  const stagedExpenditureClient = MultisigPermissionsFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as MultisigPermissionsClientV2;

  stagedExpenditureClient.clientType = ClientType.MultisigPermissionsClient;
  stagedExpenditureClient.clientVersion = 2;
  addAugments(stagedExpenditureClient, colonyClient);

  return stagedExpenditureClient;
}
