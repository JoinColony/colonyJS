import { providers, Signer } from 'ethers';
import { getColonyNetworkClient, Network } from '@colony/colony-js';

// If MetaMask is installed there will be an `ethereum` object on the `window`
const provider = new providers.Web3Provider((window as any).ethereum)

// Get the Colony's XDAI funding in the ROOT pot (id 1)
const getMetaColonyClient = async (signer: Signer) => {
    const colonyNetworkClient = getColonyNetworkClient(Network.Xdai, signer);
    return colonyNetworkClient.getMetaColonyClient();
}

// As soon as we issue `eth_requestAccounts`, MetaMask will prompt the user to allow a connection to the site
// We then return the `signer` that is provided by MetaMask which will act as the user's wallet
const connect = async () => {
    await provider.send('eth_requestAccounts', []);
    return provider.getSigner();
}

// Just some basic setup to display the UI
const button = document.querySelector('#button');
const errElm: HTMLParagraphElement = document.querySelector('#error');
const resultElm: HTMLParagraphElement = document.querySelector('#result');

const panik = (err: string) => errElm.innerText = err;
const kalm = () => errElm.innerText = '';
const speak = (msg: string) => resultElm.innerText = msg;

button.addEventListener('click', async () => {
    kalm();
    speak('Thinking...');
    try {
        const signer = await connect();
        const metaColonyClient = await getMetaColonyClient(signer);
        speak(`Connected to metaColonyClient with version ${metaColonyClient.clientVersion}`);
    } catch (e) {
        panik(`Found an error: ${e.message}`)
        speak('');
    }
});
