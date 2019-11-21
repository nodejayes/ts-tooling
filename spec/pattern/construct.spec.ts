import {assert} from 'chai';
import {create, createWithFactory} from '../../src/ts-tooling.node';
import 'mocha';

describe('construct Tests', () => {
   it('can define null safe Value', () => {
       assert.isNull(create(undefined));
       assert.equal(create(undefined, 2), 2);
       assert.isNull(create(null));
       assert.equal(create(1), 1);
       assert.equal(create(false), false);
       assert.equal(create([1,2,3]).ElementAt(0), 1);
       assert.equal(create([1,2,3]).ElementAt(1), 2);
       assert.equal(create([1,2,3]).ElementAt(2), 3);
   });

   it('can create with factory method', () => {
       const factory = (argument1: string) => { return argument1; };
       assert.equal(createWithFactory<string>(factory, ['test']), 'test');
       assert.equal(createWithFactory<string>(factory, [], 'default'), 'default');
   });
});
