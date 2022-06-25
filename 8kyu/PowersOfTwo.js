/* Link to problem: https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

   Problem:     Powers of 2

   Description: Complete the function that takes a non-negative integer n as input, 
   and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

   Input -> Output Examples: 
    n = 0  ==> [1]        # [2^0]
    n = 1  ==> [1, 2]     # [2^0, 2^1]
    n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/


//  Solution: 
function powersOfTwo(n){
    const powers = []
    for(let i = 0; i <= n; i++){
      powers.push(2 ** i)
    }
    return powers
}