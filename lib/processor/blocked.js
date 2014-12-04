module.exports = function(){
  return function(req, res, next){
    if(req.url.match(/\.jade$/) || req.url.match(/\.less$/) != null){
      res.statusCode = 404;
      res.end('Cannot GET ' + req.url)
    }else{
      next()
    }
  }
}
