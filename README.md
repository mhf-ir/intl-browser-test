# Int cross browser interface checker

## Problem

Each browser act like IE on standards.

## Desire

Same API for Int based on correct ICU. Seems be as Firefox implementation is much better for `fa-IR` as expected.

But how can we standard interface with all major browsers?

## Found problems:

Test date is:
```js
var test_date = new Date(Date.UTC(2018, 1, 1, 0, 0, 0, 0));
```

Open [diff.md](./diff.md) to see result.

## Todo

* Run test unit based on all any devices.
* Refactor for major browser test
* test another i18n features like number and etc..
