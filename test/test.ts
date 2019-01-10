import { diInject } from '../src';

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
    console.log('this.injectToken=', this.injectToken);
    console.groupEnd();
  }

  @diInject({
    injectToken: secondToken,
  })
  callSecondToken(a) {
    console.group('Second');
    console.log('this.injectToken=', this.injectToken);
    this.callFirstToken();
    console.log('this.injectToken=', this.injectToken);
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
t.callSecondToken(5);
t.callThirdOne();
t.getOriginal();
