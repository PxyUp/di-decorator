[![Build Status](https://travis-ci.org/PxyUp/di-decorator.svg?branch=master)](https://travis-ci.org/PxyUp/di-decorator) ![Downloads](https://img.shields.io/npm/dm/di-decorator.svg)

# Simple DI in class method in TS

Dependency injection library for TypeScript
# How to use?

```sh
$ npm i di-decorator
# OR
$ yarn add di-decorator
```

## TypeScript

```ts

import { diInject } from 'di-decorator';

const oneToken = 'tokenOne';
const secondToken = 'secondToken';

class Test {
  injectToken: string;
  sr: string;
  constructor(sr: string) {
    this.sr = sr;
  }

  @diInject({
    injectToken: oneToken,
  })
  callFirstToken() {
    console.group('First');
    console.log(this.injectToken);
    console.groupEnd();
  }

  @diInject({
    injectToken: secondToken,
  })
  callSecondToken(a) {
    console.group('Second');
    console.log(this.injectToken);
    this.callFirstToken();
    console.groupEnd();
  }

  callThirdOne() {
    console.group('Third');
    this.callFirstToken();
    this.callSecondToken(5);
    console.groupEnd();
    console.log(this.sr);
  }
}

const t = new Test('testing');
t.callFirstToken();
/*
First
  tokenOne
*/
t.callSecondToken(5);
/*
Second
  secondToken
  First
    tokenOne
*/
t.callThirdOne();
/*
Third
  First
    tokenOne
  Second
    secondToken
    First
      tokenOne
testing      
*/


```

## Use cases

1. Easy testing method class without any hard injections.
2. Create simple DI in typescript project.