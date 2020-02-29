const {Using} = require('./Using');
const {assert} = require('chai');

class WithDisposable {
    constructor() {
        this.Name = 'WithoutDisposable';
    }

    Dispose() {
        this.Name = '';
    }
}

describe('Using Tests', () => {
    it('can call with Using', () => {
        Using(WithDisposable, (i) => {
            assert.equal(i.Name, 'WithoutDisposable');
            setTimeout(() => {
                assert.equal(i.Name, '');
            }, 1);
        });
    });
});
