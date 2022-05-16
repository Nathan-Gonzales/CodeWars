/* Link to problem: https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

   Problem:     Convert a String to a Number!

   Description: We need a function that can transform a string into a number. 
   What ways of achieving this do you know?

   Note: Don't worry, all inputs will be strings, and every string is a perfectly valid 
   representation of an integral number.


   Input -> Output Examples: 
    "1234" --> 1234
    "605"  --> 605
    "1405" --> 1405
    "-7" --> -7 
*/


//  Solution: 
const stringToNumber = function(str){
    return Number(str);
  }