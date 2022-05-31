/* Link to problem: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

   Problem:     Convert number to reversed array of digits

   Description: Given a random non-negative number, 
   you have to return the digits of this number within an array in reverse order.

   Input -> Output Examples: 
    348597 => [7,9,5,8,4,3]
    0 => [0]
*/


//  Solution: 
function digitize(n) {
    return n.toString().split('').reverse().map(Number)
}