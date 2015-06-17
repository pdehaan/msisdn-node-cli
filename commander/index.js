#!/usr/bin/env node

'use strict'

// var program = require('commander')
var program = require('commodore')

var pkg = require('./package.json')

// msisdn-cli -H https://msisdn.services.mozilla.com -c 310 -n +1xxxxxxxxxxx

//   -H --host=<host>       The MobileID host
//   -c --mcc=<mcc>         Mobile Country Code (3 digits) ie: 214
//   --mnc=<mnc>            Mobile Network Code (2 or 3 digits) ie: 07
//   -n --msisdn=<msisdn>   The MSISDN number you want to validate.
//   -v, --verbose          Display the assertion
//   -k, --insecure         Allow wrong SSL configuration

program
  .version(pkg.version)

  // Define our CLI program's options.
  .option('-H --host <host>', 'The MobileID host')
  .option('-c, --mcc <mcc>', 'Mobile Country Code (3 digits)')
  .option('--mnc <mnc>', 'Mobile Network Code (2 or 3 digits) ie: 07')
  .option('-n, --msisdn <msisdn>', 'The MSISDN number you want to validate')
  .option('-v, --verbose', 'Display the assertion')
  .option('-k, --insecure', 'Allow wrong SSL configuration')

  // `commodore` specific.
  .demand('host')
  .demand('mcc')
  .oneof('mcc', [
    '204', // Netherlands
    '208', // France
    '214', // Spain
    '235', // United Kingdom
    '250', // Russia
    '262', // Germany
    '302', // Canada
    '310', // USA
    '311', // USA
    '312', // USA
    '313', // USA
    '314', // USA
    '315', // USA
    '316', // USA
    '454', // China
    '505' //  Australia
  ])

  // Parse the command line arguments.
  .parse(process.argv)

console.log('host: %s', program.host)
console.log('mcc: %s', program.mcc)
console.log('mnc: %s', program.mnc)
console.log('msisdn: %s', program.msisdn)
console.log('verbose: %s', program.verbose)
console.log('insecure: %s', program.insecure)

if (program.verbose) {
  console.log(JSON.stringify(program, null, 2))
}
