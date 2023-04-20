const {
    performance
} = require('perf_hooks');
require('mocha');

function print(meta, title) {
    console.log(title);
    console.log('----------------------------------------');
    if (meta.tsTooling.hasBenchmark) {
        console.log(`tsTooling: ${meta.tsTooling.duration} ms`);
    } else {
        console.log('tsTooling: no benchmark');
    }
    if (meta.nativeJs.hasBenchmark) {
        console.log(`nativeJs:  ${meta.nativeJs.duration} ms`);
    } else {
        console.log('nativeJs:  no benchmark');
    }
    if (meta.lodash.hasBenchmark) {
        console.log(`lodash:    ${meta.lodash.duration} ms`);
    } else {
        console.log('lodash:    no benchmark');
    }
    console.log('----------------------------------------');
}

function executeBenchmarks(benchmarks, title) {
    let meta = {
        tsTooling: {
            duration: 0,
            hasBenchmark: true,
        },
        nativeJs: {
            duration: 0,
            hasBenchmark: true,
        },
        lodash: {
            duration: 0,
            hasBenchmark: true,
        },
    };
    let start = performance.now();
    if (benchmarks.tsTooling() === undefined) {
        meta.tsTooling.hasBenchmark = false;
    }
    meta.tsTooling.duration = performance.now() - start;

    start = performance.now();
    if (benchmarks.nativeJs() === undefined) {
        meta.nativeJs.hasBenchmark = false;
    }
    meta.nativeJs.duration = performance.now() - start;

    start = performance.now();
    if (benchmarks.lodash() === undefined) {
        meta.lodash.hasBenchmark = false;
    }
    meta.lodash.duration = performance.now() - start;

    print(meta, title);
}

describe('Array Benchmarks', () => {
    it('Add', () => executeBenchmarks(require('./types/array/Add'), 'Array.Add'));
    it('AddIfNotExists', () => executeBenchmarks(require('./types/array/AddIfNotExist'), 'Array.AddIfNotExists'));
    it('AddRange', () => executeBenchmarks(require('./types/array/AddRange'), 'Array.AddRange'));
    it('AddRangeIfNotExists', () => executeBenchmarks(require('./types/array/AddRangeIfNotExists'), 'Array.AddRangeIfNotExists'));
    it('Any', () => executeBenchmarks(require('./types/array/Any'), 'Array.Any'));
    it('Chunk', () => executeBenchmarks(require('./types/array/Chunk'), 'Array.Chunk'));
    it('Clear', () => executeBenchmarks(require('./types/array/Clear'), 'Array.Clear'));
    it('Contains', () => executeBenchmarks(require('./types/array/Contains'), 'Array.Contains'));
    it('Convert', () => executeBenchmarks(require('./types/array/Convert'), 'Array.Convert'));
    it('Copy', () => executeBenchmarks(require('./types/array/Copy'), 'Array.Copy'));
    it('Count', () => executeBenchmarks(require('./types/array/Count'), 'Array.Count'));
    it('ElementAt', () => executeBenchmarks(require('./types/array/ElementAt'), 'Array.ElementAt'));
    it('Exist', () => executeBenchmarks(require('./types/array/Exists'), 'Array.Exists'));
    it('Find', () => executeBenchmarks(require('./types/array/Find'), 'Array.Find'));
    it('FindAll', () => executeBenchmarks(require('./types/array/FindAll'), 'Array.FindAll'));
    it('FindIndex', () => executeBenchmarks(require('./types/array/FindIndex'), 'Array.FindIndex'));
    it('FindLast', () => executeBenchmarks(require('./types/array/FindLast'), 'Array.FindLast'));
    it('FindLastIndex', () => executeBenchmarks(require('./types/array/FindLastIndex'), 'Array.FindLastIndex'));
    it('FirstOrDefault', () => executeBenchmarks(require('./types/array/FirstOrDefault'), 'Array.FirstOrDefault'));
    it('Flat', () => executeBenchmarks(require('./types/array/Flat'), 'Array.Flat'));
    it('ForSegment', () => executeBenchmarks(require('./types/array/ForSegment'), 'Array.ForSegment'));
    it('GroupBy', () => executeBenchmarks(require('./types/array/GroupBy'), 'Array.GroupBy'));
    it('GroupKey', () => executeBenchmarks(require('./types/array/GroupKey'), 'Array.GroupKey'));
    it('Head', () => executeBenchmarks(require('./types/array/Head'), 'Array.Head'));
    it('IndexOf', () => executeBenchmarks(require('./types/array/IndexOf'), 'Array.IndexOf'));
    it('Insert', () => executeBenchmarks(require('./types/array/Insert'), 'Array.Insert'));
    it('InsertRange', () => executeBenchmarks(require('./types/array/InsertRange'), 'Array.InsertRange'));
    it('Tail', () => executeBenchmarks(require('./types/array/Tail'), 'Array.Tail'));
    it('RemoveCountFromStart', () => executeBenchmarks(require('./types/array/RemoveCountFromStart'), 'Array.RemoveCountFromStart'));
    it('RemoveCountFromEnd', () => executeBenchmarks(require('./types/array/RemoveCountFromEnd'), 'Array.RemoveCountFromEnd'));
});
