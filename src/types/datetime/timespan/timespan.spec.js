const {assert} = require('chai');
const {describe, it} = require('mocha');
const {TimeSpan} = require('./timespan');

describe('TimeSpan Tests', () => {
    it('can create empty TimeSpan', () => {
        assert.equal(new TimeSpan().Day, 0);
        assert.equal(new TimeSpan().Hour, 0);
        assert.equal(new TimeSpan().Minute, 0);
        assert.equal(new TimeSpan().Second, 0);
        assert.equal(new TimeSpan().Millisecond, 0);
    });
    it('can create predefined TimeSpan', () => {
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Day, 1);
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Hour, 12);
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Minute, 23);
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Second, 5);
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Millisecond, 200);
    });
    it('[Property]: TotalDays', () => {
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).TotalDays, 1.5160324074074074);
    });

    it('[Property]: TotalHours', () => {
        assert.equal(new TimeSpan(12, 23, 5, 200, 0).TotalHours, 12.384777777777776);
    });

    it('[Property]: TotalMinutes', () => {
        assert.equal(new TimeSpan(0, 23, 5, 200, 0).TotalMinutes, 23.086666666666666);
    });

    it('[Property]: TotalSeconds', () => {
        assert.equal(new TimeSpan(0, 0, 5, 200, 0).TotalSeconds, 5.2);
    });

    it('[Property]: TotalMilliseconds', () => {
        assert.equal(new TimeSpan(0, 0, 5, 200, 0).TotalMilliseconds, 5200);
    });
    it('[Property]: TotalWeeks', () => {
        assert.equal(new TimeSpan(0,0,0,0,7).TotalWeeks, 1);
        assert.equal(new TimeSpan(0,0,0,0,8).TotalWeeks, 1.1428571428571428);
        assert.equal(new TimeSpan(0,0,0,0,0).TotalWeeks, 0);
        assert.equal(new TimeSpan(1,0,0,0,0).TotalWeeks, 0.005952380952380952);
    });
    describe('[Method]: FromMilliseconds', () => {
        it('100 Milliseconds', () => {
            assert.equal(TimeSpan.FromMilliseconds(100).TotalDays, 0.0000011574074074074074);
            assert.equal(TimeSpan.FromMilliseconds(100).TotalHours, 0.00002777777777777778);
            assert.equal(TimeSpan.FromMilliseconds(100).TotalMinutes, 0.0016666666666666668);
            assert.equal(TimeSpan.FromMilliseconds(100).TotalSeconds, 0.1);
            assert.equal(TimeSpan.FromMilliseconds(100).TotalMilliseconds, 100);
            assert.equal(TimeSpan.FromMilliseconds(100).Day, 0);
            assert.equal(TimeSpan.FromMilliseconds(100).Hour, 0);
            assert.equal(TimeSpan.FromMilliseconds(100).Minute, 0);
            assert.equal(TimeSpan.FromMilliseconds(100).Second, 0);
            assert.equal(TimeSpan.FromMilliseconds(100).Millisecond, 100);
        });
        it('1001 Milliseconds', () => {
            assert.equal(TimeSpan.FromMilliseconds(1001).TotalDays, 0.000011585648148148147);
            assert.equal(TimeSpan.FromMilliseconds(1001).TotalHours, 0.00027805555555555553);
            assert.equal(TimeSpan.FromMilliseconds(1001).TotalMinutes, 0.016683333333333335);
            assert.equal(TimeSpan.FromMilliseconds(1001).TotalSeconds, 1.001);
            assert.equal(TimeSpan.FromMilliseconds(1001).TotalMilliseconds, 1001);
            assert.equal(TimeSpan.FromMilliseconds(1001).Day, 0);
            assert.equal(TimeSpan.FromMilliseconds(1001).Hour, 0);
            assert.equal(TimeSpan.FromMilliseconds(1001).Minute, 0);
            assert.equal(TimeSpan.FromMilliseconds(1001).Second, 1);
            assert.equal(TimeSpan.FromMilliseconds(1001).Millisecond, 1);
        });
        it('61001 Milliseconds', () => {
            assert.equal(TimeSpan.FromMilliseconds(61001).TotalDays, 0.0007060300925925926);
            assert.equal(TimeSpan.FromMilliseconds(61001).TotalHours, 0.01694472222222222);
            assert.equal(TimeSpan.FromMilliseconds(61001).TotalMinutes, 1.0166833333333334);
            assert.equal(TimeSpan.FromMilliseconds(61001).TotalSeconds, 61.001);
            assert.equal(TimeSpan.FromMilliseconds(61001).TotalMilliseconds, 61001);
            assert.equal(TimeSpan.FromMilliseconds(61001).Day, 0);
            assert.equal(TimeSpan.FromMilliseconds(61001).Hour, 0);
            assert.equal(TimeSpan.FromMilliseconds(61001).Minute, 1);
            assert.equal(TimeSpan.FromMilliseconds(61001).Second, 1);
            assert.equal(TimeSpan.FromMilliseconds(61001).Millisecond, 1);
        });
        it('3661001 Milliseconds', () => {
            assert.equal(TimeSpan.FromMilliseconds(3661001).TotalDays, 0.042372696759259254);
            assert.equal(TimeSpan.FromMilliseconds(3661001).TotalHours, 1.016944722222222);
            assert.equal(TimeSpan.FromMilliseconds(3661001).TotalMinutes, 61.01668333333333);
            assert.equal(TimeSpan.FromMilliseconds(3661001).TotalSeconds, 3661.001);
            assert.equal(TimeSpan.FromMilliseconds(3661001).TotalMilliseconds, 3661001);
            assert.equal(TimeSpan.FromMilliseconds(3661001).Day, 0);
            assert.equal(TimeSpan.FromMilliseconds(3661001).Hour, 1);
            assert.equal(TimeSpan.FromMilliseconds(3661001).Minute, 1);
            assert.equal(TimeSpan.FromMilliseconds(3661001).Second, 1);
            assert.equal(TimeSpan.FromMilliseconds(3661001).Millisecond, 1);
        });
        it('90061001 Milliseconds', () => {
            assert.equal(TimeSpan.FromMilliseconds(90061001).TotalDays, 1.0423726967592595);
            assert.equal(TimeSpan.FromMilliseconds(90061001).TotalHours, 25.016944722222224);
            assert.equal(TimeSpan.FromMilliseconds(90061001).TotalMinutes, 1501.0166833333333);
            assert.equal(TimeSpan.FromMilliseconds(90061001).TotalSeconds, 90061.001);
            assert.equal(TimeSpan.FromMilliseconds(90061001).TotalMilliseconds, 90061001);
            assert.equal(TimeSpan.FromMilliseconds(90061001).Day, 1);
            assert.equal(TimeSpan.FromMilliseconds(90061001).Hour, 1);
            assert.equal(TimeSpan.FromMilliseconds(90061001).Minute, 1);
            assert.equal(TimeSpan.FromMilliseconds(90061001).Second, 1);
            assert.equal(TimeSpan.FromMilliseconds(90061001).Millisecond, 1);
        });
    });
    describe('[Method]: FromSeconds', () => {
        it('1 Second', () => {
            assert.equal(TimeSpan.FromSeconds(1).TotalDays, 0.000011574074074074073);
            assert.equal(TimeSpan.FromSeconds(1).TotalHours, 0.0002777777777777778);
            assert.equal(TimeSpan.FromSeconds(1).TotalMinutes, 0.016666666666666666);
            assert.equal(TimeSpan.FromSeconds(1).TotalSeconds, 1);
            assert.equal(TimeSpan.FromSeconds(1).TotalMilliseconds, 1000);
            assert.equal(TimeSpan.FromSeconds(1).Day, 0);
            assert.equal(TimeSpan.FromSeconds(1).Hour, 0);
            assert.equal(TimeSpan.FromSeconds(1).Minute, 0);
            assert.equal(TimeSpan.FromSeconds(1).Second, 1);
            assert.equal(TimeSpan.FromSeconds(1).Millisecond, 0);
        });
        it('0.5 Second', () => {
            assert.equal(TimeSpan.FromSeconds(0.5).TotalDays, 0.000005787037037037037);
            assert.equal(TimeSpan.FromSeconds(0.5).TotalHours, 0.0001388888888888889);
            assert.equal(TimeSpan.FromSeconds(0.5).TotalMinutes, 0.008333333333333333);
            assert.equal(TimeSpan.FromSeconds(0.5).TotalSeconds, 0.5);
            assert.equal(TimeSpan.FromSeconds(0.5).TotalMilliseconds, 500);
            assert.equal(TimeSpan.FromSeconds(0.5).Day, 0);
            assert.equal(TimeSpan.FromSeconds(0.5).Hour, 0);
            assert.equal(TimeSpan.FromSeconds(0.5).Minute, 0);
            assert.equal(TimeSpan.FromSeconds(0.5).Second, 0);
            assert.equal(TimeSpan.FromSeconds(0.5).Millisecond, 500);
        });
    });
    describe('[Method]: FromMinutes', () => {
        it('1 Minute', () => {
            assert.equal(TimeSpan.FromMinutes(1).TotalDays, 0.0006944444444444445);
            assert.equal(TimeSpan.FromMinutes(1).TotalHours, 0.016666666666666666);
            assert.equal(TimeSpan.FromMinutes(1).TotalMinutes, 1);
            assert.equal(TimeSpan.FromMinutes(1).TotalSeconds, 60);
            assert.equal(TimeSpan.FromMinutes(1).TotalMilliseconds, 60000);
            assert.equal(TimeSpan.FromMinutes(1).Day, 0);
            assert.equal(TimeSpan.FromMinutes(1).Hour, 0);
            assert.equal(TimeSpan.FromMinutes(1).Minute, 1);
            assert.equal(TimeSpan.FromMinutes(1).Second, 0);
            assert.equal(TimeSpan.FromMinutes(1).Millisecond, 0);
        });
        it('0.5 Minute', () => {
            assert.equal(TimeSpan.FromMinutes(0.5).TotalDays, 0.00034722222222222224);
            assert.equal(TimeSpan.FromMinutes(0.5).TotalHours, 0.008333333333333333);
            assert.equal(TimeSpan.FromMinutes(0.5).TotalMinutes, 0.5);
            assert.equal(TimeSpan.FromMinutes(0.5).TotalSeconds, 30);
            assert.equal(TimeSpan.FromMinutes(0.5).TotalMilliseconds, 30000);
            assert.equal(TimeSpan.FromMinutes(0.5).Day, 0);
            assert.equal(TimeSpan.FromMinutes(0.5).Hour, 0);
            assert.equal(TimeSpan.FromMinutes(0.5).Minute, 0);
            assert.equal(TimeSpan.FromMinutes(0.5).Second, 30);
            assert.equal(TimeSpan.FromMinutes(0.5).Millisecond, 0);
        });
    });
    describe('[Method]: FromHours', () => {
        it('1 Hour', () => {
            assert.equal(TimeSpan.FromHours(1).TotalDays, 0.041666666666666664);
            assert.equal(TimeSpan.FromHours(1).TotalHours, 1);
            assert.equal(TimeSpan.FromHours(1).TotalMinutes, 60);
            assert.equal(TimeSpan.FromHours(1).TotalSeconds, 3600);
            assert.equal(TimeSpan.FromHours(1).TotalMilliseconds, 3600000);
            assert.equal(TimeSpan.FromHours(1).Day, 0);
            assert.equal(TimeSpan.FromHours(1).Hour, 1);
            assert.equal(TimeSpan.FromHours(1).Minute, 0);
            assert.equal(TimeSpan.FromHours(1).Second, 0);
            assert.equal(TimeSpan.FromHours(1).Millisecond, 0);
        });
        it('0.5 Hour', () => {
            assert.equal(TimeSpan.FromHours(0.5).TotalDays, 0.020833333333333332);
            assert.equal(TimeSpan.FromHours(0.5).TotalHours, 0.5);
            assert.equal(TimeSpan.FromHours(0.5).TotalMinutes, 30);
            assert.equal(TimeSpan.FromHours(0.5).TotalSeconds, 1800);
            assert.equal(TimeSpan.FromHours(0.5).TotalMilliseconds, 1800000);
            assert.equal(TimeSpan.FromHours(0.5).Day, 0);
            assert.equal(TimeSpan.FromHours(0.5).Hour, 0);
            assert.equal(TimeSpan.FromHours(0.5).Minute, 30);
            assert.equal(TimeSpan.FromHours(0.5).Second, 0);
            assert.equal(TimeSpan.FromHours(0.5).Millisecond, 0);
        });
    });
    describe('[Method]: FromDays', () => {
        it('1 Day', () => {
            assert.equal(TimeSpan.FromDays(1).TotalDays, 1);
            assert.equal(TimeSpan.FromDays(1).TotalHours, 24);
            assert.equal(TimeSpan.FromDays(1).TotalMinutes, 1440);
            assert.equal(TimeSpan.FromDays(1).TotalSeconds, 86400);
            assert.equal(TimeSpan.FromDays(1).TotalMilliseconds, 86400000);
            assert.equal(TimeSpan.FromDays(1).Day, 1);
            assert.equal(TimeSpan.FromDays(1).Hour, 0);
            assert.equal(TimeSpan.FromDays(1).Minute, 0);
            assert.equal(TimeSpan.FromDays(1).Second, 0);
            assert.equal(TimeSpan.FromDays(1).Millisecond, 0);
        });
        it('0.5 Day', () => {
            assert.equal(TimeSpan.FromDays(0.5).TotalDays, 0.5);
            assert.equal(TimeSpan.FromDays(0.5).TotalHours, 12);
            assert.equal(TimeSpan.FromDays(0.5).TotalMinutes, 720);
            assert.equal(TimeSpan.FromDays(0.5).TotalSeconds, 43200);
            assert.equal(TimeSpan.FromDays(0.5).TotalMilliseconds, 43200000);
            assert.equal(TimeSpan.FromDays(0.5).Day, 0);
            assert.equal(TimeSpan.FromDays(0.5).Hour, 12);
            assert.equal(TimeSpan.FromDays(0.5).Minute, 0);
            assert.equal(TimeSpan.FromDays(0.5).Second, 0);
            assert.equal(TimeSpan.FromDays(0.5).Millisecond, 0);
        });
    });
    describe('[Method]: FromIsoString', () => {
        it('can create TimeSpan from ISO Chars', () => {
            assert.equal(TimeSpan.FromISOString('05:22:12').Day, 0);
            assert.equal(TimeSpan.FromISOString('05:22:12').Hour, 5);
            assert.equal(TimeSpan.FromISOString('05:22:12').Minute, 22);
            assert.equal(TimeSpan.FromISOString('05:22:12').Second, 12);
            assert.equal(TimeSpan.FromISOString('05:22:12').Millisecond, 0);

            assert.equal(TimeSpan.FromISOString('1.05:22:12').Day, 1);
            assert.equal(TimeSpan.FromISOString('1.05:22:12').Hour, 5);
            assert.equal(TimeSpan.FromISOString('1.05:22:12').Minute, 22);
            assert.equal(TimeSpan.FromISOString('1.05:22:12').Second, 12);
            assert.equal(TimeSpan.FromISOString('1.05:22:12').Millisecond, 0);
        });
    });
    describe('[Method]: FromLuxon', () => {
        it('empty Luxon Object get zero duration', () => {
            assert.equal(TimeSpan.FromLuxon({}).Day, 0);
            assert.equal(TimeSpan.FromLuxon({}).Hour, 0);
            assert.equal(TimeSpan.FromLuxon({}).Minute, 0);
            assert.equal(TimeSpan.FromLuxon({}).Second, 0);
            assert.equal(TimeSpan.FromLuxon({}).Millisecond, 0);
        });
        it('can create TimeSpan from Luxon', () => {
            assert.equal(TimeSpan.FromLuxon({hours: 5, minutes: 22, seconds: 12}).Day, 0);
            assert.equal(TimeSpan.FromLuxon({hours: 5, minutes: 22, seconds: 12}).Hour, 5);
            assert.equal(TimeSpan.FromLuxon({hours: 5, minutes: 22, seconds: 12}).Minute, 22);
            assert.equal(TimeSpan.FromLuxon({hours: 5, minutes: 22, seconds: 12}).Second, 12);
            assert.equal(TimeSpan.FromLuxon({hours: 5, minutes: 22, seconds: 12}).Millisecond, 0);
        });
    });
    describe('[Method]: FromMoment', () => {
        const MOMENT_1 = {
            hour() {
                return 1;
            },
            minute() {
                return 0;
            },
            second() {
                return 0;
            },
            millisecond() {
                return 0;
            },
            valueOf() {
                return TimeSpan.MillisecondsPerHour;
            }
        };

        const MOMENT_2 = {
            hour() {
                return 1;
            },
            minute() {
                return 0;
            },
            second() {
                return 0;
            },
            millisecond() {
                return 0;
            },
            valueOf() {
                return 1581182006632;
            }
        };
        it('with Date', () => {
            assert.equal(TimeSpan.FromMoment(MOMENT_2).TotalDays, 18300.717669351852);
        });
        it('only Time', () => {
            assert.equal(TimeSpan.FromMoment(MOMENT_1, true).TotalDays, 0.041666666666666664);
            assert.equal(TimeSpan.FromMoment(MOMENT_1, true).TotalHours, 1);
            assert.equal(TimeSpan.FromMoment(MOMENT_1, true).TotalMinutes, 60);
            assert.equal(TimeSpan.FromMoment(MOMENT_1, true).TotalSeconds, 3600);
            assert.equal(TimeSpan.FromMoment(MOMENT_1, true).TotalMilliseconds, 3600000);
        });
    });
    describe('[Method]: FromJavaScriptDate', () => {
        const testDate = new Date(2020, 1, 8, 1,0,0);
        it('with Date', () => {
            // using span check for travis ci
            assert.isAtLeast(TimeSpan.FromJavaScriptDate(testDate).TotalDays, 18300);
            assert.isAtMost(TimeSpan.FromJavaScriptDate(testDate).TotalDays, 18300.041666666668);
        });
        it('only Time', () => {
            assert.equal(TimeSpan.FromJavaScriptDate(testDate, true).TotalDays, 0.041666666666666664);
            assert.equal(TimeSpan.FromJavaScriptDate(testDate, true).TotalHours, 1);
            assert.equal(TimeSpan.FromJavaScriptDate(testDate, true).TotalMinutes, 60);
            assert.equal(TimeSpan.FromJavaScriptDate(testDate, true).TotalSeconds, 3600);
            assert.equal(TimeSpan.FromJavaScriptDate(testDate, true).TotalMilliseconds, 3600000);
        });
    });
    describe('[Method]: Add', () => {
        it('can add a TimeSpan', () => {
            assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Second, 5);
            assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Day, 0);
            assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Hour, 0);
            assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Minute, 0);
            assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Millisecond, 0);
        });
    });
    describe('[Method]: Equal', () => {
        it('can check Equality', () => {
            assert.isTrue(new TimeSpan().Equals(new TimeSpan()));
            assert.isFalse(new TimeSpan(5).Equals(new TimeSpan()));
        });
    });
    describe('[Method]: Subtract', () => {
        it('can Subtract TimeSpan from this TimeSpan', () => {
            assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Hour, 4);
            assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Day, 0);
            assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Minute, 0);
            assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Second, 0);
            assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Millisecond, 0);
        });
    });
    describe('[Method]: Negate', () => {
        it('can negate the TimeSpan', () => {
            assert.equal(new TimeSpan(5).Negate().Hour, -5);
            assert.equal(new TimeSpan(5).Negate().Day, 0);
            assert.equal(new TimeSpan(5).Negate().Minute, 0);
            assert.equal(new TimeSpan(5).Negate().Second, 0);
            assert.equal(new TimeSpan(5).Negate().Millisecond, 0);
        });
    });
    describe('[Method]: IsBefore', () => {
        it('can check TimeSpan is before', () => {
            assert.isTrue(new TimeSpan(5).IsBefore(new TimeSpan(6)));
            assert.isFalse(new TimeSpan(5).IsBefore(new TimeSpan(2)));
        });
    });
    describe('[Method]: IsAfter', () => {
        it('can check TimeSpan is after', () => {
            assert.isTrue(new TimeSpan(5).IsAfter(new TimeSpan(2)));
            assert.isFalse(new TimeSpan(5).IsAfter(new TimeSpan(6)));
        });
    });
    describe('[Method]: ToString', () => {
        it('default pattern is D.HH:mm:ss', () => {
            assert.equal(new TimeSpan(1,1,1,1,1).ToString(), '1.01:01:01');
            assert.equal(new TimeSpan(5, 3, 4).ToString(), '05:03:04');
        });
        it('pattern D.HH:mm:ss.SSS', () => {
            assert.equal(new TimeSpan(1,1,1,1,1).ToString('D.HH:mm:ss.SSS'), '1.01:01:01.001');
        });
        it('pattern D.H:m:s.SS', () => {
            assert.equal(new TimeSpan(1,1,1,1,1).ToString('D.H:m:s.SS'), '1.1:1:1.01');
        });
        it('pattern D.H:m:s.S', () => {
            assert.equal(new TimeSpan(1,1,1,1,1).ToString('D.H:m:s.S'), '1.1:1:1.1');
        });
    });
});
