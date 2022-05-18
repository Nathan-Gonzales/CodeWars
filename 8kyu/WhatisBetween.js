/* Link to problem: https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

   Problem:     What is Between?

   Description: Complete the function that takes two integers (a, b, where a < b) and 
   return an array of all integers between the input parameters, including them.

    a = 1
    b = 4
    --> [1, 2, 3, 4]

   Input -> Output Examples: 
    between(1, 4)   -> [1, 2, 3, 4]
    between(22, 28) -> [22, 23, 24, 25, 26, 27, 28]
*/


// Solution
function between(a, b) {
    const intArr = [];
    for(let i = a, j = 0; i <= b; i++, j++){
      intArr[j] = i;
    }
    return intArr;
  }