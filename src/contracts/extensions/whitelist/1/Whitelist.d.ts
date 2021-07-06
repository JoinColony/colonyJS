/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from ".";

interface WhitelistInterface extends Interface {
  functions: {
    authority: TypedFunctionDescription<{ encode([]: []): string }>;

    getCapabilityRoles: TypedFunctionDescription<{
      encode([_sig]: [Arrayish]): string;
    }>;

    getColony: TypedFunctionDescription<{ encode([]: []): string }>;

    getDeprecated: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    setAuthority: TypedFunctionDescription<{
      encode([authority_]: [string]): string;
    }>;

    setOwner: TypedFunctionDescription<{ encode([owner_]: [string]): string }>;

    identifier: TypedFunctionDescription<{ encode([]: []): string }>;

    version: TypedFunctionDescription<{ encode([]: []): string }>;

    install: TypedFunctionDescription<{ encode([_colony]: [string]): string }>;

    finishUpgrade: TypedFunctionDescription<{ encode([]: []): string }>;

    deprecate: TypedFunctionDescription<{
      encode([_deprecated]: [boolean]): string;
    }>;

    uninstall: TypedFunctionDescription<{ encode([]: []): string }>;

    initialise: TypedFunctionDescription<{
      encode([_useApprovals, _agreementHash]: [boolean, string]): string;
    }>;

    approveUsers: TypedFunctionDescription<{
      encode([_users, _status]: [string[], boolean]): string;
    }>;

    signAgreement: TypedFunctionDescription<{
      encode([_agreementHash]: [string]): string;
    }>;

    isApproved: TypedFunctionDescription<{ encode([_user]: [string]): string }>;

    getUseApprovals: TypedFunctionDescription<{ encode([]: []): string }>;

    getAgreementHash: TypedFunctionDescription<{ encode([]: []): string }>;

    getApproval: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    getSignature: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;
  };

  events: {
    AgreementSigned: TypedEventDescription<{
      encodeTopics([_user]: [string | null]): string[];
    }>;

    ExtensionInitialised: TypedEventDescription<{
      encodeTopics([]: []): string[];
    }>;

    LogSetAuthority: TypedEventDescription<{
      encodeTopics([authority]: [string | null]): string[];
    }>;

    LogSetOwner: TypedEventDescription<{
      encodeTopics([owner]: [string | null]): string[];
    }>;

    UserApproved: TypedEventDescription<{
      encodeTopics([_user, _status]: [string | null, null]): string[];
    }>;
  };
}

export class Whitelist extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Whitelist;
  attach(addressOrName: string): Whitelist;
  deployed(): Promise<Whitelist>;

  on(event: EventFilter | string, listener: Listener): Whitelist;
  once(event: EventFilter | string, listener: Listener): Whitelist;
  addListener(eventName: EventFilter | string, listener: Listener): Whitelist;
  removeAllListeners(eventName: EventFilter | string): Whitelist;
  removeListener(eventName: any, listener: Listener): Whitelist;

  interface: WhitelistInterface;

  functions: {
    authority(overrides?: TransactionOverrides): Promise<string>;

    "authority()"(overrides?: TransactionOverrides): Promise<string>;

    getCapabilityRoles(
      _sig: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    "getCapabilityRoles(bytes4)"(
      _sig: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    getColony(overrides?: TransactionOverrides): Promise<string>;

    "getColony()"(overrides?: TransactionOverrides): Promise<string>;

    getDeprecated(overrides?: TransactionOverrides): Promise<boolean>;

    "getDeprecated()"(overrides?: TransactionOverrides): Promise<boolean>;

    owner(overrides?: TransactionOverrides): Promise<string>;

    "owner()"(overrides?: TransactionOverrides): Promise<string>;

    setAuthority(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "setAuthority(address)"(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setOwner(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Returns the identifier of the extension
     */
    identifier(overrides?: TransactionOverrides): Promise<string>;

    /**
     * Returns the identifier of the extension
     */
    "identifier()"(overrides?: TransactionOverrides): Promise<string>;

    /**
     * Returns the version of the extension
     */
    version(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the version of the extension
     */
    "version()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Configures the extension
     * @param _colony The colony in which the extension holds permissions
     */
    install(
      _colony: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Configures the extension
     * @param _colony The colony in which the extension holds permissions
     */
    "install(address)"(
      _colony: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Called when upgrading the extension
     */
    "finishUpgrade()"(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(
      _deprecated: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    "deprecate(bool)"(
      _deprecated: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    /**
     * Called when uninstalling the extension
     */
    "uninstall()"(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Initialise the extension
     * @param _agreementHash An agreement hash (such as an IPFS URI)
     * @param _useApprovals Whether or not to require administrative approval
     */
    initialise(
      _useApprovals: boolean,
      _agreementHash: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Initialise the extension
     * @param _agreementHash An agreement hash (such as an IPFS URI)
     * @param _useApprovals Whether or not to require administrative approval
     */
    "initialise(bool,string)"(
      _useApprovals: boolean,
      _agreementHash: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Sets user statuses in the whitelist
     * @param _status The whitelist status to set
     * @param _users An array of user addresses
     */
    approveUsers(
      _users: string[],
      _status: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Sets user statuses in the whitelist
     * @param _status The whitelist status to set
     * @param _users An array of user addresses
     */
    "approveUsers(address[],bool)"(
      _users: string[],
      _status: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * The user's signature on the agreement
     * @param _agreementHash The agreement hash being signed
     */
    signAgreement(
      _agreementHash: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * The user's signature on the agreement
     * @param _agreementHash The agreement hash being signed
     */
    "signAgreement(string)"(
      _agreementHash: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Get the user's overall whitelist status
     * @param _user The address of the user
     */
    isApproved(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    /**
     * Get the user's overall whitelist status
     * @param _user The address of the user
     */
    "isApproved(address)"(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    /**
     * Get the useApprovals boolean
     */
    getUseApprovals(overrides?: TransactionOverrides): Promise<boolean>;

    /**
     * Get the useApprovals boolean
     */
    "getUseApprovals()"(overrides?: TransactionOverrides): Promise<boolean>;

    /**
     * Get the agreementHash
     */
    getAgreementHash(overrides?: TransactionOverrides): Promise<string>;

    /**
     * Get the agreementHash
     */
    "getAgreementHash()"(overrides?: TransactionOverrides): Promise<string>;

    /**
     * Get the user's approval status
     * @param _user The address of the user
     */
    getApproval(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    /**
     * Get the user's approval status
     * @param _user The address of the user
     */
    "getApproval(address)"(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    /**
     * Get the user's signature status
     * @param _user The address of the user
     */
    getSignature(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    /**
     * Get the user's signature status
     * @param _user The address of the user
     */
    "getSignature(address)"(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<boolean>;
  };

  authority(overrides?: TransactionOverrides): Promise<string>;

  "authority()"(overrides?: TransactionOverrides): Promise<string>;

  getCapabilityRoles(
    _sig: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  "getCapabilityRoles(bytes4)"(
    _sig: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  getColony(overrides?: TransactionOverrides): Promise<string>;

  "getColony()"(overrides?: TransactionOverrides): Promise<string>;

  getDeprecated(overrides?: TransactionOverrides): Promise<boolean>;

  "getDeprecated()"(overrides?: TransactionOverrides): Promise<boolean>;

  owner(overrides?: TransactionOverrides): Promise<string>;

  "owner()"(overrides?: TransactionOverrides): Promise<string>;

  setAuthority(
    authority_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "setAuthority(address)"(
    authority_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setOwner(
    owner_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "setOwner(address)"(
    owner_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Returns the identifier of the extension
   */
  identifier(overrides?: TransactionOverrides): Promise<string>;

  /**
   * Returns the identifier of the extension
   */
  "identifier()"(overrides?: TransactionOverrides): Promise<string>;

  /**
   * Returns the version of the extension
   */
  version(overrides?: TransactionOverrides): Promise<BigNumber>;

  /**
   * Returns the version of the extension
   */
  "version()"(overrides?: TransactionOverrides): Promise<BigNumber>;

  /**
   * Configures the extension
   * @param _colony The colony in which the extension holds permissions
   */
  install(
    _colony: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Configures the extension
   * @param _colony The colony in which the extension holds permissions
   */
  "install(address)"(
    _colony: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Called when upgrading the extension
   */
  finishUpgrade(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  /**
   * Called when upgrading the extension
   */
  "finishUpgrade()"(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Called when deprecating (or undeprecating) the extension
   */
  deprecate(
    _deprecated: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Called when deprecating (or undeprecating) the extension
   */
  "deprecate(bool)"(
    _deprecated: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Called when uninstalling the extension
   */
  uninstall(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  /**
   * Called when uninstalling the extension
   */
  "uninstall()"(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  /**
   * Initialise the extension
   * @param _agreementHash An agreement hash (such as an IPFS URI)
   * @param _useApprovals Whether or not to require administrative approval
   */
  initialise(
    _useApprovals: boolean,
    _agreementHash: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Initialise the extension
   * @param _agreementHash An agreement hash (such as an IPFS URI)
   * @param _useApprovals Whether or not to require administrative approval
   */
  "initialise(bool,string)"(
    _useApprovals: boolean,
    _agreementHash: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Sets user statuses in the whitelist
   * @param _status The whitelist status to set
   * @param _users An array of user addresses
   */
  approveUsers(
    _users: string[],
    _status: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Sets user statuses in the whitelist
   * @param _status The whitelist status to set
   * @param _users An array of user addresses
   */
  "approveUsers(address[],bool)"(
    _users: string[],
    _status: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * The user's signature on the agreement
   * @param _agreementHash The agreement hash being signed
   */
  signAgreement(
    _agreementHash: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * The user's signature on the agreement
   * @param _agreementHash The agreement hash being signed
   */
  "signAgreement(string)"(
    _agreementHash: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Get the user's overall whitelist status
   * @param _user The address of the user
   */
  isApproved(_user: string, overrides?: TransactionOverrides): Promise<boolean>;

  /**
   * Get the user's overall whitelist status
   * @param _user The address of the user
   */
  "isApproved(address)"(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  /**
   * Get the useApprovals boolean
   */
  getUseApprovals(overrides?: TransactionOverrides): Promise<boolean>;

  /**
   * Get the useApprovals boolean
   */
  "getUseApprovals()"(overrides?: TransactionOverrides): Promise<boolean>;

  /**
   * Get the agreementHash
   */
  getAgreementHash(overrides?: TransactionOverrides): Promise<string>;

  /**
   * Get the agreementHash
   */
  "getAgreementHash()"(overrides?: TransactionOverrides): Promise<string>;

  /**
   * Get the user's approval status
   * @param _user The address of the user
   */
  getApproval(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  /**
   * Get the user's approval status
   * @param _user The address of the user
   */
  "getApproval(address)"(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  /**
   * Get the user's signature status
   * @param _user The address of the user
   */
  getSignature(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  /**
   * Get the user's signature status
   * @param _user The address of the user
   */
  "getSignature(address)"(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  filters: {
    AgreementSigned(_user: string | null): EventFilter;

    ExtensionInitialised(): EventFilter;

    LogSetAuthority(authority: string | null): EventFilter;

    LogSetOwner(owner: string | null): EventFilter;

    UserApproved(_user: string | null, _status: null): EventFilter;
  };

  estimate: {
    authority(overrides?: TransactionOverrides): Promise<BigNumber>;

    "authority()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    getCapabilityRoles(
      _sig: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getCapabilityRoles(bytes4)"(
      _sig: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getColony(overrides?: TransactionOverrides): Promise<BigNumber>;

    "getColony()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    getDeprecated(overrides?: TransactionOverrides): Promise<BigNumber>;

    "getDeprecated()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    owner(overrides?: TransactionOverrides): Promise<BigNumber>;

    "owner()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    setAuthority(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "setAuthority(address)"(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    setOwner(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "setOwner(address)"(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the identifier of the extension
     */
    identifier(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the identifier of the extension
     */
    "identifier()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the version of the extension
     */
    version(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Returns the version of the extension
     */
    "version()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Configures the extension
     * @param _colony The colony in which the extension holds permissions
     */
    install(
      _colony: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Configures the extension
     * @param _colony The colony in which the extension holds permissions
     */
    "install(address)"(
      _colony: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Called when upgrading the extension
     */
    finishUpgrade(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Called when upgrading the extension
     */
    "finishUpgrade()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    deprecate(
      _deprecated: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Called when deprecating (or undeprecating) the extension
     */
    "deprecate(bool)"(
      _deprecated: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Called when uninstalling the extension
     */
    uninstall(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Called when uninstalling the extension
     */
    "uninstall()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Initialise the extension
     * @param _agreementHash An agreement hash (such as an IPFS URI)
     * @param _useApprovals Whether or not to require administrative approval
     */
    initialise(
      _useApprovals: boolean,
      _agreementHash: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Initialise the extension
     * @param _agreementHash An agreement hash (such as an IPFS URI)
     * @param _useApprovals Whether or not to require administrative approval
     */
    "initialise(bool,string)"(
      _useApprovals: boolean,
      _agreementHash: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Sets user statuses in the whitelist
     * @param _status The whitelist status to set
     * @param _users An array of user addresses
     */
    approveUsers(
      _users: string[],
      _status: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Sets user statuses in the whitelist
     * @param _status The whitelist status to set
     * @param _users An array of user addresses
     */
    "approveUsers(address[],bool)"(
      _users: string[],
      _status: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * The user's signature on the agreement
     * @param _agreementHash The agreement hash being signed
     */
    signAgreement(
      _agreementHash: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * The user's signature on the agreement
     * @param _agreementHash The agreement hash being signed
     */
    "signAgreement(string)"(
      _agreementHash: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Get the user's overall whitelist status
     * @param _user The address of the user
     */
    isApproved(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Get the user's overall whitelist status
     * @param _user The address of the user
     */
    "isApproved(address)"(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Get the useApprovals boolean
     */
    getUseApprovals(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Get the useApprovals boolean
     */
    "getUseApprovals()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Get the agreementHash
     */
    getAgreementHash(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Get the agreementHash
     */
    "getAgreementHash()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    /**
     * Get the user's approval status
     * @param _user The address of the user
     */
    getApproval(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Get the user's approval status
     * @param _user The address of the user
     */
    "getApproval(address)"(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Get the user's signature status
     * @param _user The address of the user
     */
    getSignature(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Get the user's signature status
     * @param _user The address of the user
     */
    "getSignature(address)"(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}