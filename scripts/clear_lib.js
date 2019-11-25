const path = require('path');
const fse = require('fs-extra');

const LIB_PATH = path.join(__dirname, '..', 'lib');

fse.emptyDirSync(LIB_PATH);
