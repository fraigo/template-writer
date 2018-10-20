# template-writer
Lightweight template writer. 
Generate static files from template files and parsing/embeddeing values from data. 

## Usage

### Create a directory structure for templats

```
./index.js
./templates/
    index.html
```

### Create a template

You can see an example in the file ![templates/index.html](templates/index.html)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
  <script src="main.js"></script>
</head>
<body>
  ${content}
</body>
</html>
```

### Create a templateWriter configuration

* Use `baseDir` to set the working directory, an absolute path or `__dirname` is the common value.
* Use `templateDir` to set the relative folder (from `baseDir`) where the templates are stored
* Use `targetDir` to set the relative folder (from `baseDir`) to write the generated static files.

```javascript
var templateOptions = {
    templateDir:'./templates',
    targetDir:'./',
    baseDir:__dirname
}
```

### Create a set of variables to fill the template:

In the `vars` section, every variable defined will be embedded in the template where `${varname}` exists. 
In the `replacements`, you can specify a list of expressions (regular expressions) to replace with content.

```javascript
var values = {
  vars: {
    title: 'My Page',
    content: fs.readFileSync('./templates/content.html', 'utf8');
  },
  replacements:{

  }
}
```

### Generate the static file

Call the `write` method of `template-writer` library:

```javascript
writer( config, templateOptions );
```

Create the `config` using the following parameters:
* `name`: Name of the template (relative to `templateDir`)
* `target`: Optional, is the final name of the file when it's generated. If no target is specified. The target will be the same as `name`
* vars

```javascript
var config = {
    name: 'index.html',
    target:'index.html',
    vars: values
  }

var writer = require('template-writer');
writer(
  config,
  templateOptions
);
```

In this example, will be writing  `./index.html` from `./templates/index.html` using the variables in `config.vars`.


## Default config

By default, the component reads from a `'templates'` folder and writes to the current directory (`'.'`)
```
{
  templateDir: 'templates',
  targetDir: '.' //path of module 
  baseDir:'.' //path of node module (./node_modules/template-writer/)
}
```


## Test npm package

Use RunKit to test this package:

https://runkit.com/embed/8j94b33o226c

