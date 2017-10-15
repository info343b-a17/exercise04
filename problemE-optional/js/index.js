'use strict';

//Define a new array `words` that contains each of the words to the following 
//song lyric (don't include the musical notes):
//  ♫ everything is awesome everything is cool when you are part of a TEEEEAM ♫
//Hint: use the split() string method!
//Log out the array.



//Define a function `abbreviate()` that takes in a word as an argument and 
//returns the first letter of that string capitalized and followed by a period (.). 
//For example:
//    abbreviate("dog"); //returns "D."
//Hint: you can use bracket notation to access the first (0th) character of a string!



//Create a new array `initials` that is your array of words transformed into
//an array of abbreviations (technically an initialism). Do this by by calling 
//the `map()` function on the `words` array and with your `abbreviate()` function
//as a callback.
//Log out the new transformed array.



//Call the `filter()` method on your `words` array to remove each word from the 
//array that is 3 or fewer letters in length. You can define a named callback
//function, or use an anonymous callback function.
//_Watch out_: the filter callback should return whether to _keep_ an item!
//Log out the filtered array.



//Use both the `map()` and `filter()` functions to get an array of the initials 
//of the long words in the `words` array.
//Try to _chain_ the `map()` and `filter()` calls together!
//Log out the array of long word initials.



//Define a function `combine()` that takes TWO strings are arguments and returns
//a string that is the arguments concatenated (without a space between).
//  - Note: the existing `concat()` method only takes one argument!



//Use the `reduce()` method (with your `combine()` function as an aggregator) to
//combine the array of long word initials into a single string. You will need
//to specify the "starting value" (an empty string '') as a second argument.
//  - Note: normally you would do this work with the `join()` string method.
//Log out the string of initials.



//Use the `reduce()` method to get an array of *unique* words in the original 
//lyrics (not the initials).
// - In order to implement your aggregator callback, think about what to do with
//   each "new" array element to include it in the aggregate (you can use an `if`
//   statement to decide whether to include it or not).
//   For example, consider implementing an `addIfUnique()` aggregator function.
//   You can even use the `filter()` method to "search" an array!
// - You will need your `reduce()` method to start with an empty list `[]`.
// - Consider: why do this with `reduce()` instead of `filter()`?
//Log out the list of unique words.


