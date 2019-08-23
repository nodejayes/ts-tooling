import {assert} from 'chai';
import {create, List} from '../../src/ts-tooling';

describe('construct Tests', () => {
   it('can define null safe Value', () => {
       assert.isNull(create(undefined));
       assert.equal(create(undefined, 2), 2);
       assert.isNull(create(null));
       assert.equal(create(1), 1);
       assert.equal(create(false), false);
       assert.equal(create(new List([1,2,3])).ElementAt((0).ToInteger()), 1);
       assert.equal(create(new List([1,2,3])).ElementAt((1).ToInteger()), 2);
       assert.equal(create(new List([1,2,3])).ElementAt((2).ToInteger()), 3);
   });
});
