const path = require('path');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  logging: false,
  operatorsAliases: false,
  storage: path.resolve(__dirname, '../data/db.sqlite'),
});

const Result = sequelize.define('results', {
  test_id: {
    type: Sequelize.STRING,
  },
  locale: {
    type: Sequelize.STRING,
  },
  browser_uid: {
    type: Sequelize.STRING,
  },
  browser_string: {
    type: Sequelize.STRING,
  },
  test_result: {
    type: Sequelize.TEXT,
  },
  code: {
    type: Sequelize.TEXT,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: [
        'test_id',
        'browser_uid',
      ],
    },
  ],
});

Result.sync();

module.exports = {
  sequelize,
  Result,
};
