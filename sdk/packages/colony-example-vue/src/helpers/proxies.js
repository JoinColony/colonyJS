
export const send = (resource) => {
  const handler = {
    get(obj, prop) {
      return async function networkDelegate(...args) {
        const result = await obj[prop].send(...args)
        const { successful } = result
        if (!successful) {
          console.info(`${prop} error:`, result)
          throw new Error(`${prop} was not successful.`)
        }
        console.info(`${prop} success:`, result)
        return result
      }
    },
  }
  return new Proxy(resource, handler)
}
