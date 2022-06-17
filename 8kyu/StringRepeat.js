/* Link to problem: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

   Problem:     String Repeat

   Description: Write a function that accepts an integer n and a string s as parameters, 
   and returns a string of s repeated exactly n times.


   Input -> Output Examples: 
    6, "I"     -> "IIIIII"
    5, "Hello" -> "HelloHelloHelloHelloHello"
*/


// Solution
function repeatStr (n, s) {
    let result = ''
    for(let i = 0; i < n; i++){
      result += s
    }
    return result;
}