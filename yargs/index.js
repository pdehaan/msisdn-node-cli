#!/usr/bin/env node

'use strict'

var pkg = require('./package.json')

var argv = require('yargs')
  .usage('$0 [options]')
  .version(pkg.version)

  // host
  .describe('host', 'The MobileID host')
  .default('host', 'https://msisdn.stage.mozaws.net/')
  .alias('H', 'host')

  // mcc
  .describe('mcc', 'Mobile Country Code (3 digits')
  .alias('c', 'mcc')

  // mnc
  .describe('mnc', 'Mobile Network Code (2 or 3 digits), ie: 07')

  // msisdn
  .describe('msisdn', 'The MSISDN number you want to validate')
  .alias('n', 'msisdn')

  // verbose
  .describe('verbose', 'Display the assertion')
  .alias('v', 'verbose')

  // insecure
  .describe('insecure', 'Allow wrong SSL configuration')
  .alias('k', 'insecure')

  .demand(['host', 'mcc'])
  .epilogue('for more information, go to ' + pkg.homepage)
  .argv

console.log('%s', JSON.stringify(argv, null, 2))
