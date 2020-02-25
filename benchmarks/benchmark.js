const {StopWatch, ListSortOrder} = require('../lib/ts-tooling');

class Benchmark {
    constructor(name) {
        this.name = name;
        this.data = null;
        this.executions = 1;
        this.stats = [];
    }

    setup(cb, options) {
        this.data = cb();
        if (options.executions > 1) {
            this.executions = options.executions;
        }
    }

    run(name, cb) {
        const sw = new StopWatch();
        for (let i = 0; i < this.executions; i++) {
            cb(this.data);
        }
        const swResult = sw.ElapsedMs() / this.executions;
        this.stats.Add({
            name: name,
            duration: swResult,
            executions: this.executions,
        });
    }

    print(accuracy) {
        console.info(`Benchmark ${this.name}`);
        console.info('-------------------------------------------------');
        console.info(`Executions ${this.executions}`);
        console.info(``);
        for (const stat of this.stats.SortBy(['duration'], [ListSortOrder.ASC])) {
            console.info(`${stat.duration.toFixed(accuracy || 3)} ms => ${stat.name}`);
        }
        console.info('-------------------------------------------------');
    }
}

module.exports = Benchmark;
