const {StopWatch, ListSortOrder} = require('../lib/ts-tooling');

class Benchmark {
    constructor(name) {
        this.name = name;
        this.data = null;
        this.runtime = 1;
        this.stats = [];
    }

    setup(cb, options) {
        this.data = cb();
        if (options.runtime > 1) {
            this.runtime = options.runtime;
        }
    }

    run(name, cb) {
        const sw1 = new StopWatch();
        let runs = 0;
        let totalTime = 0;
        do {
            cb(this.data);
            runs++;
            totalTime = sw1.ElapsedMs();
        } while (totalTime < this.runtime);
        const hz = (runs * this.runtime) / totalTime;
        this.stats.Add({
            name: name,
            duration: totalTime,
            runtime: this.runtime,
            ops: hz,
        });
    }

    print(accuracy) {
        console.info(`Benchmark ${this.name}`);
        console.info('-------------------------------------------------');
        for (const stat of this.stats.SortBy(['ops'], [ListSortOrder.DESC])) {
            console.info(`${stat.ops.toFixed(accuracy || 0)} ops/sec ${stat.duration.toFixed(accuracy || 3)} ms => ${stat.name}`);
        }
        console.info('-------------------------------------------------');
    }
}

module.exports = Benchmark;
