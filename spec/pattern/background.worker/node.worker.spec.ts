import {assert} from 'chai';
import 'mocha';
import {join} from 'path';
import {BackgroundWorker} from '../../../src/ts-tooling';

const WORKER_1_TYPESCRIPT = join(__dirname, './worker1.ts');
const WORKER_2_JAVASCRIPT = join(__dirname, './worker2.js');
const NOT_EXISTS_WORKER_FILE = join(__dirname, './worker3.ts');
const TEST_BASH_SCRIPT = join(__dirname, './test.bash');

describe('BackgroundWorker Tests', () => {
    it('run BackgroundWorker with external File', (done) => {
        const worker = new BackgroundWorker(WORKER_1_TYPESCRIPT);
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
        const worker1 = new BackgroundWorker(WORKER_1_TYPESCRIPT);
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
    it('run javascript worker', (done) => {
        const worker = new BackgroundWorker(WORKER_2_JAVASCRIPT);
        worker.OnFinish.subscribe((d) => {
            assert.equal(d, 2.6525285981219103e+32);
            done();
        });
        worker.OnError.subscribe((err) => {
            console.error(err);
            assert.fail('a Error was thrown in worker!');
        });
        worker.Run(30);
    });
    it('throws Error when empty worker path was given', () => {
        let worker = new BackgroundWorker('');
        assert.throws(() => {
            worker.Run();
        }, 'missing DoWork Path/File ');
        worker = new BackgroundWorker(NOT_EXISTS_WORKER_FILE);
        assert.throws(() => {
            worker.Run();
        }, 'missing DoWork Path/File ' + NOT_EXISTS_WORKER_FILE);
    });
    it('throws Error when has no Typescript or Javascript endings', () => {
        let worker = new BackgroundWorker(TEST_BASH_SCRIPT);
        assert.throws(() => {
            worker.Run();
        }, TEST_BASH_SCRIPT + ' is not supported Script for BackgroundWorker');
    });
});
