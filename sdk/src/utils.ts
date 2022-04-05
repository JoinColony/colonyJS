import { ContractReceipt } from 'ethers';

export const extractEvent = <T>(
  eventName: string,
  receipt: ContractReceipt,
): T | undefined => {
  if (receipt.events) {
    const event = receipt.events.find((ev) => ev.event === eventName);
    if (event?.args) {
      return event.args as ReadonlyArray<unknown> & T;
    }
  }
  return undefined;
};
