const _ = require('lodash');

module.exports = (nunjucks, locales) => {
  const result = [];
  locales.forEach((locale) => {
    result.push(nunjucks.render('datetime.jinja', {
      locale,
    }));
  });
  return result.join('\n');
};
