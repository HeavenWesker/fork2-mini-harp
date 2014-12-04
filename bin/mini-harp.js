#!/usr/bin/env node
var miniHarp = require('../index.js');
var argv = require('minimist')(process.argv.slice(2));
var port = argv.p || 4000;
console.log('Listing on '+ port);
var app = miniHarp(argv._[0] || process.cwd()).listen(port);
