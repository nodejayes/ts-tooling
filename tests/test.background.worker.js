const {BackgroundWorker} = require('../dist/ts-tooling');

describe('BackgroundWorker Browser Tests', () => {
    it('start a thread', (done) => {
        const worker = new BackgroundWorker('worker1.js');
        worker.OnError.subscribe(() => {
            assert.fail();
        });
        worker.OnFinish.subscribe((d) => {
            console.info(d);
            done();
        });
        worker.Run(1);
    });
});
