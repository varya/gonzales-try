var gonzales = require('gonzales-pe'),
    gonzo = require('gonzales-ast'),
    fs = require('fs');

var source = fs.readFileSync('_styleguide_variables.scss', 'utf-8');

var ast = gonzales.srcToAST({
  src: source,
  syntax: 'sass'
});


// Changing $color-michelangelo value into 'red'
var newast = gonzo.traverse(ast, [
    {
      test: function(name, nodes) {
        return name === 'declaration' && nodes[1][0] === 'variable' && nodes[1][1].indexOf('color-michelangelo') !== -1;
      },
      process: function(node) {
        node[4][1] = 'red';
        return node;
      }
    }
]);

var result = gonzales.astToSrc({
  ast: newast,
  syntax: 'sass'
});


fs.writeFileSync('_styleguide_variables.scss', result);
