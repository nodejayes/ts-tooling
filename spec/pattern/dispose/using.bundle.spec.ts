import {assert} from 'chai';
const {IDisposable, using} = require('../../../src/ts-tooling');
import 'mocha';

class WithDisposable {
    Name = 'WithoutDisposable';

    Dispose(): void {
        this.Name = '';
    }
}

describe('using Tests', () => {
    it('can call with using', () => {
        using(WithDisposable, (i) => {
            assert.equal(i.Name, 'WithoutDisposable');
            setTimeout(() => {
                assert.equal(i.Name, '');
            }, 1);
        });
    });
});
