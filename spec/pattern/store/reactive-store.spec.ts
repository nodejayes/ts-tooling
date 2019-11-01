import {assert} from 'chai';
import 'mocha';
import {ReactiveStore} from '../../../src/pattern/store/reactive-store';
import {DateTime} from '../../../src/complex/date-time';
import {Chars} from '../../../src/primitive/chars';
import {Integer, ZERO_INT} from "../../../src/ts-tooling";

interface ITestUser {
    name: Chars;
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
               dt: DateTime.FromISOString('2019-01-01T00:00:00'.ToChars()),
               o: {
                   name: new Chars('Paul')
               }
           }
       });
       assert.equal(store.select((s) => s.test.b).getValue(), true);
       assert.equal(store.select((s) => s.test.n).getValue(), 5);
       assert.equal(store.select((s) => s.test.dt.Year).getValue().Value, 2019);
       assert.equal(store.select((s) => s.test.dt.Month).getValue().Value, 1);
       assert.equal(store.select((s) => s.test.dt.Day).getValue().Value, 1);
       assert.equal(store.select((s) => s.test.dt.Hour).getValue().Value, 0);
       assert.equal(store.select((s) => s.test.dt.Minute).getValue().Value, 0);
       assert.equal(store.select((s) => s.test.dt.Second).getValue().Value, 0);
       assert.equal(store.select((s) => s.test.dt.Millisecond.Value).getValue(), 0);
       assert.equal(store.select((s) => s.test.o.name).getValue().Value, 'Paul');
   });

   it('can mutate the State', () => {
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: true,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'.ToChars()),
               o: {
                   name: new Chars('Paul')
               }
           }
       });
       store.mutate(s => s.test.b, ov => false);
       assert.equal(store.select(s => s.test.b).getValue(), false);
   });

   it('can listen on mutation', (done) => {
       const callCount = new Integer(0);
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: true,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'.ToChars()),
               o: {
                   name: new Chars('Paul')
               }
           }
       });
       store.select(s => s.test.b).subscribe(d => {
           callCount.Increment();
           if (callCount.IsBelow((2).ToInteger())) {
               // init call
               assert.equal(d, true);
               return;
           }
           // mutate call
           assert.equal(d, false);
           done();
       });
       store.mutate(s => s.test.b, ov => false);
   });

   it('can mutate complete State', (done) => {
       const callCount = new Integer(0);
       const store = new ReactiveStore<ITestStore>({
           test: {
               b: true,
               n: 5,
               dt: DateTime.FromISOString('2019-01-01T00:00:00'.ToChars()),
               o: {
                   name: new Chars('Paul')
               }
           }
       });
       store.select(s => s.test).subscribe(d => {
           callCount.Increment();
           if (callCount.IsBelow((2).ToInteger())) {
               // init call
               assert.equal(d.o.name.Value, 'Paul');
               return;
           }
           // mutate call
           assert.equal(d.o.name.Value, 'Max');
           done();
       });
       store.mutate(s => s.test, d => {
           d.o.name = new Chars('Max');
           return d;
       });
   });
});