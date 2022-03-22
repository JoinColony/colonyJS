import { providers, utils } from 'ethers';
import { CLNY, getColonyNetworkClient, Network, ROOT_POT_ID } from '@colony/colony-js';

const { formatEther, isAddress } = utils;

const provider = new providers.JsonRpcProvider('https://rpc.gnosischain.com/');

// Get the Colony's XDAI funding in the ROOT pot (id 1)
const getColonyFunding = async (colonyAddress: string) => {
    const colonyNetworkClient = getColonyNetworkClient(Network.Xdai, provider);
    const colonyClient = await colonyNetworkClient.getColonyClient(colonyAddress);
    const funding = await colonyClient.getFundingPotBalance(ROOT_POT_ID, CLNY.Xdai);
    return formatEther(funding);
}

// Just some basic setup to display the UI
const addressInput: HTMLInputElement = document.querySelector('#address');
const button = document.querySelector('#button');
const errElm: HTMLParagraphElement = document.querySelector('#error');
const resultElm: HTMLParagraphElement = document.querySelector('#result');

const panik = (err: string) => errElm.innerText = err;
const kalm = () => errElm.innerText = '';
const speak = (msg: string) => resultElm.innerText = msg;

button.addEventListener('click', async () => {
    kalm();
    const colonyAddress = addressInput.value;
    if (!isAddress(colonyAddress)) {
        return panik('This is not a valid address');
    }
    speak('Thinking...');
    addressInput.value = '';
    let funding: string;
    try {
        funding = await getColonyFunding(colonyAddress)
        speak(`${funding} XDAI in root domain of Colony with address: ${colonyAddress}`);
    } catch (e) {
        panik(`Found an error: ${e.message}`)
        speak('');
    }
});
