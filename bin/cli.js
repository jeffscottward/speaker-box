#!/usr/bin/env node
var path = require('path');
var fs = require('fs');
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
require(lib + '/index.js');


// if(process.argv[2].length > 0){
//   sys.puts('theres an arg');
// }
