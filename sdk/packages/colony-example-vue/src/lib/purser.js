import purserMetamask from '@colony/purser-metamask'
import purserSoftware from '@colony/purser-software'

const { NODE_ENV } = process.env
const testOrDevelopment = NODE_ENV === 'test' || NODE_ENV === 'development'
const purser = testOrDevelopment ? purserSoftware : purserMetamask

export function open() {
  if (purser === purserSoftware) {
    const privateKey = process.env.VUE_APP_PURSER_PRIVATE_KEY
    return purser.open({ privateKey })
  }
  return purser.open()
}

export const qwe = 'qwe'
