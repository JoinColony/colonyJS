import { providers, utils, Signer, ContractReceipt, BigNumber } from 'ethers';
import { ColonyClientV8, Extension, getColonyNetworkClient, Network, Id } from '@colony/colony-js';
import { formatEther } from 'ethers/lib/utils';

const { isAddress } = utils;
const provider = new providers.Web3Provider((window as any).ethereum)

let colonyClient: ColonyClientV8;
const domainData: { fundingPotId?: BigNumber, domainId?: BigNumber } = {};

// Instantiate a colony client
const getColonyClient = async (colonyAddress: string, signer: Signer) => {
    const colonyNetworkClient = getColonyNetworkClient(Network.Xdai, signer);
    return colonyNetworkClient.getColonyClient(colonyAddress);
}

// Get the Colony's native token funding in the ROOT pot (id 1)
const getColonyFunding = async() => {
    const tokenAddress = colonyClient.tokenClient.address;
    const funding = await colonyClient.getFundingPotBalance(Id.RootPot, tokenAddress);
    return formatEther(funding);
}

// Use colony address 0x6899e0775f56e078C4172B86D411a0623ccCaB24
const createDomain = async (domainName: string): Promise<{ receipt: ContractReceipt, domainId: BigNumber, fundingPotId: BigNumber }> => {
    const tx = await colonyClient['addDomainWithProofs(uint256,string)'](Id.RootDomain, domainName);
    // Wait until transaction is mined, then get its receipt
    const receipt = await tx.wait();
    // Extract relevant event data
    const { args: { domainId }} = receipt.events.find((ev) => ev.event === 'DomainAdded');
    const { args: { fundingPotId }} = receipt.events.find((ev) => ev.event === 'FundingPotAdded');
    return { receipt, domainId, fundingPotId };
}

const moveFunds = async (): Promise<ContractReceipt> => {
    const tx = await colonyClient['moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)'](Id.RootDomain, Id.RootPot, domainData.fundingPotId, 1, colonyClient.tokenClient.address);
    return tx.wait();
}

const makePayment = async (to: string): Promise<ContractReceipt> => {
    const oneTxClient = await colonyClient.getExtensionClient(Extension.OneTxPayment);
    const { tokenClient } = colonyClient;
    // Create payment in newly created domain
    const tx = await oneTxClient.makePaymentFundedFromDomainWithProofs([to], [tokenClient.address], [BigNumber.from(1)], domainData.domainId, Id.SkillIgnore);
    return tx.wait();
}

const connect = async () => {
    await provider.send('eth_requestAccounts', []);
    return provider.getSigner();
}

// Some setup to display the UI
const inputAddress: HTMLInputElement = document.querySelector('#address');
const buttonConnect = document.querySelector('#button_connect');
const inputTeam: HTMLInputElement = document.querySelector('#team');
const buttonTeam = document.querySelector('#button_team');
const buttonFund = document.querySelector('#button_fund');
const inputRecipient: HTMLInputElement = document.querySelector('#recipient');
const buttonPay = document.querySelector('#button_pay');

const errElm: HTMLParagraphElement = document.querySelector('#error');
const resultElm: HTMLParagraphElement = document.querySelector('#result');

const panik = (err: Error) => {
    errElm.innerText = `Found an error: ${err.message}`;
    console.error(err);
};
const kalm = () => errElm.innerText = '';
const speak = (msg: string) => resultElm.innerText = msg;

buttonConnect.addEventListener('click', async () => {
    kalm();
    const colonyAddress = inputAddress.value;
    if (!isAddress(colonyAddress)) {
        return panik(new Error('This is not a valid address'));
    }
    speak('Processing...');
    const signer = await connect();
    try {
        const cc = await getColonyClient(inputAddress.value, signer);
        if (cc.clientVersion !== 8) {
            throw new Error(`Wrong colony version: ${cc.clientVersion}, expected: 8`);
        }
        colonyClient = cc;
        const funding = await getColonyFunding();
        const tokenSymbol = await cc.tokenClient.symbol();
        speak(`
            Connected to Colony with address: ${colonyAddress}.
            Colony version: ${cc.clientVersion}.
            Native token funding: ${funding} ${tokenSymbol}
        `);
    } catch (e) {
        panik(e);
        speak('');
    } finally {
        inputAddress.value = '';
    }
});

buttonTeam.addEventListener('click', async () => {
    const domainName = inputTeam.value;
    try {
        speak('Processing...');
        const { domainId, fundingPotId } = await createDomain(domainName);
        domainData.domainId = domainId;
        domainData.fundingPotId = fundingPotId;
        speak(`Team with domainId ${domainId} and fundingPotId ${fundingPotId} successfully created`);
    } catch (e) {
        panik(e);
        speak('');
    }
    inputTeam.value = '';
});

buttonFund.addEventListener('click', async () => {
    if (!domainData.domainId || !domainData.fundingPotId) {
        return panik(new Error('Please create a domain first'));
    }
    speak('Processing...');
    try {
        const receipt = await moveFunds();
        console.info(receipt);
    } catch (e) {
        panik(e);
        speak('');
    }
    speak(`Successfully funded domain ${domainData.domainId}`);
})

buttonPay.addEventListener('click', async() => {
    const recipient = inputRecipient.value;
    speak('Processing...');
    try {
        const receipt = await makePayment(recipient);
        console.info(receipt);
    } catch (e) {
        panik(e);
        speak('');
    }
    speak(`Successfully paid 1 token to ${recipient}`);
})
