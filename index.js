module.exports = function(dir){
  var connect = require('connect');
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
  .use(serveStatic(dir))
  return app;
};
