const readts = require('readts');

const parser = new readts.Parser();

// Read configuration used in the project we want to analyze.
const config = parser.parseConfig('./../tsconfig.json');

// Modify configuration as needed, for example to avoid writing compiler output to disk.
config.options.noEmit = true;

// Parse the project.
const tree = parser.parse(config);

console.info(tree);
