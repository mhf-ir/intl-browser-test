const formats = {
  weekday: ['narrow', 'short', 'long'],
  era: ['narrow', 'short', 'long'],
  year: ['numeric', '2-digit'],
  month: ['numeric', '2-digit', 'narrow', 'short', 'long'],
  day: ['numeric', '2-digit'],
  hour: ['numeric', '2-digit'],
  minute: ['numeric', '2-digit'],
  second: ['numeric', '2-digit'],
  timeZoneName: ['short', 'long'],
};

module.exports = (nunjucks, locales) => {
  const result = [];
  locales.forEach((locale) => {
    Object.keys(formats).forEach((type) => {
      formats[type].forEach((frm) => {
        result.push(nunjucks.render('datetime_formats.jinja', {
          locale,
          type,
          frm,
        }));
      });
    });
  });
  return result.join('\n');
};
