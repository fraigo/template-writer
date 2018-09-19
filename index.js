/**
 * template-writer module
 * 
 * Create files based on templates and completed with variable values
 * Variable values uses format ${variableName}
 */


const path = require('path');
const fs = require('fs');

module.exports=function(name,vars,config){
  if (!config){
    config = {};
  }
  if (!config.templateDir){
    config.templateDir='templates';
  }
  if (!config.targetDir){
    config.targetDir='.';
  }
  
  fs.readFile(path.resolve(__dirname, config.templateDir+'/'+name), function(err, buf) {
    if (err){
      console.log(err);
      return;
    }
    var content=buf.toString();
    for(var key in vars){
      content = content.replace(new RegExp("\\$\\{"+key+"\\}", 'g'), vars[key]);
    }

    fs.writeFile(path.resolve(__dirname, config.targetDir+'/'+name), content, function(err, data){
      if (err){
        console.log(err);
        return;
      }
      console.log("Successfully Written "+config.targetDir+'/'+name);
    });

  });
}

