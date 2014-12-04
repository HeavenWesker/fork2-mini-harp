module.exports = makeJade;
  function makeJade(root) {
    var jade = require('jade')
    var fn = jade.compile(root);
    var html = fn();
    var path = require('path')
    var fs = require('fs')
    return function(req, res, next){
      var jadeFile  = root 
                    + path.dirname(req.url) + '/'
                    + path.basename(req.url, '.html') 
                    + '.jade'
      if(path.extname(req.url) == '.html' 
         && fs.existsSync(jadeFile)){
           fs.readFile(jadeFile, {encoding: "utf8"}, function(err, data){
            if(!err){
              var html = jade.compile(data)()
              res.setHeader("Content-Length", html.length);
              res.setHeader("Content-Type", "text/html; charset=UTF-8")
              res.write(html);
              res.end();
            }else{
              console.log('ffff')
              next();
            }
          })
      }else{
        next();
      }
    }
}
