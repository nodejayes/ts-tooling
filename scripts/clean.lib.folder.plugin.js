const fs = require('fs');
const path = require('path');

function dropDirs(dir, dropRoot) {
    if (!fs.existsSync(dir)) {
        return;
    }
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
        const fullpath = path.join(dir, entry);
        const stats = fs.statSync(fullpath);
        if (stats.isDirectory()) {
            dropDirs(fullpath, true);
            continue;
        }
        if (dropRoot === true) {
            fs.unlinkSync(fullpath);
        }
    }
    if (dropRoot === true) {
        fs.rmdirSync(dir);
    }
}

class CleanLibFolderPlugin {
    constructor(libFolder) {
        this.libFolder = libFolder;
    }

    apply(compiler) {
        compiler.hooks.beforeRun.tap(
            'CleanLibFolderPlugin',
            () => {
                dropDirs(this.libFolder, true);
            },
        )
    }
}

module.exports = CleanLibFolderPlugin;
