/* Link to problem: https://www.codewars.com/kata/585c50e75d0930e6a7000336/train/javascript

   Problem:     Coprime Validator

   Description: Write a program to determine if the two given numbers are coprime. 
   A pair of numbers are coprime if their greatest shared factor is 1.

   The inputs will always be two positive integers between 2 and 99.


   Input -> Output Examples: 

    20 and 27:

    Factors of 20: 1, 2, 4, 5, 10, 20
    Factors of 27: 1, 3, 9, 27
    Greatest shared factor: 1
    Result: 20 and 27 are coprime

    isCoprime(20, 27) -> true

    12 and 39:

    Factors of 12: 1, 2, 3, 4, 6, 12
    Factors of 39: 1, 3, 13, 39
    Greatest shared factor: 3
    Result: 12 and 39 are not coprimes
    
    isCoprime(12, 39) -> false
*/


// Solution
function isCoprime(x, y) {
    const xFactors = [];
    const yFactors = [];
    
    // Find factors of x
    for(let i = 1; i <= x; i++){
      if(x % i === 0){
        xFactors.push(i);
      }
    }
    
    // Find factors of y
    for(let j = 1; j <= y; j++){
      if(y % j === 0){
        yFactors.push(j);
      }
    }
    
    let currentHighest = 1;
    
    // Find highest shared factor
    for(let i = 0; i < xFactors.length; i++){
      for(let j = 0; j < yFactors.length; j++){
        if(xFactors[i] === yFactors[j]){
          currentHighest = xFactors[i];
          break;
        }
      }
    }
    
    if(currentHighest === 1){
      return true;
    }
    return false;
    
}