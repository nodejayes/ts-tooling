import {assert} from 'chai';
import {DateTime, ReactiveStore} from '../../../src/ts-tooling.node';
import 'mocha';

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
});
