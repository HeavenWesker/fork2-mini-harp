module.exports = function(){
  var connect = require('connect');
  var app = connect().use(function(req, res, next){
    if(req.url == '/current-time'){
      res.write((new Date()).toISOString());
      res.end();
    }else{
      next();
    }
  });
  return app;
};
