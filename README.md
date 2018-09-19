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

## Default config

By default, the component reads from a `'templates'` folder and writes to the current directory (`'.'`)
```
{
  templateDir:'templates',
  targetDir:'.'
}
```

