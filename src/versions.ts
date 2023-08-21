/*
 * Colony Network contract release tags
 *
 * glider-rc.1
 * glider
 * auburn-glider
 * burgundy-glider
 * lwss
 * clwss
 * dlwss
 * elwss
 * elwss2
 * elwss3
 * flwss
 * flwss2
 * flwss3
 * glwss
 * glwss2
 * glwss3
 * glwss4
 *
 */

export const LATEST_TAG = 'glwss4';

// Map versioned contracts to network release tags
export const RELEASE_MAP = {
  IColony: {
    'glider-rc.1': 1,
    glider: 2,
    'auburn-glider': 3,
    'burgundy-glider': 4,
    lwss: 5,
    clwss: 6,
    dlwss: 7,
    elwss3: 8,
    flwss: 9,
    glwss: 10,
    glwss2: 11,
    glwss3: 12,
    glwss4: 13,
    next: 14,
  },
  CoinMachine: {
    clwss: 1,
    dlwss: 2,
    elwss2: 3,
    elwss3: 4,
    flwss: 5,
    glwss: 6,
    glwss2: 7,
    glwss4: 8,
    next: 9,
  },
  EvaluatedExpenditure: {
    elwss: 1,
    flwss: 2,
    glwss2: 3,
    glwss4: 4,
    next: 5,
  },
  FundingQueue: {
    lwss: 1,
    dlwss: 2,
    flwss: 3,
    glwss2: 4,
    glwss4: 5,
    next: 6,
  },
  IVotingReputation: {
    flwss3: 6,
    glwss: 7,
    glwss2: 8,
    glwss4: 9,
    next: 10,
  },
  OneTxPayment: {
    clwss: 1,
    dlwss: 2,
    flwss: 3,
    glwss2: 4,
    glwss4: 5,
    next: 6,
  },
  ReputationBootstrapper: {
    glwss2: 1,
    glwss4: 2,
    next: 3,
  },
  StakedExpenditure: {
    glwss: 1,
    glwss2: 2,
    glwss4: 3,
    next: 4,
  },
  StreamingPayments: {
    glwss: 1,
    glwss4: 2,
    next: 3,
  },
  TokenSupplier: {
    lwss: 1,
    dlwss: 2,
    flwss: 3,
    glwss2: 4,
    glwss4: 5,
    next: 6,
  },
  // VotingReputation got replaced by IVotingReputation, so this does not need to be updated
  VotingReputation: {
    clwss: 1,
    dlwss: 2,
    elwss: 3,
    flwss: 4,
    flwss2: 5,
  },
  Whitelist: {
    elwss: 1,
    flwss: 2,
    glwss2: 3,
    glwss4: 4,
    next: 5,
  },
};
