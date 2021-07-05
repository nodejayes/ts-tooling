function createObserver() {
    let listeners = [];
    return {
        subscribe: listener => {
            listeners.Add(listener);
            return () => {
                listeners = listeners.RemoveAll(l => l === listener);
            };
        },
        publish: (event) => {
            listeners.forEach(l => l(event));
        }
    };
}

module.exports = {createObserver};
