# colonyJS Hackathon Starter Project

This is a simple starter project for [colonyJS](https://github.com/JoinColony/colonyJS) that demonstrates how to get connected to the an instance of the Colony Network with colonyJS and how to create a Colony.

## Prerequisites
You must have `yarn`, `nodejs`, and `npm` installed to use this starter.

## Install
Clone to your working directory of choice with:
```
~$ git clone https://github.com/JoinColony/hackathonStarter.git
```

Move to your new starter directory and run `yarn` to install dependencies:
```
$ cd hackathonStarter/

~/hackathonStarter$ yarn
```

## Get Started
Note: This project contains pre-written scripts that perform the same steps shown in the [Get Started](https://joincolony.github.io/colonyjs/docs-get-started/) page of the colonyJS docs. Have a look at the full documentation to see what's happening under-the-hood!

### Start a test blockchain
In a new terminal window:
```
~/hackathonStarter$ yarn start-ganache
```

### Start TrufflePig
In a new terminal window, `cd` to the hackathonStarter and start TrufflePig with
```
~/hackathonStarter$ yarn start-trufflepig
```

### Run example code
The code example included in this starter will use colonyJS to create a new token, a new colony, and return the address of the Meta Colony on your running test blockchain.
```
~/hackathonStarter$ node src/index.js
```
