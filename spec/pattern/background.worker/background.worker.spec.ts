import {assert} from 'chai';
import 'mocha';
import {join} from 'path';
import {BackgroundWorker} from '../../../src/ts-tooling';
import {zip} from "rxjs";

describe('BackgroundWorker Tests', () => {
    it('run BackgroundWorker with external File', (done) => {
        const worker = new BackgroundWorker(join(__dirname, './worker1.ts'));
        worker.OnError.subscribe(err => {
            console.error(err);
            assert.fail('a Error was thrown in worker!');
        });
        worker.OnFinish.subscribe(d => {
            assert.equal(d, 120);
            done();
        });
        worker.Run(5);
    });
    it('run multiple Workers', (done) => {
        let counter = 1;
        const worker1 = new BackgroundWorker(join(__dirname, './worker1.ts'));
        worker1.OnFinish.subscribe((d) => {
            assert.equal(d, 2.6525285981219103e+32);
            counter++;
            if (counter === 16) {
                done();
            }
        });
        for (let i = 0; i < 16; i++) {
            worker1.Run(30);
        }
    });
});
