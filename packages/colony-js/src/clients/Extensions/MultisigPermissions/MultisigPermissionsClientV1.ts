import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { MultisigPermissions } from '../../../contracts/MultisigPermissions/1/MultisigPermissions.js';

import { MultisigPermissions__factory as MultisigPermissionsFactory } from '../../../contracts/MultisigPermissions/1/factories/MultisigPermissions__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedMultisigPermissions,
  ValidColony,
} from './augments/commonAugments.js';

export interface MultisigPermissionsClientV1
  extends AugmentedMultisigPermissions<MultisigPermissions> {
  clientVersion: 1;
}

export default function getMultisigPermissionsClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): MultisigPermissionsClientV1 {
  const stagedExpenditureClient = MultisigPermissionsFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as MultisigPermissionsClientV1;

  stagedExpenditureClient.clientType = ClientType.MultisigPermissionsClient;
  stagedExpenditureClient.clientVersion = 1;
  addAugments(stagedExpenditureClient, colonyClient);

  return stagedExpenditureClient;
}
