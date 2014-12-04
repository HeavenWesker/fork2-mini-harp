module.exports = function(root){
  var connect = require('connect');
  var path = require('path')
  var fs = require('fs')
  var makeJade = require('./lib/processor/jade.js')
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
  .use(makeJade(root))
  .use(serveStatic(root))
  return app;
};
