'use strong';

const alphaSort = require('alpha-sort');
const arrayDuplicated = require('array-duplicated');
const getTzIds = require('.');
const test = require('tape');

test('getTzIds()', t => {
  t.plan(6);

  t.strictEqual(getTzIds.name, 'getTzIds', 'should have a function name.');

  getTzIds().then(rows => {
    t.deepEqual(
      rows.every(id => typeof id === 'string'),
      true,
      'should be fulfilled with an array of strings.'
    );

    t.deepEqual(
      rows,
      rows.sort(alphaSort.asc),
      'should be fulfilled with an alphabetically sorted array.'
    );

    t.strictEqual(
      rows.length,
      421,
      'should be fulfilled with 421 IDs.'
    );

    t.deepEqual(
      arrayDuplicated(rows),
      [],
      'should be fulfilled with an array with no duplicates.'
    );
  }).catch(t.fail);

  getTzIds({baseUrl: 'https://example.org'}).then(t.fail, err => {
    t.strictEqual(
      err.message,
      '404 Not Found',
      'should fail when it cannot get zone.tab file.'
    );
  }).catch(t.fail);
});
