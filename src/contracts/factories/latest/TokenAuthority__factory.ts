/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TokenAuthority,
  TokenAuthorityInterface,
} from "../../latest/TokenAuthority";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_colony",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "allowedToTransfer",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
    ],
    name: "canCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161061238038061061283398101604081905261002f916102e1565b600080546001600160a01b0319166001600160a01b03858116919091178255831681526001602081815260408084207fa9059cbb000000000000000000000000000000000000000000000000000000008552909152808320805460ff1990811684179091557fa0712d6800000000000000000000000000000000000000000000000000000000845281842080548216841790557f40c10f19000000000000000000000000000000000000000000000000000000008452908320805490911690911790557fa9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b907f23b872dd7302113369cda2901243429419bec145408fa8b352b3dd92b66c680b907fa0712d680358d64f694230b7cc0b277c73686bdf768385d55cd7c547d0ffd30e907f40c10f19c047ae7dfa66d6312b683d2ea3dfbcb4159e96b967c5f4b0a86f2842905b855181101561028957600180600088848151811061019b5761019b6103c9565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000876001600160e01b0319166001600160e01b031916815260200190815260200160002060006101000a81548160ff0219169083151502179055506001806000888481518110610216576102166103c9565b6020908102919091018101516001600160a01b0316825281810192909252604090810160009081207fffffffff00000000000000000000000000000000000000000000000000000000891682529092529020805460ff191691151591909117905580610281816103f8565b91505061017b565b505050505050505061043a565b80516001600160a01b03811681146102ad57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000606084860312156102f657600080fd5b6102ff84610296565b9250602061030e818601610296565b60408601519093506001600160401b038082111561032b57600080fd5b818701915087601f83011261033f57600080fd5b815181811115610351576103516102b2565b8060051b604051601f19603f83011681018181108582111715610376576103766102b2565b60405291825284820192508381018501918a83111561039457600080fd5b938501935b828510156103b9576103aa85610296565b84529385019392850192610399565b8096505050505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000600019821415610433577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6101c9806104496000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063b70096131461003b578063fc0c546a14610063575b600080fd5b61004e61004936600461013f565b61008e565b60405190151581526020015b60405180910390f35b600054610076906001600160a01b031681565b6040516001600160a01b03909116815260200161005a565b60006001600160e01b03198216630852cd8d60e31b14806100bf57506001600160e01b03198216632770a7eb60e21b145b156100cc5750600161011c565b6000546001600160a01b038481169116146100e95750600061011c565b506001600160a01b03831660009081526001602090815260408083206001600160e01b03198516845290915290205460ff165b9392505050565b80356001600160a01b038116811461013a57600080fd5b919050565b60008060006060848603121561015457600080fd5b61015d84610123565b925061016b60208501610123565b915060408401356001600160e01b03198116811461018857600080fd5b80915050925092509256fea264697066735822122074a620730c89c94b5dee976a47a776014a20f7e83d0e17649f99cab22f8bba4264736f6c634300080a0033";

type TokenAuthorityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenAuthorityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenAuthority__factory extends ContractFactory {
  constructor(...args: TokenAuthorityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    _colony: PromiseOrValue<string>,
    allowedToTransfer: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenAuthority> {
    return super.deploy(
      _token,
      _colony,
      allowedToTransfer,
      overrides || {}
    ) as Promise<TokenAuthority>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    _colony: PromiseOrValue<string>,
    allowedToTransfer: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _colony,
      allowedToTransfer,
      overrides || {}
    );
  }
  override attach(address: string): TokenAuthority {
    return super.attach(address) as TokenAuthority;
  }
  override connect(signer: Signer): TokenAuthority__factory {
    return super.connect(signer) as TokenAuthority__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenAuthorityInterface {
    return new utils.Interface(_abi) as TokenAuthorityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenAuthority {
    return new Contract(address, _abi, signerOrProvider) as TokenAuthority;
  }
}