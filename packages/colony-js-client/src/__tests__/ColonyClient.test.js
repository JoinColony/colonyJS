/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';

import ColonyClient from '../ColonyClient';
import TokenClient from '../TokenClient';
import TokenLockingClient from '../TokenLockingClient';
import ColonyNetworkClient from '../ColonyNetworkClient';

const colonyEvents = [
  'ColonyAdministrationRoleSet',
  'ColonyArchitectureRoleSet',
  'ColonyBootstrapped',
  'ColonyFundingRoleSet',
  'ColonyFundsClaimed',
  'ColonyFundsMovedBetweenFundingPots',
  'ColonyInitialised',
  'ColonyRewardInverseSet',
  'ColonyRootRoleSet',
  'ColonyUpgraded',
  'DomainAdded',
  'FundingPotAdded',
  'PaymentAdded',
  'PayoutClaimed',
  'RewardPayoutClaimed',
  'RewardPayoutCycleEnded',
  'RewardPayoutCycleStarted',
  'TaskAdded',
  'TaskBriefSet',
  'TaskCanceled',
  'TaskCompleted',
  'TaskDeliverableSubmitted',
  'TaskDomainSet',
  'TaskDueDateSet',
  'TaskFinalized',
  'TaskPayoutSet',
  'TaskRoleUserSet',
  'TaskSkillSet',
  'TaskWorkRatingRevealed',
];

const contract = {
  interface: {
    events: colonyEvents.reduce(
      (acc, eventName, i) => ({
        ...acc,
        [eventName]: {
          topics: [`0x${i}`],
        },
      }),
      {},
    ),
  },
};

describe('ColonyClient', () => {
  const sandbox = createSandbox();

  const adapter = {
    getContract: sandbox.fn().mockImplementation(async () => contract),
  };

  test('It supports events from connected contract clients', () => {
    const networkClient = new ColonyNetworkClient({ adapter });
    networkClient._contract = {
      interface: {
        events: {
          ColonyLabelRegistered: 'ColonyLabelRegistered interface',
          SkillAdded: 'SkillAdded interface',
        },
      },
    };
    networkClient.events = {
      ColonyLabelRegistered: 'ColonyLabelRegistered ContractEvent',
      SkillAdded: 'SkillAdded ContractEvent',
    };

    const tokenClient = new TokenClient({ adapter });
    tokenClient._contract = {
      interface: {
        events: {
          Mint: 'Mint interface',
          Transfer: 'Transfer interface',
        },
      },
    };
    tokenClient.events = {
      Mint: 'Mint ContractEvent',
      Transfer: 'Transfer ContractEvent',
    };

    const tokenLockingClient = new TokenLockingClient({ adapter });
    tokenLockingClient._contract = {
      interface: {
        events: {
          TokenLocked: 'TokenLocked interface',
        },
      },
    };
    tokenLockingClient.events = {
      TokenLocked: 'TokenLocked ContractEvent',
    };

    // Create a ColonyClient without a TokenClient
    const withoutToken = new ColonyClient({
      adapter,
      networkClient,
      tokenLockingClient,
    });
    withoutToken._contract = contract;

    // The networkClient should have been set
    expect(withoutToken).toHaveProperty('networkClient', networkClient);

    // Since the ColonyClient hasn't been initialized, we should not expect
    // events from the ColonyNetworkClient to have been set.
    expect(withoutToken.events).not.toHaveProperty('ColonyLabelRegistered');
    expect(withoutToken.events).not.toHaveProperty('SkillAdded');
    expect(withoutToken.contract.interface.events).not.toHaveProperty(
      'ColonyLabelRegistered',
    );
    expect(withoutToken.contract.interface.events).not.toHaveProperty(
      'SkillAdded',
    );

    // Initialize the ColonyClient
    withoutToken.initializeContractMethods();

    // Events from the ColonyNetworkClient should have been set on
    // the ColonyClient
    expect(withoutToken).toHaveProperty(
      'events',
      expect.objectContaining({
        ColonyLabelRegistered: networkClient.events.ColonyLabelRegistered,
        SkillAdded: networkClient.events.SkillAdded,
      }),
    );
    expect(withoutToken.contract.interface).toHaveProperty(
      'events',
      expect.objectContaining({
        ColonyLabelRegistered:
          networkClient.contract.interface.events.ColonyLabelRegistered,
        SkillAdded: networkClient.contract.interface.events.SkillAdded,
        TaskAdded: contract.interface.events.TaskAdded,
      }),
    );

    // Create a ColonyClient with a TokenClient
    const withToken = new ColonyClient({
      adapter,
      networkClient,
      tokenClient,
      tokenLockingClient,
    });
    withToken._contract = contract;

    // The token client should be set
    expect(withToken).toHaveProperty('tokenClient', tokenClient);

    // Since it hasn't been initialized yet, we should not expect events from
    // the TokenClient to have been set on the ColonyClient
    expect(withToken.events).not.toHaveProperty('Mint');
    expect(withToken.events).not.toHaveProperty('Transfer');
    expect(withToken.contract.interface.events).not.toHaveProperty('Mint');
    expect(withToken.contract.interface.events).not.toHaveProperty('Transfer');

    // Initialize the ColonyClient
    withToken.initializeContractMethods();

    // Events from the TokenClient should have been set on the ColonyClient
    expect(withToken).toHaveProperty(
      'events',
      expect.objectContaining({
        Mint: tokenClient.events.Mint,
        Transfer: tokenClient.events.Transfer,
      }),
    );
    expect(withToken.contract.interface).toHaveProperty(
      'events',
      expect.objectContaining({
        Mint: tokenClient.contract.interface.events.Mint,
        Transfer: tokenClient.contract.interface.events.Transfer,
        TaskAdded: contract.interface.events.TaskAdded,
      }),
    );
  });
});
