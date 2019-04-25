## colonyJS Utilities

Utilities for colonyJS packages.

## Installation

```
yarn add @colony/colony-js-utils
```


## Usage

```JavaScript
import { raceAgainstTimeout } from '@colony/colony-js-utils';

class MyClass {
    async somethingVerySlow() {
        return mySlowPromise();
    }
    async doSomethingCoolAsync() {
        // Will either return the result of `somethingVerySlow()` or throw throw an error on timeout
        return raceAgainstTimeout(this.somethingVerySlow(), 30000);
    }
    async doSomethingElse() {
        // Will do something on timeout, e.g. remove an event listener
        return raceAgainstTimeout(
            this.somethingVerySlow(),
            30000,
            () => this.removeEventListener('something'),
        );
    }
}
```

## Contributing

This package is part of the [colonyJS monorepo](https://github.com/JoinColony/colonyJS).

Please read our [contributing guidelines](https://github.com/JoinColony/colonyJS/blob/master/CONTRIBUTING.md).
