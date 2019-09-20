import {assert} from 'chai';
import {StopWatch} from "../../src/ts-tooling";

describe("Test StopWatch", () => {
    it('can create the Stopwatch and measure the Time', (done) => {
        const sw = new StopWatch();
        setTimeout(() => {
            assert.isAbove(sw.ElapsedMs().Value, 0);
            done();
        }, 1);
    });

    it('can measure multiple Times', (done) => {
        const sw = new StopWatch();
        sw.SectionStart('1');
        setTimeout(() => {
            assert.isAbove(sw.SectionElapsedMs('1').Value, 0);
            done();
        }, 1);
    });

    it('nothing on select not existent Section elapsed', (done) => {
        const sw = new StopWatch();
        setTimeout(() => {
            assert.equal(sw.SectionElapsedMs('1').Value, 0);
            done();
        }, 1);
    });

    it('overwrite existing Section', (done) => {
        const sw = new StopWatch();
        sw.SectionStart('1');
        setTimeout(() => {
            assert.isAbove(sw.SectionElapsedMs('1').Value, 0);
            assert.isBelow(sw.SectionElapsedMs('1').Value, 10);
            sw.SectionStart('1');
            setTimeout(() => {
                assert.isAbove(sw.SectionElapsedMs('1').Value, 10);
                done();
            }, 10);
        }, 1);
    });
});
