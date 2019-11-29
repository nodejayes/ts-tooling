describe("Test StopWatch", () => {
    it('can create the Stopwatch and measure the Time', (done) => {
        const sw = new tst.StopWatch();
        setTimeout(() => {
            chai.assert.isAbove(sw.ElapsedMs(), 0);
            done();
        }, 1);
    });

    it('can measure multiple Times', (done) => {
        const sw = new tst.StopWatch();
        sw.SectionStart('1');
        setTimeout(() => {
            chai.assert.isAbove(sw.SectionElapsedMs('1'), 0);
            done();
        }, 1);
    });

    it('nothing on select not existent Section elapsed', (done) => {
        const sw = new tst.StopWatch();
        setTimeout(() => {
            chai.assert.equal(sw.SectionElapsedMs('1'), 0);
            done();
        }, 1);
    });

    it('overwrite existing Section', (done) => {
        const sw = new tst.StopWatch();
        sw.SectionStart('1');
        setTimeout(() => {
            chai.assert.isAbove(sw.SectionElapsedMs('1'), 0);
            chai.assert.isBelow(sw.SectionElapsedMs('1'), 20);
            sw.SectionStart('1');
            setTimeout(() => {
                chai.assert.isAbove(sw.SectionElapsedMs('1'), 8);
                done();
            }, 10);
        }, 1);
    });

    it('make pause without resume', () => {
        const sw = new tst.StopWatch();
        chai.assert.isFalse(sw.IsPause);
        setTimeout(() => {
            sw.Pause();
            chai.assert.isTrue(sw.IsPause);
            setTimeout(() => {
                chai.assert.isAbove(sw.ElapsedMs(), 9);
                chai.assert.isBelow(sw.ElapsedMs(), 20);
            }, 10);
        }, 10);
    });

    it('make pause with resume', () => {
        const sw = new tst.StopWatch();
        chai.assert.isFalse(sw.IsPause);
        setTimeout(() => {
            sw.Pause();
            chai.assert.isTrue(sw.IsPause);
            setTimeout(() => {
                sw.Resume();
                chai.assert.isFalse(sw.IsPause);
                setTimeout(() => {
                    chai.assert.isAbove(sw.ElapsedMs(), 19);
                    chai.assert.isBelow(sw.ElapsedMs(), 30);
                }, 10);
            }, 10);
        }, 10);
    });

    it('make section pause without resume', () => {
        const sw = new tst.StopWatch();
        sw.SectionStart('1');
        chai.assert.isFalse(sw.IsSectionPause('1'));
        setTimeout(() => {
            sw.SectionPause('1');
            chai.assert.isTrue(sw.IsSectionPause('1'));
            setTimeout(() => {
                chai.assert.isAbove(sw.SectionElapsedMs('1'), 9);
                chai.assert.isBelow(sw.SectionElapsedMs('1'), 20);
            }, 10);
        }, 10);
    });

    it('make section pause with resume', () => {
        const sw = new tst.StopWatch();
        sw.SectionStart('1');
        chai.assert.isFalse(sw.IsSectionPause('1'));
        setTimeout(() => {
            sw.SectionPause('1');
            chai.assert.isTrue(sw.IsSectionPause('1'));
            setTimeout(() => {
                sw.SectionResume('1');
                chai.assert.isFalse(sw.IsSectionPause('1'));
                setTimeout(() => {
                    chai.assert.isAbove(sw.SectionElapsedMs('1'), 19);
                    chai.assert.isBelow(sw.SectionElapsedMs('1'), 30);
                }, 10);
            }, 10);
        }, 10);
    });
});
