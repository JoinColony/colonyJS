
export default function colonyProxy(colony) {
  const handler = {
    get(obj, prop) {
      return async function colonyDelegate(...args) {
        const method = obj[prop] && obj[prop].send ? obj[prop].send : obj[prop]
        const result = await method.apply(obj[prop], args)
        const { successful } = result
        if (!successful) {
          console.log(`${prop} error`)
          throw new Error(`${prop} was not successful.`)
        }
        console.log(`${prop} success`)
        return result
      }
    },
  }
  return new Proxy(colony, handler)
}
