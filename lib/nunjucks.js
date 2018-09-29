const path = require('path');
const nunjucks = require('nunjucks');

nunjucks.configure(path.resolve(__dirname, '../templates'), {
  autoescape: false,
  cache: false,
});

module.exports = nunjucks;
