
export default function networkProxy(network) {
  const handler = {
    get(obj, prop) {
      return async function networkDelegate(...args) {
        const result = await obj[prop].send.apply(obj[prop], args)
        const { successful } = result
        if (!successful) {
          console.log(`${prop} error: `, 'font-weight: bold', result)
          throw new Error(`${prop} was not successful.`)
        }
        console.log(`${prop} success: `, 'font-weight: bold', result)
        return result
      }
    },
  }
  return new Proxy(network, handler)
}
