const _ = require('lodash');

const unify = (result) => {
  const parts = [
    _.kebabCase(result.browser.name),
    result.browser.major,
    _.kebabCase(result.os.name),
  ];

  return parts.join('@');
};

module.exports = {
  unify,
};
