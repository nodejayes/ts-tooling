const path = require('path');
const fs = require('fs');

const LIB_PATH = path.join(__dirname, '..', 'lib');

function cleanRecursive(folder) {
    const entries = fs.readdirSync(folder);
    for (const entry of entries) {
        const fullpath = path.join(folder, entry);
        const stats = fs.statSync(fullpath);
        if (stats.isDirectory()) {
            cleanRecursive(fullpath);
        } else if ((fullpath.endsWith('.js') && !fullpath.endsWith('.bundle.js')) || fullpath.endsWith('.map')) {
            fs.unlinkSync(fullpath);
        }
    }
}

cleanRecursive(LIB_PATH);
