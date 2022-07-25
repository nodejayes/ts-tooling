const {DateTime} = require('../../../types/datetime/datetime/datetime');
const {ReactiveStore} = require('./reactive.store');
const {zip} = require('rxjs');
const {filter} = require('rxjs/operators');
const {describe, it} = require('mocha');
const {assert} = require('chai');

class ComplexObject {
    constructor() {
        this.name = null;
        this.birthday = new DateTime('UTC', 1975, 1, 1);
    }

    get Age() {
        return new DateTime().Subtract(this.birthday).Year;
    }

    greet() {
        return `Hello ${this.name}`;
    }
}

describe('Reactive Store Tests', () => {
    it('can create a new Store with init State', () => {
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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

    it('can use RemoveAll', () => {
        const store = new ReactiveStore({
            test: [{value: 1},{value: 2},{value: 3}]
        });
        store.Mutate(s => s.test, o => o.RemoveAll(n => n.value === 2));
        assert.equal(store.Listen(s => s.test).getValue()[0].value, 1);
        assert.equal(store.Listen(s => s.test).getValue()[1].value, 3);
    });

    it('exact match 1', (done) => {
        let callCount = 0;
        let callCount2 = 0;
        const store = new ReactiveStore({
            update: 1,
            updateComponent: 2,
        });
        store.Listen(s => s.update).subscribe(d => {
            callCount++;
            if (callCount > 1) {
                assert.equal(d, 5);
                setTimeout(() => done(), 50);
            }
        });
        store.Listen(s => s.updateComponent).subscribe(() => {
            callCount2++;
            if (callCount2 > 1) {
                assert.fail();
            }
        });
        store.Mutate(s => s.update, () => 5);
    });

    it('exact match 2', (done) => {
        let callCount = 0;
        let callCount2 = 0;
        const store = new ReactiveStore({
            update: 1,
            updateComponent: 2,
        });
        store.Listen(s => s.update).subscribe(d => {
            callCount++;
            if (callCount > 1) {
                assert.fail();
            }
        });
        store.Listen(s => s.updateComponent).subscribe(d => {
            callCount2++;
            if (callCount2 > 1) {
                assert.equal(d, 5);
                setTimeout(() => done(), 50);
            }
        });
        store.Mutate(s => s.updateComponent, () => 5);
    });

    it('listen multiple states', (done) => {
        let callCount = 0;
        let callCount2 = 0;
        const store = new ReactiveStore({
            test: {
                b: true,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s.test.o).subscribe(() => {
            callCount2++;
            if (callCount2 > 1) {
                assert.fail();
            }
        });
        zip(
            store.Listen(s => s),
            store.Listen(s => s.test),
            store.Listen(s => s.test.b),
        )
            .subscribe(d => {
                callCount++;
                const first = d[0];
                const second = d[1];
                const third = d[2];
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
            const first = d[0];
            const second = d[1];
            const third = d[2];
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
        const store = new ReactiveStore({
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
    it('immutable values readed by getValue', (done) => {
        const store = new ReactiveStore({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        let o = store.Listen(s => s.test.o).getValue();
        o.name = 'Peter';
        setTimeout(() => {
            assert.equal(store.Listen(s => s.test.o.name).getValue(), 'Paul');
            done();
        }, 500);
    });
    it('using pipe of Listen Store', (done) => {
        const store = new ReactiveStore({
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

    it('next Function is disabled', (done) => {
        let callCount = 0;
        const store = new ReactiveStore({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s.test.n).subscribe(d => {
            callCount++;
            if (callCount > 1) {
                assert.fail();
            } else {
                assert.equal(d, 5);
                setTimeout(() => done(), 100);
            }
        });
        assert.throws(() => {
            store.Listen(s => s.test.n).next(50);
        }, 'cannot emit value 50 please use the Mutation Function to do that');
    });

    it('mutate complete state', (done) => {
        let callCount = 0;
        const store = new ReactiveStore({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s).subscribe(d => {
            callCount++;
            if (callCount === 2) {
                assert.isTrue(d.test.b);
                done();
            }
        });
        store.Mutate(s => s.test, o => {
            o.b = true;
            return o;
        });
    });

    it('set null value', (done) => {
        const store = new ReactiveStore({
            name: null,
        });
        store.Listen(s => s.name).subscribe(name => {
            if (name === 'Peter') {
                assert.isTrue(true);
                done();
            }
        });
        store.Mutate(s => s.name, () => 'Peter');
    });

    it('store can handle complex objects', (done) => {
        const store = new ReactiveStore({
            obj: new ComplexObject(),
        });
        store.Listen(s => s.obj).subscribe(o => {
            assert.equal(o.Age, 47);
            assert.equal(o.greet(), 'Hello null');
            done();
        });
    });

    it('sends only store value changes', (done) => {
        let callCount = 0;
        const store = new ReactiveStore({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        store.Listen(s => s.test.n).subscribe(d => {
            callCount++;
        });
        store.Mutate(s => s.test.n, () => 5);
        store.Mutate(s => s.test.n, () => 5);
        store.Mutate(s => s.test.n, () => 5);
        store.Mutate(s => s.test.n, () => 5);
        setTimeout(() => {
            assert.equal(callCount, 1);
            done();
        }, 100);
    });

    it('perform get on proxy', (done) => {
        let callCount = 0;
        const store = new ReactiveStore({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                }
            }
        });
        let ref = null;
        store.Listen(s => s.test).subscribe(d => {
            callCount++;
            if (callCount === 1) {
                ref = d;
                assert.equal(d['n'], 5);
            }
            if (callCount === 2) {
                assert.equal(d['n'], 6);
            }
        });
        store.Mutate(s => s.test.n, () => 6);
        setTimeout(() => {
            store.Listen(s => s.test).subscribe(d => {
                assert.equal(d['n'], 6);
                assert.equal(ref.n, 5);
                done();
            });
        }, 1000);
    });

    it('can get snapshot', (done) => {
        let callCount = 0;
        const store = new ReactiveStore({
            test: {
                b: false,
                n: 5,
                dt: DateTime.FromISOString('2019-01-01T00:00:00'),
                o: {
                    name: 'Paul'
                },
                arr: [1,2,3]
            }
        });
        let ref = store.Listen(s => s.test.n).getValue();
        let ref2 = store.Listen(s => s.test).getValue();
        let ref3 = store.Listen(s => s.test.arr).getValue();
        store.Listen(s => s.test.n).subscribe(d => {
            callCount++;
            if (callCount === 1) {
                assert.equal(d, 5);
            }
            if (callCount === 2) {
                assert.equal(d, 6);
                done();
            }
        });
        store.Mutate(s => s.test.n, () => 6);
        let afterMutate = store.Listen(s => s.test.n).getValue();
        assert.equal(ref, 5);
        assert.equal(ref2.n, 5);
        assert.equal(afterMutate, 6);
        ref = 10;
        ref2.n = 10;
        assert.equal(ref, 10);
        assert.equal(ref2.n, 10);
        assert.equal(afterMutate, 6);
        const sortedref3 = ref3.sort((a, b) => a > b ? -1 : a<b ? 1 : 0);
        assert.deepEqual(sortedref3, [3,2,1]);
        assert.deepEqual(store.Listen(s => s.test.arr).getValue(), [1,2,3]);
    });

    it('can register Function on Mutate', (done) => {
        const store = new ReactiveStore({
            test: 1
        });
        store.OnMutate(s => {
            assert.equal(s.test, 2);
            done();
        });
        store.Mutate(s => s.test, () => 2);
    });
});
