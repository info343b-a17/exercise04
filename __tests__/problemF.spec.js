//problem config
const JS_FILE_PATH = 'problemF/js/index.js';

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

const Canvas = require('canvas-prebuilt');
//mock the query method to access our canvas
document['getElementById'] = jest.fn(() => new Canvas(500,500));

//mock the timers
window['setTimeout'] = jest.fn();
window['setInterval'] = jest.fn();

/** Begin tests **/

describe('Source code is valid', () => {
  test('JavaScript lints without errors', async () => {
    expect([JS_FILE_PATH]).toHaveNoEsLintErrors();
  })
});

//load the JavaScript file!
const solution = require('../'+JS_FILE_PATH);

describe('Utilized Date objects', () => {
  test('to log the current time as a Date object', () => {
    expect(new Date(JSON.parse(LOG[0]))).toEqual(expect.any(Date));
  })

  test('to implement and call `printCurrentTime()', () => {
    expect(LOG[1]).toMatch(new RegExp('\\d{1,2}:\\d{1,2}:\\d{1,2}'));
  })
})

describe('Utilized window timer methods', () => {
  test('to print the current time with `setTimeout', () => {
    expect(window.setTimeout).toBeCalledWith(solution.printCurrentTime, expect.any(Number));
  })
  test('to use `setInterval` to repeat a callback', () => {
    expect(window.setInterval).toBeCalled();    
  })
})

describe('Created a ticking clock', () => {
  test('Implemented the drawClock() function', () => {
    expect(solution.drawClock).toBeDefined();
    let blankCanvasData = (new Canvas(500,500)).toDataURL();
    expect(solution.canvas.toDataURL()).not.toEqual(blankCanvasData); //checks not blank
  })
  test('Made the clock tick smoothly', () => {
    expect(window.setInterval).toBeCalledWith(expect.any(Function), 16);
  })
})
