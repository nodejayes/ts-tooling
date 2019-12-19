import {BackgroundWorker} from "../../src/pattern/background.worker/background.worker";
import {assert} from "chai";

describe('BackgroundWorker Tests', () => {
    it('run BackgroundWorker with external File', (done) => {
        const worker = new tst.BackgroundWorker('worker1.js');
        worker.OnError.subscribe(err => {
            console.error(err);
            chai.assert.fail('a Error was thrown in worker!');
        });
        worker.OnFinish.subscribe(d => {
            chai.assert.equal(d, 120);
            done();
        });
        worker.Run(5);
    });
    it('run multiple Workers', (done) => {
        var counter = 1;
        const worker1 = new tst.BackgroundWorker('worker1.js');
        worker1.OnFinish.subscribe((d) => {
            chai.assert.equal(d, 2.6525285981219103e+32);
            counter++;
            if (counter === 16) {
                done();
            }
        });
        for (let i = 0; i < 16; i++) {
            worker1.Run(30);
        }
    });
    it('throws Error when empty worker path was given', () => {
        chai.assert.throws(() => {
            new tst.BackgroundWorker('');
        }, 'missing DoWork Path/File ');
    });
    it('throws Error when has no Typescript or Javascript endings', () => {
        chai.assert.throws(() => {
            new tst.BackgroundWorker('test.bash');
        }, 'test.bash is not supported Script for BackgroundWorker');
    });
    it('invoke Error Stream', (done) => {
        var worker = new tst.BackgroundWorker(WORKER_1_FAIL_TYPESCRIPT);
        worker.OnError.subscribe(err => {
            done();
        });
        worker.OnFinish.subscribe(d => {
            chai.assert.fail('a Error was thrown in worker!');
        });
        worker.Run(5);
    });
});
