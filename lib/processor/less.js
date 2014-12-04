module.exports = makeLess;
function makeLess(root){
  var less = require('less')
  var fs = require('fs')
  var path = require('path')
  return function(req, res, next){
    var lessFile  = root
                  + path.dirname(req.url) + '/'
                  + path.basename(req.url, '.css')
                  + '.less';
    if(path.extname(req.url) == '.css'
      && fs.existsSync(lessFile)){
        fs.readFile(lessFile, {encoding: "utf8"}, function(err, data){
          if(!err){
            less.render(data, function(err, data){
              if(!err){
                res.setHeader("Content-Length", data.length)
                res.setHeader("Content-Type", "text/css; charset=UTF-8")
                res.write(data)
                res.end()
              }else{
                console.log('less error')
                next()
              }
            })
          }else{
            console.log('fs.error')
            next()
          }
        })
      }else{
        next()
      }
  }
}
