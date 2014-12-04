module.exports = function(root){
  var connect = require('connect');
  var path = require('path')
  var fs = require('fs')
  var blocked  = require('./lib/processor/blocked.js')
  var rewrites = require('./lib/processor/rewrites.js')
  var makeJade = require('./lib/processor/jade.js')
  var makeLess = require('./lib/processor/less.js')
  var serveStatic = require('serve-static');
  var app = connect()
  .use(function(req, res, next){
    console.log(req.url)
    if(req.url == '/current-time'){
      res.write((new Date()).toISOString());
      res.end();
    }else{
      next();
    }
  })
  .use(blocked())
  .use(rewrites())
  .use(serveStatic(root))
  .use(makeJade(root))
  .use(makeLess(root))
  return app;
};
