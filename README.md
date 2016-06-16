# get-tz-ids

[![NPM version](https://img.shields.io/npm/v/get-tz-ids.svg)](https://www.npmjs.com/package/get-tz-ids)
[![Build Status](https://travis-ci.org/shinnn/get-tz-ids.svg?branch=master)](https://travis-ci.org/shinnn/get-tz-ids)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/get-tz-ids.svg)](https://coveralls.io/github/shinnn/is-gist-starred?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/get-tz-ids.svg)](https://david-dm.org/shinnn/get-tz-ids)
[![devDependency Status](https://david-dm.org/shinnn/get-tz-ids/dev-status.svg)](https://david-dm.org/shinnn/get-tz-ids#info=devDependencies)

A [Node](https://nodejs.org/) module to get an array of time zone IDs form [IANA Time Zone Database](https://www.iana.org/time-zones)

```javascript
const getTzIds = require('get-tz-ids');

getTzIds().then(ids => {
  ids; //=> ['Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', ...]
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install get-tz-ids
```

## API

```javascript
const getTzIds = require('get-tz-ids');
```

### getTzIds([*options*])

*options*: `Object` (directly passed to [`Request`](https://github.com/request/request#requestoptions-callback))  
Return: [`Promise`](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor)

It fetches and parses the latest [`zone.tab`](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) file form <https://www.iana.org/time-zones> and returns a promise for an array of alphabetically sorted time zone IDs.

## Related project

* [get-tz](https://github.com/shinnn/get-tz) - Get all time zone info instead of IDs only

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
