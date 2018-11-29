import bs58 from 'bs58';
import { toHex, padLeft, bytesToHex, hexToUtf8 } from 'web3-utils';

/**
 * Encode a string into a IPFS specific multihash
 *
 * @method encode
 *
 * @param {string} value The string to encode
 *
 * @return {base58hash} The IPFS specific base58 encoded hash
 */
const encode = value => {
  /*
   * Check if the initial value is a string
   */
  if (typeof value !== 'string') {
    throw new Error(
      'Value provided to encode into a multihash is not a string',
    );
  }
  /*
   * Depending on the the leading byte, it can be either prefix `01` or `02`
   */
  let prefixType = '02';
  /*
   * Convert the string into a 32 byte hex.
   * Extra padding may be required if the byte length is not enough.
   */
  let hexValue = padLeft(toHex(value), 64);
  /*
   * Remove the pre-pending `0x`
   */
  hexValue = hexValue.slice(2);
  /*
   * Ensure a maximum hex lenght of 32 bytes
   *
   * This is basically cheating, but it works for the purpouses of the integration tests.
   * If you ever want to port these to a production environment, make sure you find
   * a way to compress data, as opposed to just truncating it.
   */
  hexValue = hexValue.slice(0, 64);
  /*
   * If the leading byte is greater than 60, then it's prefix `01`, all other
   * cases are prefix `02`
   */
  if (parseInt(hexValue.slice(0, 2), 16) > 60) {
    prefixType = '01';
  }
  /*
   * Create a 32 bytes buffer form the hex value
   */
  const buffer = Buffer.from(prefixType + hexValue, 'hex');
  /*
   * Encode the `Buffer` to base58 and pre-pend the ipfs standard `Qm` header
   */
  return `Qm${bs58.encode(buffer)}`;
};

/**
 * Decoded an IPFS specific multihash into a string
 *
 * @method decode
 *
 * @param {base58hash} value A base58 IPFS specific multihash
 *
 * @return {string} The decoded `utf-8` string
 */
const decode = value => {
  if (
    !value ||
    typeof value !== 'string' ||
    value.slice(0, 2) !== 'Qm' ||
    value.length !== 46
  ) {
    throw new Error(
      'Multihash value provided is not an IPFS specific base58 hash',
    );
  }
  /*
   * Remove the IPFS specific `Qm` hash heading
   */
  const headlessValue = value.slice(2);
  /*
   * Decode the base58 hash into a 33 byte `Buffer`
   */
  let decodedBuffer = bs58.decode(headlessValue);
  /*
   * Reduce the `Buffer` to 32 bytes by removing the leading byte.
   * The leading byte is part of the hash tag.
   */
  decodedBuffer = decodedBuffer.slice(1);
  /*
   * Convert the `Buffer` back to a hexadecimal value
   */
  const decodedHex = bytesToHex(decodedBuffer);
  /*
   * Convert the hex value to a `utf-8` string
   */
  return hexToUtf8(decodedHex);
};

const multiHash = {
  encode,
  decode,
};

export default multiHash;
