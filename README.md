# template-writer
Lightweight template writer. 
Uses a template file to generate a file and parse embedded values from data. 

## Usage

Specify a filename in the `templateDir` folder, a set of variables to embed in your templates and an optional configuration if you need to overwrite any defaults.

```javascript
var writer = require('template-writer');
// writer(filename, vars [, config])
writer(
  'index.html',
  {title:'Page title'},
  {templateDir:'templates',targetDir:'dist'}
);
```

In this example, it will take a template file located in `templates/index.html`, replace variables in the file (with format `${variableName}`) with values specified in the `vars` parameter (in this case, `title`). The resulting file will be written to ./index.html.


## Default config

By default, the component reads from a `'templates'` folder and writes to the current directory (`'.'`)
```
{
  templateDir:'templates',
  targetDir:'.'
}
```



