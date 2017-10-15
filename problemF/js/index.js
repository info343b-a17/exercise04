'use strict';

/* Get a reference to the drawing context. Do not modify! */
const canvas = document.getElementById('canvas'); //reference the canvas element
const brush = canvas.getContext('2d'); //the drawing context

/* your code goes here! */

//JavaScript contains "types" of objects somewhat similarly to Java. For example,
//a `Date` object represents a specific moment in time.
//
//Create a variable `currentTime` that is assigned a `new` Date object (see
//https://www.w3schools.com/jsref/jsref_obj_date.asp; call the constructor with
//no arguments). Log out the current time.



//Define a function `printCurrentTime()` that logs out the current time formatted 
//like a digital clock, including seconds. For example, 3:43pm and 20 seconds 
//should print as:
//     3:43:20
// - See https://www.w3schools.com/jsref/jsref_obj_date.asp for Date methods.
// - You can convert from military hours (e.g., 15:00 to 3pm) using mod %
// - Your method should get the current time whenever it is called!
//Call your function to print the current time.



//The `window.setTimeout()` (https://www.w3schools.com/jsref/met_win_settimeout.asp)
//method allows you to specify a callback function that will be executed after a delay.
//Call this function in order to print the current time *after* 1 second has passed.



//Call the `setTimeout()` again to print the current time after 2 seconds as well!



//The `window.setInterval()` (https://www.w3schools.com/jsref/met_win_setinterval.asp)
//method allows you to specify a callback function that will _repeatedly_ executed
//at specified intervals (e.g., every 3 seconds).
//The `setInterval()` function will *return* an id number which can be used to
//stop the repetition by passing it to the `window.clearInterval()` method.
//
//Use the `window.setInterval()` function to call your `printCurrentTime()`
//function once every second for 10 seconds.
// - Create a separate variable _outside the function_ that keeps track of 
//   how many times the repeater has executed. Pass `setInterval()` an 
//   _anonymous callback function_ that checks the number of iterations and
//   either prints the current time or stops the repeater.
//   This is an example of having a callback function rely on _external state_
// - You can comment the `setTimeout()` calls above for testing.



//Define a function `drawClock()` that takes in a Date object as an argument
//and draws (on the canvas) an analog clock showing the given time.
//This function should perform a few steps:
//  1. Draw the clock face: a large circle centered at (250,250). A radius of 200
//     worked well for me
//  2. Draw at least 4 numbers on the clock (e.g., 12, 3, 6, 9). Use the 
//     `fillText()` method to do this; you may need to experiment with positioning,
//     and can assign a value to the `brush.font` property to change the font size.
//  3. Draw 3 hands: a short thick hour hand, a longer thinner minute hand, and a
//     longest thinnest second hand.
//     To help you out, I have provided a function `strokeLineAtMinutes()` that
//     does the math for drawing a line from the center of the clock to a given
//     clock "minute" mark. Specify the brush's `lineWidth` before calling that 
//     function to draw the different hands.
//     - You will need to convert "hours" into an appropriate "minutes".
//     - You should also add the milliseconds (in thousandths) to the number of
//       elapsed seconds. You can also add the seconds to the number of elapsed
//       minutes, and so on.



//draws a line at the given "minutes" angle
function strokeLineAtMinutes(minutes, startX, startY, length){
  console.info("called");
  let angle = (6*minutes - 90) * Math.PI/180;
  brush.beginPath();
  brush.moveTo(startX,startY);
  brush.lineTo(startX + length*Math.cos(angle), startY + length*Math.sin(angle));
  brush.stroke();
}

//Use the `window.setInterval()` function so that it draws the clock for the 
//current time every 1 seconds (tick tock!). You should use an anonymous callback
//function which can access and pass in the current time to the `drawClock()` call.
//Your anonymous function can also `clearRect()` the canvas of the last drawing.
//You do not need to stop the clock ticking.



//Modify the above interval so that it redraws the clock every 16 milliseconds
//(or about 60 times per second). The second-hand should seem to animate smoothly!


//*This step is optional*
//For even smoother animation, you can use the `window.requestAnimationFrame()`
//function (https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
//This function runs on a _variable interval_, optimized and adjusted by the 
//browser to achieve 60 redraws (frames) per second.
// - Note that the callback function needs to itself also call the 
//   `requestAnimationFrame()`, similar to a recursive method
// - This function is unavailable on IE 9 or earlier, but there is a polyfill at
//   https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/




//Make canvas and functions available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  module.exports.canvas = canvas;  
  if(typeof printCurrentTime !== 'undefined') 
    module.exports.printCurrentTime = printCurrentTime;
  if(typeof drawClock !== 'undefined') 
    module.exports.drawClock = drawClock;
}