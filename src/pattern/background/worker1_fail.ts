import { parentPort, workerData } from 'worker_threads';

function factorial(n: number): number {
    throw new Error('want to fail in this Worker');
}

parentPort.postMessage(
    factorial(workerData.data)
);
