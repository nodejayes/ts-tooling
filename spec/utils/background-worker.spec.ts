import {assert} from 'chai';
import 'mocha';
import {BackgroundWorker} from '../../src/ts-tooling';

describe('Background Worker Tests', () => {
    it('can create Background Worker', (done) => {
        const worker = new BackgroundWorker();
        worker.Work(d => {});
        worker.OnFinish.subscribe(() => {
            done();
        });
        worker.OnError.subscribe(() => {
            assert.fail();
        });
        worker.OnCancel.subscribe(() => {
            assert.fail();
        });
        worker.Run();
    });
});