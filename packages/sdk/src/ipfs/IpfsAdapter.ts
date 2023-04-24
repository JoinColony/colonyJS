export default interface IpfsAdapter {
  /** Name for the IpfsAdapter. All uppercase please */
  name: string;

  /**
   * Should return the whole URL to an IPFS resource on the corresponding gateway (e.g. https://my-ipfs-gateway/ipfs/QmXxxxXXxxXxXxXxxxXXxxxXxXXx).
   *
   * @param cid - An IPFS hash (CID)
   * @returns The URL to an ipfs resource
   */
  getIpfsUrl(cid: string): string;

  /**
   * Function to upload a JSON string to IPFS. Takes the string as an argument (use `JSON.stringify()` if needbe). Returns a promise that resolves to the IPFS hash (CID)
   *
   * @remarks This function should ideally **pin** your data on the relevant service.
   *
   * @param jsonString - JSON string to upload (and pin) to IPFS
   * @returns Promise to IPFS hash (CID)
   */
  uploadJson(jsonString: string): Promise<string>;
}
