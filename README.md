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

  @diInject({
    sr: 'changedSR',
  })
  callThirdOne() {
    console.group('Third');
    this.callFirstToken();
    this.callSecondToken(5);
    console.log('this.sr=', this.sr);
    console.groupEnd();
  }

  getOriginal() {
    console.log(this.sr);
  }
}

const t = new Test('originalSR');
t.callFirstToken();
/*
First
  this.injectToken=tokenOne
*/
t.callSecondToken(5);
/*
Second
  this.injectToken=secondToken
  First
    this.injectToken=tokenOne
  this.injectToken=secondToken
*/
t.callThirdOne();
/*
Third
  First
    this.injectToken=tokenOne
  Second
    this.injectToken=secondToken
    First
      this.injectToken=tokenOne
    this.injectToken=secondToken
  this.sr=changedSR   
*/
t.getOriginal();
// originalSR


```

## Use cases

1. Easy testing method class without any hard injections.
2. Create simple DI in typescript project.