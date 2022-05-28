/* Link to problem: https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript

   Problem:     Narcissistic Numbers

   Description: A Narcissistic Number is a number of length l 
   in which the sum of its digits to the power of l is equal to the original number. 
   If this seems confusing, refer to the example below.
   Write a function that, given n, returns whether or not n is a Narcissistic Number.


   Input -> Output Examples: 
    Ex: 153, where l = 3 ( the number of digits in 153 )
    1^3 + 5^3 + 3^3 = 153  
*/


// Solution
function isNarcissistic(n) {
    let num = n.toString();
    let digits = num.split('');
    let len = digits.length;
    let sum = 0;
    
    function powers(d){
      sum += d ** len;
    }
    
    digits.forEach(powers);
    
    if(sum === n){return true;}
    return false;
}