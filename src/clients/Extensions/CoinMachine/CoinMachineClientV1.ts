import { CoinMachine__factory as CoinMachineFactory } from '../../../contracts/CoinMachine/1/factories/CoinMachine__factory';
import { CoinMachine } from '../../../contracts/CoinMachine/1/CoinMachine';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import { addAugments, AugmentedCoinMachine } from './augments/commonAugments';

/**
 * An instantiated [ethers](https://docs.ethers.io/v5/) contract for the [CoinMachine contract](https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/extensions/CoinMachine.sol) in version 1, with certain augmentations added. Pay attention to the existence of `...WithProofs` or `...Checked` functions as these provide convenient helpers to figure out permission proofs and contract checks for you.
 */
export interface CoinMachineClientV1 extends AugmentedCoinMachine<CoinMachine> {
  clientVersion: 1;
}

export default function getCoinMachineClient(
  colonyClient: AugmentedIColony,
  address: string,
): CoinMachineClientV1 {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClientV1;

  coinMachineClient.clientVersion = 1;
  addAugments(coinMachineClient, colonyClient);

  return coinMachineClient;
}
