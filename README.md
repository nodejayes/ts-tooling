[![Build Status](https://travis-ci.org/nodejayes/ts-tooling.svg?branch=master)](https://travis-ci.org/nodejayes/ts-tooling)
[![Coverage Status](https://coveralls.io/repos/github/nodejayes/ts-tooling/badge.svg?branch=master)](https://coveralls.io/github/nodejayes/ts-tooling?branch=master)
[![devDependency Status](https://david-dm.org/nodejayes/ts-tooling/dev-status.svg)](https://david-dm.org/nodejayes/ts-tooling#info=devDependencies)
[![npm version](https://badge.fury.io/js/ts-tooling.svg)](https://badge.fury.io/js/ts-tooling)
![npm](https://img.shields.io/npm/l/ts-tooling.svg)
![npm](https://img.shields.io/npm/dt/ts-tooling.svg)
![npm](https://img.shields.io/npm/dw/ts-tooling.svg)
![npm](https://img.shields.io/npm/dm/ts-tooling.svg)
![npm](https://img.shields.io/npm/dy/ts-tooling.svg)

# ts-tooling
some tools for Typescript inspired by .NET Framework

# Installation

This Library was bundled with Webpack into a umd Module.
It exports the tst variable!

```bash
// install over npm
npm install --save ts-tooling
```

### using in Node.Js

```
const tst = require('ts-tooling');
// now you can use the tst Object

// in NodeJs or Typescript you can use a destructured import
import {NumberFactory} from 'ts-tooling';
// or
const {NumberFactory} = require('ts-tooling');
```

### using in Angular

First you have to tell Angular that the global Object tst exists and you have to exclude the ts-tooling module from Webpack Bundle.
Load the Script via Script Section in angular.json

```javascript
// ignore the ts-tooling for webpack bundle
// insert into tsconfig
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app"
  },
  "exclude": [
    "test.ts",
    "**/*.spec.ts",
    "../node_modules/ts-tooling"
  ]
}

// add the script file into scripts section into angular.json
"scripts": [
  "node_modules/ts-tooling/lib/ts-tooling.js"
],


// write in main.ts
// to register the global tst variable
import * as tooling from "ts-tooling";

declare global {
  const tst: typeof tooling;
}
```
