/* @flow */

const crypto = require('crypto');

/**
 * In node we need to monkey-patch the global crypto functions,
 *
 * because of jsdom, the brorand library believes that we're in a browser
 * and doesn't find node's crypto code.
 *
 * related code:
 *  https://github.com/indutny/brorand/blob/
 *    ddc4f9344287769d7e2c2ea987d26bbeec5456b4/index.js#L30
 *
 * @TODO Use colony-wallet's polyfill
 */
function patchNodeCrypto() {
  if (process.env.NODE_ENV === 'test') {
    Object.defineProperty(global.self, 'crypto', {
      value: {
        getRandomValues: arr => crypto.randomBytes(arr.length),
      },
    });
  }
}

patchNodeCrypto();
