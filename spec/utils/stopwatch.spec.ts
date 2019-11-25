import {assert} from 'chai';
import {StopWatch} from '../../src/ts-tooling';
import 'mocha';

describe("Test StopWatch", () => {
    it('can create the Stopwatch and measure the Time', (done) => {
        const sw = new StopWatch();
        setTimeout(() => {
            assert.isAbove(sw.ElapsedMs(), 0);
            done();
        }, 1);
    });

    it('can measure multiple Times', (done) => {
        const sw = new StopWatch();
        sw.SectionStart('1');
        setTimeout(() => {
            assert.isAbove(sw.SectionElapsedMs('1'), 0);
            done();
        }, 1);
    });

    it('nothing on select not existent Section elapsed', (done) => {
        const sw = new StopWatch();
        setTimeout(() => {
            assert.equal(sw.SectionElapsedMs('1'), 0);
            done();
        }, 1);
    });

    it('overwrite existing Section', (done) => {
        const sw = new StopWatch();
        sw.SectionStart('1');
        setTimeout(() => {
            assert.isAbove(sw.SectionElapsedMs('1'), 0);
            assert.isBelow(sw.SectionElapsedMs('1'), 20);
            sw.SectionStart('1');
            setTimeout(() => {
                assert.isAbove(sw.SectionElapsedMs('1'), 8);
                done();
            }, 10);
        }, 1);
    });

    it('make pause without resume', () => {
        const sw = new StopWatch();
        assert.isFalse(sw.IsPause);
        setTimeout(() => {
            sw.Pause();
            assert.isTrue(sw.IsPause);
            setTimeout(() => {
                assert.isAbove(sw.ElapsedMs(), 9);
                assert.isBelow(sw.ElapsedMs(), 20);
            }, 10);
        }, 10);
    });

    it('make pause with resume', () => {
        const sw = new StopWatch();
        assert.isFalse(sw.IsPause);
        setTimeout(() => {
            sw.Pause();
            assert.isTrue(sw.IsPause);
            setTimeout(() => {
                sw.Resume();
                assert.isFalse(sw.IsPause);
                setTimeout(() => {
                    assert.isAbove(sw.ElapsedMs(), 19);
                    assert.isBelow(sw.ElapsedMs(), 30);
                }, 10);
            }, 10);
        }, 10);
    });

    it('make section pause without resume', () => {
        const sw = new StopWatch();
        sw.SectionStart('1');
        assert.isFalse(sw.IsSectionPause('1'));
        setTimeout(() => {
            sw.SectionPause('1');
            assert.isTrue(sw.IsSectionPause('1'));
            setTimeout(() => {
                assert.isAbove(sw.SectionElapsedMs('1'), 9);
                assert.isBelow(sw.SectionElapsedMs('1'), 20);
            }, 10);
        }, 10);
    });

    it('make section pause with resume', () => {
        const sw = new StopWatch();
        sw.SectionStart('1');
        assert.isFalse(sw.IsSectionPause('1'));
        setTimeout(() => {
            sw.SectionPause('1');
            assert.isTrue(sw.IsSectionPause('1'));
            setTimeout(() => {
                sw.SectionResume('1');
                assert.isFalse(sw.IsSectionPause('1'));
                setTimeout(() => {
                    assert.isAbove(sw.SectionElapsedMs('1'), 19);
                    assert.isBelow(sw.SectionElapsedMs('1'), 30);
                }, 10);
            }, 10);
        }, 10);
    });
});
