//problem config
const JS_FILE_PATH = 'problemE/js/index.js';

//dependencies
const fs = require('fs');
const path = require('path');
const util = require('util');

//my custom matchers
const styleMatchers = require('../lib/style-matchers.js');
expect.extend(styleMatchers);

//console spy!
const LOG = []; //global to store the logged output
let storeLogFunction = (...inputs) => {
  LOG.push(inputs.reduce((out, arg) => {
    return out+' '+(typeof arg === 'string' ? arg : JSON.stringify(arg));
  },'').trim()); //add it to the log
}
console['log'] = jest.fn(storeLogFunction) //store results of console.log

/** Begin tests **/

describe('Source code is valid', () => {
  test('JavaScript lints without errors', async () => {
    expect([JS_FILE_PATH]).toHaveNoEsLintErrors();
  })
});

//load the JavaScript file!
const solution = require('../'+JS_FILE_PATH);

describe('Manipulates song lyrics', () => {
  test('Creates and logs the array of words', () => {
    const val = ['everything','is','awesome','everything','is','cool','when',
    'you','are','part','of','a','TEEEEAM' ]
    expect(LOG).toContain(JSON.stringify(val));
  });
  test('Maps and logs the word initials', () => {
    const val = ['E.','I.','A.','E.','I.','C.','W.','Y.','A.','P.','O.','A.','T.' ]
    expect(LOG).toContain(JSON.stringify(val));    
  })
  test('Filters and logs the long words', () => {
    const val = [ 'everything','awesome','everything','cool','when','part','TEEEEAM' ]
    expect(LOG).toContain(JSON.stringify(val));
  })
  test('Map+filters and logs the long word initials', () => {
    const val = [ 'E.', 'A.', 'E.', 'C.', 'W.', 'P.', 'T.' ]
    expect(LOG).toContain(JSON.stringify(val));
  })
  test('Reduces and logs the long word initialism', () => {
    expect(LOG).toContain('E.A.E.C.W.P.T.');
  })
  test('Reduces and logs the unique words', () => {
    const val = ['everything','is','awesome','cool','when',
    'you','are','part','of','a','TEEEEAM' ]
    expect(LOG).toContain(JSON.stringify(val));
  })
})
