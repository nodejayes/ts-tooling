import {assert} from 'chai';
import {DateTime, ReactiveStore} from '../../../src/ts-tooling';
import 'mocha';
import {filter} from 'rxjs/operators';
import {zip} from 'rxjs';

interface ITestUser {
    name: string;
}

interface ITestState {
    b: boolean;
    n: number;
    dt: DateTime;
    o: ITestUser;
}

interface ITestStore {
    test: ITestState;
}

describe('Reactive Store Tests', () => {
   it('can create a new Store with init State', () => {
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: true,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'),
               o: {
                   name: 'Paul'
               }
           }
       });
       assert.equal(store.Listen((s) => s.test.b).getValue(), true);
       assert.equal(store.Listen((s) => s.test.n).getValue(), 5);
       assert.equal(store.Listen((s) => s.test.dt.Year).getValue(), 2019);
       assert.equal(store.Listen((s) => s.test.dt.Month).getValue(), 1);
       assert.equal(store.Listen((s) => s.test.dt.Day).getValue(), 1);
       assert.equal(store.Listen((s) => s.test.dt.Hour).getValue(), 0);
       assert.equal(store.Listen((s) => s.test.dt.Minute).getValue(), 0);
       assert.equal(store.Listen((s) => s.test.dt.Second).getValue(), 0);
       assert.equal(store.Listen((s) => s.test.dt.Millisecond).getValue(), 0);
       assert.equal(store.Listen((s) => s.test.o.name).getValue(), 'Paul');
   });

   it('can mutate the State', () => {
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: true,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'),
               o: {
                   name: 'Paul'
               }
           }
       });
       store.Mutate(s => s.test.b, ov => false);
       assert.equal(store.Listen(s => s.test.b).getValue(), false);
   });

   it('listen multiple states', (done) => {
       let callCount = 0;
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: true,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'),
               o: {
                   name: 'Paul'
               }
           }
       });
       zip(
           store.Listen(s => s),
           store.Listen(s => s.test),
           store.Listen(s => s.test.b),
       )
       .subscribe(d => {
           callCount++;
           const first = d[0] as ITestStore;
           const second = d[1] as ITestState;
           const third = d[2] as boolean;
           if (callCount === 1) {
               assert.isTrue(first.test.b);
               assert.equal(first.test.n, 5);
               assert.isTrue(second.b);
               assert.equal(second.n, 5);
               assert.isTrue(third);
           }
           if (callCount === 2) {
               assert.isFalse(first.test.b);
               assert.equal(first.test.n, 5);
               assert.isFalse(second.b);
               assert.equal(second.n, 5);
               assert.isFalse(third);
               done();
           }
       });
       store.Mutate(s => s.test.b, () => false);
   });

   it('fire listener with other mutation', (done) => {
       let callCount = 0;
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: true,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'),
               o: {
                   name: 'Paul'
               }
           }
       });
       store.Listen(s => s.test.b).subscribe(d => {
           callCount++;
           if (callCount === 1) {
               assert.isTrue(d);
           }
           if (callCount === 2) {
               assert.isFalse(d);
               done();
           }
       });
       store.Mutate(s => s.test, o => {
           o.b = false;
           return o;
       });
   });

    it('mutate root state and fire to Listeners', (done) => {
        let callCount = 0;
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: true,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        zip(
            store.Listen(s => s.test.b),
            store.Listen(s => s.test.n),
            store.Listen(s => s)
        ).subscribe(d => {
            callCount++;
            const first = d[0] as boolean;
            const second = d[1] as number;
            const third = d[2] as ITestStore;
            if (callCount === 1) {
                assert.isTrue(first);
                assert.equal(second, 5);
                assert.isTrue(third.test.b);
                assert.equal(third.test.n, 5);
            }
            if (callCount === 2) {
                assert.isFalse(first);
                assert.equal(second, 10);
                assert.isFalse(third.test.b);
                assert.equal(third.test.n, 10);
                done();
            }
        });
        store.Mutate(s => s, o => {
            o.test.b = false;
            o.test.n = 10;
            return o;
        });
    });

   it('can listen on mutation', (done) => {
       let callCount = 0;
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: true,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'),
               o: {
                   name: 'Paul'
               }
           }
       });
       store.Listen(s => s.test.b).subscribe(d => {
           callCount = callCount.Increment();
           if (callCount.IsBelow(2)) {
               // init call
               assert.equal(d, true);
               return;
           }
           // mutate call
           assert.equal(d, false);
           done();
       });
       store.Mutate(s => s.test.b, ov => false);
   });

   it('can mutate complete State', (done) => {
       let callCount = 0;
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: true,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'),
               o: {
                   name: 'Paul'
               }
           }
       });
       store.Listen(s => s.test).subscribe(d => {
           callCount = callCount.Increment();
           if (callCount.IsBelow(2)) {
               // init call
               assert.equal(d.o.name, 'Paul');
               return;
           }
           // mutate call
           assert.equal(d.o.name, 'Max');
           done();
       });
       store.Mutate(s => s.test, d => {
           d.o.name = 'Max';
           return d;
       });
   });
   it('accessors [\'\'] works with .', (done) => {
       let callCount = 0;
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: false,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'),
               o: {
                   name: 'Paul'
               }
           }
       });
       store.Listen(s => s['test'].b).subscribe(v => {
           if (callCount > 0) {
               assert.isTrue(v);
               done();
           }
           callCount++;
       });
       store.Mutate(s => s.test.b, () => true);
   });
    it('accessors [""] works with .', (done) => {
        let callCount = 0;
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s["test"].b).subscribe(v => {
            if (callCount > 0) {
                assert.isTrue(v);
                done();
            }
            callCount++;
        });
        store.Mutate(s => s.test.b, () => true);
    });
    it('accessors . works with [\'\']', (done) => {
        let callCount = 0;
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s.test.b).subscribe(v => {
            if (callCount > 0) {
                assert.isTrue(v);
                done();
            }
            callCount++;
        });
        store.Mutate(s => s['test'].b, () => true);
    });
    it('accessors . works with [""]', (done) => {
        let callCount = 0;
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s.test.b).subscribe(v => {
            if (callCount > 0) {
                assert.isTrue(v);
                done();
            }
            callCount++;
        });
        store.Mutate(s => s["test"].b, () => true);
    });
    it('multiple accessors . works with [""]', (done) => {
        let callCount = 0;
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s.test.b).subscribe(v => {
            if (callCount > 0) {
                assert.isTrue(v);
                done();
            }
            callCount++;
        });
        store.Mutate(s => s["test"]["b"], () => true);
    });
    it('multiple accessors . works with [\'\']', (done) => {
        let callCount = 0;
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s.test.b).subscribe(v => {
            if (callCount > 0) {
                assert.isTrue(v);
                done();
            }
            callCount++;
        });
        store.Mutate(s => s['test']['b'], () => true);
    });
    it('multiple accessors [\'\'] works with .', (done) => {
        let callCount = 0;
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s['test']['b']).subscribe(v => {
            if (callCount > 0) {
                assert.isTrue(v);
                done();
            }
            callCount++;
        });
        store.Mutate(s => s.test.b, () => true);
    });
    it('multiple accessors [""] works with .', (done) => {
        let callCount = 0;
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s["test"]["b"]).subscribe(v => {
            if (callCount > 0) {
                assert.isTrue(v);
                done();
            }
            callCount++;
        });
        store.Mutate(s => s.test.b, () => true);
    });
    it('multiple accessors mixed works', (done) => {
        let callCount = 0;
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s["test"]['b']).subscribe(v => {
            if (callCount > 0) {
                assert.isTrue(v);
                done();
            }
            callCount++;
        });
        store.Mutate(s => s['test'].b, () => true);
    });
    it('immutable values readed by getValue', async () => {
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        let b = store.Listen(s => s.test.b).getValue();
        b = true;
        assert.isFalse(store.Listen(s => s.test.b).getValue());
        let o = store.Listen(s => s.test.o).getValue();
        o.name = 'Peter';
        assert.equal(store.Listen(s => s.test.o.name).getValue(), 'Paul');
    });
    it('using pipe of Listen Store', (done) => {
        const store = new ReactiveStore<ITestStore>({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s.test.b).pipe(
            filter(d => d === true),
        ).subscribe(d => {
            assert.isTrue(d);
            done();
        });
        store.Mutate(s => s.test.b, () => true);
    });
});
