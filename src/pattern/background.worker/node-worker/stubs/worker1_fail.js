const { parentPort, workerData } = require('worker_threads');

function factorial(n) {
    throw new Error('want to fail in this Worker');
}

parentPort.postMessage(
    factorial(workerData.data)
);
