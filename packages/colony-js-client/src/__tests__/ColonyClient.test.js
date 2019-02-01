/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';

import ColonyClient from '../ColonyClient';
import TokenClient from '../TokenClient';
import TokenLockingClient from '../TokenLockingClient';
import ColonyNetworkClient from '../ColonyNetworkClient';

const colonyEvents = [
  'DomainAdded',
  'PotAdded',
  'TaskAdded',
  'TaskCompleted',
  'RewardPayoutCycleStarted',
  'RewardPayoutCycleEnded',
  'TaskBriefSet',
  'TaskDueDateSet',
  'TaskDomainSet',
  'TaskSkillSet',
  'TaskRoleUserSet',
  'TaskPayoutSet',
  'TaskDeliverableSubmitted',
  'TaskWorkRatingRevealed',
  'TaskPayoutClaimed',
  'TaskFinalized',
  'TaskCanceled',
  'ColonyInitialised',
  'ColonyUpgraded',
  'ColonyBootstrapped',
  'ColonyFounderRoleSet',
  'ColonyAdminRoleSet',
  'ColonyAdminRoleRemoved',
  'ColonyFundsMovedBetweenFundingPots',
  'ColonyFundsClaimed',
  'ColonyRewardInverseSet',
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
          SkillAdded: 'SkillAdded interface',
        },
      },
    };
    networkClient.events = {
      SkillAdded: 'SkillAdded ContractEvent',
    };

    const tokenClient = new TokenClient({ adapter });
    tokenClient._contract = {
      interface: {
        events: {
          Transfer: 'Transfer interface',
        },
      },
    };
    tokenClient.events = {
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
    expect(withoutToken.events).not.toHaveProperty('SkillAdded');
    expect(withoutToken.contract.interface.events).not.toHaveProperty(
      'SkillAdded',
    );

    // Initialize the ColonyClient
    withoutToken.initializeContractMethods();

    // Events from the ColonyNetworkClient should have been set on
    // the ColonyClient
    expect(withoutToken).toHaveProperty(
      'events',
      expect.objectContaining({ SkillAdded: networkClient.events.SkillAdded }),
    );
    expect(withoutToken.contract.interface).toHaveProperty(
      'events',
      expect.objectContaining({
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
    expect(withToken.events).not.toHaveProperty('Transfer');
    expect(withToken.contract.interface.events).not.toHaveProperty('Transfer');

    // Initialize the ColonyClient
    withToken.initializeContractMethods();

    // Events from the TokenClient should have been set on the ColonyClient
    expect(withToken).toHaveProperty(
      'events',
      expect.objectContaining({ Transfer: tokenClient.events.Transfer }),
    );
    expect(withToken.contract.interface).toHaveProperty(
      'events',
      expect.objectContaining({
        Transfer: tokenClient.contract.interface.events.Transfer,
        TaskAdded: contract.interface.events.TaskAdded,
      }),
    );
  });
});
