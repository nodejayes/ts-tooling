function Using(item, cb) {
    const tmp = new item();
    cb(tmp);
    tmp.Dispose();
}

module.exports = {Using};
