const express = require('express');
const bodyParser = require('body-parser');
const UAParser = require('ua-parser-js');

// TEST ALL LOCALES: LONG TIME :(
// const locales = require('cldr-core/availableLocales');
// const localesDefaults = require('cldr-core/defaultContent');
// const locales = _.union(locales.availableLocales.modern, localesDefaults.defaultContent);
// const calendars = [
//   'buddhist',
//   'chinese',
//   'coptic',
//   'ethioaa',
//   'ethiopic',
//   'gregory',
//   'hebrew',
//   'indian',
//   'islamic',
//   'islamicc',
//   'iso8601',
//   'japanese',
//   'persian',
//   'roc',
// ];

// sample i need to be checked
const locales = ['fa', 'en', 'ar'];
const calendars = ['gregory', 'islamic', 'persian'];

const { Result, sequelize} = require('./lib/db');
const nunjucks = require('./lib/nunjucks');
const datetimeTest = require('./lib/tests/datetime');
const datetimeFormats = require('./lib/tests/datetime_formats');
const datetimeFormatsCalendars = require('./lib/tests/datetime_formats_calendars');

const { unify } = require('./lib/unify');

const app = express();
app.locals.pretty = true;
const port = 9080;

app.use(bodyParser.json());
app.set('view engine', 'pug');

const { log } = console;

app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

app.get('/', (req, res) => {
  const parser = new UAParser(req.get('user-agent'));
  res.render('index', {
    userAgentData: JSON.stringify(parser.getResult()),
  });
});

app.get('/diff', (req, res) => {
  // @TODO: need to be refactor for multiple browser
  const tbl = {};
  sequelize.query('select *, count(*) as cnt from results group by test_id, test_result order by test_id').spread((results, metadata) => {
    results.forEach((r) => {
      if (r.cnt !== 2) {
        const parser = new UAParser(r.browser_string);
        if (!tbl[r.code]) {
          tbl[r.code] = [];
        }
        tbl[r.code].push({
          browser: `${parser.getBrowser().name} ${parser.getBrowser().major} ${parser.getOS().name}`,
          result: r.test_result,
        });
      }
    });
    res.render('result', {
      tbl,
    });
  });
});

app.get('/tests.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.send([
    datetimeTest(nunjucks, locales),
    datetimeFormats(nunjucks, locales),
    datetimeFormatsCalendars(nunjucks, locales, calendars),
  ].join('\n'));
});

app.post('/', (req, res) => {
  const parser = new UAParser(req.get('user-agent'));
  Result.create({
    browser_string: req.get('user-agent'),
    browser_uid: unify(parser.getResult()),
    test_id: req.body.id,
    test_result: req.body.result,
    locale: req.body.locale,
    code: req.body.code,
  }).then(() => {
    res.json(true);
  }).catch(() => {
    res.json(true);
  });
});

app.listen(port, () => {
  log(`Example app listening on port ${port}!`);
});
