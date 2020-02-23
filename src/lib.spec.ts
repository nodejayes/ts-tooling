import 'mocha';
import {assert} from 'chai';
import {ListSortOrder} from '../lib/array';
import {ReactiveStore, SafeBehaviorSubject} from '../lib/reactive-store';
import {EventHandler} from '../lib/event-handler';
import {using, createWithFactory, create, throttle} from '../lib/pattern';
import {BackgroundWorker as NodeBackgroundWorker} from '../lib/node-worker';
import {BackgroundWorker as WebBackgroundWorker} from '../lib/web-worker';

/**
 * Test if the Types are generated correctly in the Submodules from the lib folder
 */

describe('lib export Tests', () => {
    describe('Pattern Modules', () => {
        it('Node Worker', () => {
            assert.isDefined(NodeBackgroundWorker);
        });
        it('Web Worker', () => {
            assert.isDefined(WebBackgroundWorker);
        });
        it('Reactive Store', () => {
            assert.isDefined(ReactiveStore);
            assert.isDefined(SafeBehaviorSubject);
        });
        it('Event Handler', () => {
            assert.isDefined(EventHandler);
        });
        it('Pattern', () => {
            assert.isFunction(using);
            assert.isFunction(create);
            assert.isFunction(createWithFactory);
            assert.isFunction(throttle);
        });
    });
    describe('Type Modules', () => {
        it('array', () => {
            assert.isDefined(ListSortOrder);
            assert.isFunction([1].Add);
            assert.isFunction([1].Replace);
            assert.isFunction([1].Insert);
            assert.isFunction([1].InsertRange);
            assert.isFunction([1].Remove);
            assert.isFunction([1].RemoveAt);
            assert.isFunction([1].RemoveAll);
            assert.isFunction([1].RemoveRange);
            assert.isFunction([1].GroupBy);
        });
        it('byte', () => {});
        it('datetime', () => {});
        it('dictionary', () => {});
        it('guid', () => {});
        it('number', () => {
            // assert.isFunction((1).IsBelow);
        });
        it('object', () => {});
        it('string', () => {
            // assert.isFunction(''.Concat);
        });
    });
    describe('Util Modules', () => {
        it('compression', () => {});
        it('generator', () => {});
        it('stopwatch', () => {});
        it('validation', () => {});
    });
});
