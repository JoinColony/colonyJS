## colony-js-utils

Utilities for Colony JS packages.

## Installation

```
yarn add ethers @colony/colony-js-utils
```


## Usage

```JavaScript
import utils from '@colony/colony-js-utils';

class MyClass {
    async somethingVerySlow() {
        return mySlowPromise();
    }
    async doSomethingCoolAsync() {
        // Will either return the result of `somethingVerySlow()` or throw throw an error on timeout
        return utils.raceAgainstTimeout(this.somethingVerySlow(), 30000);
    }
}
```
