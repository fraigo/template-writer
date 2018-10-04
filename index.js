/**
 * template-writer module
 * 
 * Create files based on templates and completed with variable values
 * Variable values uses format ${variableName}
 */


const path = require('path');
const fs = require('fs');


module.exports=function(options,config){
  if(!options){
    console.error("No options specified")
    return;
  }
  if (!config){
    config = {};
  }
  if (!config.templateDir){
    config.templateDir = 'templates';
  }
  if (!config.targetDir){
    config.targetDir = '.';
  }
  if (!config.baseDir){
    config.baseDir = __dirname;
  }
  
  fs.readFile(path.resolve(config.baseDir, config.templateDir+'/'+options.name), function(err, buf) {
    if (err){
      console.log(err);
      return;
    }
    var content=buf.toString();
    for(var key in options.vars){
      content = content.replace(new RegExp("\\$\\{"+key+"\\}", 'g'), options.vars[key]);
    }
    if (options.replacements){
      for(var key in options.replacements){
        var rep=options.replacements[key];
        content = content.replace(new RegExp(""+rep[0]+"", 'g'), rep[1]);
      }
    }
    
    var target = options.target?options.target:options.name;
    fs.writeFile(path.resolve(config.baseDir, config.targetDir+'/'+target), content, function(err, data){
      if (err){
        console.log(err);
        return;
      }
      console.log("Successfully Written "+config.targetDir+'/'+target);
    });

  });
}

