/*!
 * get-tz-ids | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-tz-ids
*/
'use strict';

const alphaSort = require('alpha-sort');
const getTz = require('get-tz');

function extractId(row) {
  return row.id;
}

function extractIds(rows) {
  return rows.map(extractId).sort(alphaSort.asc);
}

module.exports = function getTzIds(options) {
  return getTz(options).then(extractIds);
};
