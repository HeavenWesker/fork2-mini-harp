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
                                        res.write(jade.compile(data)());
                                        res.end();
                                      }else{
                                        res.write(err);
                                        res.end()
                                      }
                                    })
      }else{
        next();
      }
    }
}
