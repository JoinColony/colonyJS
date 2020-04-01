import { BaseProvider } from 'ethers/providers'

import getColonyClient from '../ColonyClientV1';

describe('ColonyClient V1', () => {
  it('Runs', () => {
    const provider = new BaseProvider(1337)
    const client = getColonyClient('0xdeadbeef', provider)
    console.log(client)
  })

})
