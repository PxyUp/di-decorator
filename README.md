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

const testInject = 'injectionOne';
const testInject2 = 'injectionSecond';

class Test {
  injectFirst: string;
  sr: string;
  constructor(sr: string) {
    this.sr = sr;
  }

  @diInject({
    injectFirst: testInject,
  })
  call() {
    console.log(this.injectFirst);
  }

  @diInject({
    injectFirst: testInject2,
  })
  callSecond(a) {
    console.log(this.injectFirst, a, this.sr);
  }
}

const t = new Test('testing');
t.call(); // injectionOne
t.callSecond(5); // injectionSecond 5 testing

```

## Use cases

1. Easy testing method class without any hard injections.
2. Create simple DI in typescript project.