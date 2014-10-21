var gonzales = require('gonzales-pe'),
    fs = require('fs');

var source = fs.readFileSync('_styleguide_variables.scss', 'utf-8');

console.log(gonzales.srcToAST({
  src: source,
  syntax: 'sass'
}));
