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

interface OneTxPaymentInterface extends Interface {
  functions: {
    authority: TypedFunctionDescription<{ encode([]: []): string }>;

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

    getCapabilityRoles: TypedFunctionDescription<{
      encode([_sig]: [Arrayish]): string;
    }>;

    makePayment: TypedFunctionDescription<{
      encode([
        _permissionDomainId,
        _childSkillIndex,
        _callerPermissionDomainId,
        _callerChildSkillIndex,
        _workers,
        _tokens,
        _amounts,
        _domainId,
        _skillId,
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string[],
        string[],
        BigNumberish[],
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    makePaymentFundedFromDomain: TypedFunctionDescription<{
      encode([
        _permissionDomainId,
        _childSkillIndex,
        _callerPermissionDomainId,
        _callerChildSkillIndex,
        _workers,
        _tokens,
        _amounts,
        _domainId,
        _skillId,
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string[],
        string[],
        BigNumberish[],
        BigNumberish,
        BigNumberish
      ]): string;
    }>;
  };

  events: {
    ExtensionInitialised: TypedEventDescription<{
      encodeTopics([]: []): string[];
    }>;

    LogSetAuthority: TypedEventDescription<{
      encodeTopics([authority]: [string | null]): string[];
    }>;

    LogSetOwner: TypedEventDescription<{
      encodeTopics([owner]: [string | null]): string[];
    }>;

    OneTxPaymentMade: TypedEventDescription<{
      encodeTopics([agent, fundamentalId, nPayouts]: [
        null,
        null,
        null
      ]): string[];
    }>;
  };
}

export class OneTxPayment extends Contract {
  connect(signerOrProvider: Signer | Provider | string): OneTxPayment;
  attach(addressOrName: string): OneTxPayment;
  deployed(): Promise<OneTxPayment>;

  on(event: EventFilter | string, listener: Listener): OneTxPayment;
  once(event: EventFilter | string, listener: Listener): OneTxPayment;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): OneTxPayment;
  removeAllListeners(eventName: EventFilter | string): OneTxPayment;
  removeListener(eventName: any, listener: Listener): OneTxPayment;

  interface: OneTxPaymentInterface;

  functions: {
    authority(overrides?: TransactionOverrides): Promise<string>;

    "authority()"(overrides?: TransactionOverrides): Promise<string>;

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
     * Return the permissions required for each function
     * @param _sig The function signature
     */
    getCapabilityRoles(
      _sig: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    /**
     * Return the permissions required for each function
     * @param _sig The function signature
     */
    "getCapabilityRoles(bytes4)"(
      _sig: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    /**
     * Assumes that each entity holds administration and funding roles in the root domain
     * Completes a colony payment in a single transaction
     * @param _amounts amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePayment(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Assumes that each entity holds administration and funding roles in the root domain
     * Completes a colony payment in a single transaction
     * @param _amounts amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    "makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)"(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
     * Completes a colony payment in a single transaction
     * @param _amounts The amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentFundedFromDomain(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
     * Completes a colony payment in a single transaction
     * @param _amounts The amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    "makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)"(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  authority(overrides?: TransactionOverrides): Promise<string>;

  "authority()"(overrides?: TransactionOverrides): Promise<string>;

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
   * Return the permissions required for each function
   * @param _sig The function signature
   */
  getCapabilityRoles(
    _sig: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  /**
   * Return the permissions required for each function
   * @param _sig The function signature
   */
  "getCapabilityRoles(bytes4)"(
    _sig: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  /**
   * Assumes that each entity holds administration and funding roles in the root domain
   * Completes a colony payment in a single transaction
   * @param _amounts amounts of the tokens being paid out
   * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
   * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
   * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
   * @param _domainId The domainId the payment should be coming from
   * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
   * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
   * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
   * @param _workers The addresses of the recipients of the payment
   */
  makePayment(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _callerPermissionDomainId: BigNumberish,
    _callerChildSkillIndex: BigNumberish,
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Assumes that each entity holds administration and funding roles in the root domain
   * Completes a colony payment in a single transaction
   * @param _amounts amounts of the tokens being paid out
   * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
   * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
   * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
   * @param _domainId The domainId the payment should be coming from
   * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
   * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
   * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
   * @param _workers The addresses of the recipients of the payment
   */
  "makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)"(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _callerPermissionDomainId: BigNumberish,
    _callerChildSkillIndex: BigNumberish,
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
   * Completes a colony payment in a single transaction
   * @param _amounts The amounts of the tokens being paid out
   * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
   * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
   * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
   * @param _domainId The domainId the payment should be coming from
   * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
   * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
   * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
   * @param _workers The addresses of the recipients of the payment
   */
  makePaymentFundedFromDomain(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _callerPermissionDomainId: BigNumberish,
    _callerChildSkillIndex: BigNumberish,
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
   * Completes a colony payment in a single transaction
   * @param _amounts The amounts of the tokens being paid out
   * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
   * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
   * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
   * @param _domainId The domainId the payment should be coming from
   * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
   * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
   * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
   * @param _workers The addresses of the recipients of the payment
   */
  "makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)"(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _callerPermissionDomainId: BigNumberish,
    _callerChildSkillIndex: BigNumberish,
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    ExtensionInitialised(): EventFilter;

    LogSetAuthority(authority: string | null): EventFilter;

    LogSetOwner(owner: string | null): EventFilter;

    OneTxPaymentMade(
      agent: null,
      fundamentalId: null,
      nPayouts: null
    ): EventFilter;
  };

  estimate: {
    authority(overrides?: TransactionOverrides): Promise<BigNumber>;

    "authority()"(overrides?: TransactionOverrides): Promise<BigNumber>;

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
     * Return the permissions required for each function
     * @param _sig The function signature
     */
    getCapabilityRoles(
      _sig: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Return the permissions required for each function
     * @param _sig The function signature
     */
    "getCapabilityRoles(bytes4)"(
      _sig: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Assumes that each entity holds administration and funding roles in the root domain
     * Completes a colony payment in a single transaction
     * @param _amounts amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePayment(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Assumes that each entity holds administration and funding roles in the root domain
     * Completes a colony payment in a single transaction
     * @param _amounts amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has the administration permission (must have funding in root)
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    "makePayment(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)"(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
     * Completes a colony payment in a single transaction
     * @param _amounts The amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentFundedFromDomain(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    /**
     * Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
     * Completes a colony payment in a single transaction
     * @param _amounts The amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The domainId the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The skillId that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    "makePaymentFundedFromDomain(uint256,uint256,uint256,uint256,address[],address[],uint256[],uint256,uint256)"(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}
