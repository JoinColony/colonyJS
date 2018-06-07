/* @flow */

import ContractClient from '@colony/colony-js-contract-client';
import { AUTHORITY_ROLES } from '../constants';

type Address = string;
type AuthorityRole = $Keys<typeof AUTHORITY_ROLES>;

export default class AuthorityClient extends ContractClient {
  /*
  Get the given user's role.
  */
  getUserRole: AuthorityClient.Caller<
    {
      user: Address,
    },
    {
      role: AuthorityRole,
    },
    AuthorityClient,
  >;
  /*
  For the given user's address and role, return true if the user has that role.
  */
  hasUserRole: AuthorityClient.Caller<
    {
      user: Address,
      role: AuthorityRole,
    },
    {
      hasRole: boolean,
    },
    AuthorityClient,
  >;
  /*
  Enable or disable a particular role for a user's address (default behaviour: enable the role).
  */
  setUserRole: AuthorityClient.Sender<
    {
      user: Address,
      role: AuthorityRole,
      enabled?: boolean,
    },
    {},
    AuthorityClient,
  >;

  static get defaultQuery() {
    return {
      contractName: 'Authority',
    };
  }

  initializeContractMethods() {
    const user = ['user', 'address'];
    const role = ['role', 'authorityRole'];

    this.addCaller('getUserRole', {
      input: [user],
      output: [role],
      functionName: 'getUserRoles',
    });
    this.addCaller('hasUserRole', {
      input: [user, role],
      output: [['hasRole', 'boolean']],
    });
    this.addSender('setUserRole', {
      input: [user, role, ['enabled', 'boolean', true]],
    });
  }
}
