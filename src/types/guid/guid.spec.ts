import {assert} from 'chai';
import {Guid} from '../../ts-tooling';
import 'mocha';

describe('Guid Tests', () => {
    it('can generate a new Guid', () => {
        assert.isFalse(new Guid().IsEmpty);
        assert.equal(new Guid().ToString().length, 36);
    });

    it('can validate Guid', () => {
        assert.throw(() => {
            new Guid('000-00000-0000-0000-0000-000000000000');
        }, 'guid is invalid 000-00000-0000-0000-0000-000000000000');
        assert.throw(() => {
            new Guid('000-0000-0000-0000-0000-000000000000');
        }, 'guid is invalid 000-0000-0000-0000-0000-000000000000');
        assert.throw(() => {
            new Guid('000000000-000-0000-0000-000000000000');
        }, 'guid is invalid 000000000-000-0000-0000-000000000000');
        assert.throw(() => {
            new Guid('00000000-0000-q000-0000-000000000000');
        }, 'guid is invalid 00000000-0000-q000-0000-000000000000');
        assert.isFalse(Guid.Validate('00000000-0000-q000-0000-000000000000'));
        assert.isTrue(Guid.Validate('00000000-0000-0000-0000-000000000000'));
    });

    it('use lowercase letters for guids', () => {
        assert.equal(new Guid('AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA').ToString(), 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa');
    });

    it('can get the empty guid', () => {
        assert.equal(Guid.Empty.ToString(), '00000000-0000-0000-0000-000000000000');
    });

    it('can check for empty guid', () => {
        assert.isTrue(new Guid('00000000-0000-0000-0000-000000000000').IsEmpty);
    });

    it('can return a string representation', () => {
        assert.equal(new Guid('d46e9273-e380-4b49-86f7-4c23df257c47').ToString(), 'd46e9273-e380-4b49-86f7-4c23df257c47');
    });

    it('can equal two Guids', () => {
        const c1 = 'd46e9273-e380-4b49-86f7-4c23df257c47';
        const c2 = 'd46e9273-e381-4b49-86f7-4c23df257c47';
        const g1 = new Guid('d46e9273-e380-4b49-86f7-4c23df257c47');
        const g2 = new Guid('d46e9273-e380-4b49-86f7-4c23df257c47');
        const g3 = new Guid(c2);
        assert.isTrue(g1.Equals(g2));
        assert.isFalse(g1.Equals(g3));
        assert.isTrue(g1.Equals(c1));
        assert.isFalse(g1.Equals(c2));
    });
});
