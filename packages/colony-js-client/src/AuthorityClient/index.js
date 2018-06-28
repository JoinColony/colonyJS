/* @flow */

import ContractClient from '@colony/colony-js-contract-client';
import { AUTHORITY_ROLES, COMBINED_AUTHORITY_ROLES } from '../constants';

type Address = string;
type AuthorityRole = $Keys<typeof AUTHORITY_ROLES>;
type AuthorityRoles = $Keys<typeof COMBINED_AUTHORITY_ROLES>;

export default class AuthorityClient extends ContractClient {
  /*
  Get the given user's authority roles.
  */
  getUserRoles: AuthorityClient.Caller<
    {
      user: Address, // The user in question.
    },
    {
      roles: AuthorityRoles, // An array of the user's authority roles.
    },
    AuthorityClient,
  >;
  /*
  For the given user's address and role, return true if the user has that role.
  */
  hasUserRole: AuthorityClient.Caller<
    {
      user: Address, // The user in question
      role: AuthorityRole, // The role to be checked.
    },
    {
      hasRole: boolean, // Whether or not the user has the role provided.
    },
    AuthorityClient,
  >;
  /*
  Enable or disable a particular role for a user's address (default behaviour: enable the role).
  */
  setUserRole: AuthorityClient.Sender<
    {
      user: Address, // The user address to be granted (or stripped of) authority.
      role: AuthorityRole, // The authority role.
      enabled?: boolean, // Whether or not that role has been enabled.
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
    const roles = ['roles', 'authorityRoles'];
    this.addCaller('getUserRoles', {
      input: [user],
      output: [roles],
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
