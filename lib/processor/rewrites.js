module.exports = function(){
  return function(req, res, next){
    if(req.url.slice(-1) === '/'){
      req.url = req.url+'index.html'
    }
    next()
  }
}
