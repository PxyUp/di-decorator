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
t.call();
t.callSecond(5);
