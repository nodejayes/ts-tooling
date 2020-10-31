const {Benchmark} = require('benchmark');

const A10 = new Array(10);
const A100 = new Array(100);
const A1000 = new Array(1000);
const A1000000 = new Array(1000000);
(function () {
    let counter = 0;
    while (++counter < 10) {
        A10.push(counter);
    }
    while (++counter < 100) {
        A100.push(counter);
    }
    while (++counter < 1000) {
        A1000.push(counter);
    }
    while (++counter < 1000000) {
        A1000000.push(counter);
    }
})();

(new Benchmark.Suite).add('10 for', () => {
    for (let i = 0; i < A10.length; i++) {
        A10[i] = A10[i]*2;
    }
}).add('100 for', () => {
    for (let i = 0; i < A100.length; i++) {
        A100[i] = A100[i]*2;
    }
}).add('1000 for', () => {
    for (let i = 0; i < A1000.length; i++) {
        A1000[i] = A1000[i]*2;
    }
}).add('1000000 for', () => {
    for (let i = 0; i < A1000000.length; i++) {
        A1000000[i] = A1000000[i]*2;
    }
}).add('10 while', () => {
    let c = 0;
    while (c++ < 10) {
        A10[c] = A10[c]*2;
    }
}).add('100 while', () => {
    let c = 0;
    while (c++ < 100) {
        A100[c] = A100[c]*2;
    }
}).add('1000 while', () => {
    let c = 0;
    while (c++ < 1000) {
        A1000[c] = A1000[c]*2;
    }
}).add('1000000 while', () => {
    let c = 0;
    while (c++ < 1000000) {
        A1000000[c] = A1000000[c]*2;
    }
}).add('10 for of', () => {
    let c = 0;
    for (const item of A10) {
        A10[c] = item*2;
        c++;
    }
}).add('100 for of', () => {
    let c = 0;
    for (const item of A100) {
        A100[c] = item*2;
        c++;
    }
}).add('1000 for of', () => {
    let c = 0;
    for (const item of A1000) {
        A1000[c] = item*2;
        c++;
    }
}).add('1000000 for of', () => {
    let c = 0;
    for (const item of A1000000) {
        A1000000[c] = item*2;
        c++;
    }
}).add('10 for cached', () => {
    for (let i = 0, l = A10.length; i < l; i++) {
        A10[i] = A10[i]*2;
    }
}).add('100 for cached', () => {
    for (let i = 0, l = A100.length; i < l; i++) {
        A100[i] = A100[i]*2;
    }
}).add('1000 for cached', () => {
    for (let i = 0, l = A1000.length; i < l; i++) {
        A1000[i] = A1000[i]*2;
    }
}).add('1000000 for cached', () => {
    for (let i = 0, l = A1000000.length; i < l; i++) {
        A1000000[i] = A1000000[i]*2;
    }
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
