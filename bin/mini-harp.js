#!/usr/bin/env node
var miniHarp = require('../index.js');
var argv = require('minimist')(process.argv.slice(2));
console.log('Listing on '+ argv.p || 400 +'port');
var app = miniHarp(argv._[0] || process.cwd()).listen(argv.p || 4000);
