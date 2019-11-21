import {assert} from 'chai';
import {IDisposable, using} from '../../../src/ts-tooling.node';
import 'mocha';

class WithDisposable implements IDisposable {
    Name = 'WithoutDisposable';

    Dispose(): void {
        this.Name = '';
    }
}

describe('using Tests', () => {
    it('can call with using', () => {
        using(WithDisposable, (i) => {
            assert.equal(i.Name, 'WithoutDisposable');
        });
    });
});
