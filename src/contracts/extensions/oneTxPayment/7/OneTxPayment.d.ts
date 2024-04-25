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

    deprecate: TypedFunctionDescription<{
      encode([_deprecated]: [boolean]): string;
    }>;

    executeMetaTransaction: TypedFunctionDescription<{
      encode([_user, _payload, _sigR, _sigS, _sigV]: [
        string,
        Arrayish,
        Arrayish,
        Arrayish,
        BigNumberish
      ]): string;
    }>;

    finishUpgrade: TypedFunctionDescription<{ encode([]: []): string }>;

    getCapabilityRoles: TypedFunctionDescription<{
      encode([_sig]: [Arrayish]): string;
    }>;

    getColony: TypedFunctionDescription<{ encode([]: []): string }>;

    getDeprecated: TypedFunctionDescription<{ encode([]: []): string }>;

    getMetatransactionNonce: TypedFunctionDescription<{
      encode([userAddress]: [string]): string;
    }>;

    identifier: TypedFunctionDescription<{ encode([]: []): string }>;

    install: TypedFunctionDescription<{ encode([_colony]: [string]): string }>;

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

    multicall: TypedFunctionDescription<{
      encode([data]: [Arrayish[]]): string;
    }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    setAuthority: TypedFunctionDescription<{
      encode([authority_]: [string]): string;
    }>;

    setOwner: TypedFunctionDescription<{ encode([owner_]: [string]): string }>;

    uninstall: TypedFunctionDescription<{ encode([]: []): string }>;

    verify: TypedFunctionDescription<{
      encode([_user, _nonce, _chainId, _payload, _sigR, _sigS, _sigV]: [
        string,
        BigNumberish,
        BigNumberish,
        Arrayish,
        Arrayish,
        Arrayish,
        BigNumberish
      ]): string;
    }>;

    version: TypedFunctionDescription<{ encode([]: []): string }>;
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

    MetaTransactionExecuted: TypedEventDescription<{
      encodeTopics([user, relayerAddress, functionSignature]: [
        null,
        null,
        null
      ]): string[];
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

    deprecate(
      _deprecated: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "deprecate(bool)"(
      _deprecated: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    executeMetaTransaction(
      _user: string,
      _payload: Arrayish,
      _sigR: Arrayish,
      _sigS: Arrayish,
      _sigV: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      _user: string,
      _payload: Arrayish,
      _sigR: Arrayish,
      _sigS: Arrayish,
      _sigV: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    finishUpgrade(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "finishUpgrade()"(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

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

    getMetatransactionNonce(
      userAddress: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getMetatransactionNonce(address)"(
      userAddress: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    identifier(overrides?: TransactionOverrides): Promise<string>;

    "identifier()"(overrides?: TransactionOverrides): Promise<string>;

    install(
      _colony: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "install(address)"(
      _colony: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

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

    multicall(
      data: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "multicall(bytes[])"(
      data: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

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

    uninstall(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    "uninstall()"(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    verify(
      _user: string,
      _nonce: BigNumberish,
      _chainId: BigNumberish,
      _payload: Arrayish,
      _sigR: Arrayish,
      _sigS: Arrayish,
      _sigV: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)"(
      _user: string,
      _nonce: BigNumberish,
      _chainId: BigNumberish,
      _payload: Arrayish,
      _sigR: Arrayish,
      _sigS: Arrayish,
      _sigV: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    version(overrides?: TransactionOverrides): Promise<BigNumber>;

    "version()"(overrides?: TransactionOverrides): Promise<BigNumber>;
  };

  authority(overrides?: TransactionOverrides): Promise<string>;

  "authority()"(overrides?: TransactionOverrides): Promise<string>;

  deprecate(
    _deprecated: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "deprecate(bool)"(
    _deprecated: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  executeMetaTransaction(
    _user: string,
    _payload: Arrayish,
    _sigR: Arrayish,
    _sigS: Arrayish,
    _sigV: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
    _user: string,
    _payload: Arrayish,
    _sigR: Arrayish,
    _sigS: Arrayish,
    _sigV: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  finishUpgrade(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  "finishUpgrade()"(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

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

  getMetatransactionNonce(
    userAddress: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  "getMetatransactionNonce(address)"(
    userAddress: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  identifier(overrides?: TransactionOverrides): Promise<string>;

  "identifier()"(overrides?: TransactionOverrides): Promise<string>;

  install(
    _colony: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "install(address)"(
    _colony: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

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

  multicall(
    data: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "multicall(bytes[])"(
    data: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

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

  uninstall(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  "uninstall()"(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  verify(
    _user: string,
    _nonce: BigNumberish,
    _chainId: BigNumberish,
    _payload: Arrayish,
    _sigR: Arrayish,
    _sigS: Arrayish,
    _sigV: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)"(
    _user: string,
    _nonce: BigNumberish,
    _chainId: BigNumberish,
    _payload: Arrayish,
    _sigR: Arrayish,
    _sigS: Arrayish,
    _sigV: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  version(overrides?: TransactionOverrides): Promise<BigNumber>;

  "version()"(overrides?: TransactionOverrides): Promise<BigNumber>;

  filters: {
    ExtensionInitialised(): EventFilter;

    LogSetAuthority(authority: string | null): EventFilter;

    LogSetOwner(owner: string | null): EventFilter;

    MetaTransactionExecuted(
      user: null,
      relayerAddress: null,
      functionSignature: null
    ): EventFilter;

    OneTxPaymentMade(
      agent: null,
      fundamentalId: null,
      nPayouts: null
    ): EventFilter;
  };

  estimate: {
    authority(overrides?: TransactionOverrides): Promise<BigNumber>;

    "authority()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    deprecate(
      _deprecated: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "deprecate(bool)"(
      _deprecated: boolean,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    executeMetaTransaction(
      _user: string,
      _payload: Arrayish,
      _sigR: Arrayish,
      _sigS: Arrayish,
      _sigV: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)"(
      _user: string,
      _payload: Arrayish,
      _sigR: Arrayish,
      _sigS: Arrayish,
      _sigV: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    finishUpgrade(overrides?: TransactionOverrides): Promise<BigNumber>;

    "finishUpgrade()"(overrides?: TransactionOverrides): Promise<BigNumber>;

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

    getMetatransactionNonce(
      userAddress: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "getMetatransactionNonce(address)"(
      userAddress: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    identifier(overrides?: TransactionOverrides): Promise<BigNumber>;

    "identifier()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    install(
      _colony: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "install(address)"(
      _colony: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

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

    multicall(
      data: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "multicall(bytes[])"(
      data: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

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

    uninstall(overrides?: TransactionOverrides): Promise<BigNumber>;

    "uninstall()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    verify(
      _user: string,
      _nonce: BigNumberish,
      _chainId: BigNumberish,
      _payload: Arrayish,
      _sigR: Arrayish,
      _sigS: Arrayish,
      _sigV: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)"(
      _user: string,
      _nonce: BigNumberish,
      _chainId: BigNumberish,
      _payload: Arrayish,
      _sigR: Arrayish,
      _sigS: Arrayish,
      _sigV: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    version(overrides?: TransactionOverrides): Promise<BigNumber>;

    "version()"(overrides?: TransactionOverrides): Promise<BigNumber>;
  };
}
