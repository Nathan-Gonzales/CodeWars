/* Link to problem: https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript

   Problem:     Count Odd Numbers below n

   Description: Given a number n, return the number of positive odd numbers below n, EASY!

   Input -> Output Examples: 
    7  -> 3 (because odd numbers below 7 are [1, 3, 5])
    15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
*/


// Solution
function oddCount(n){
    return Math.floor(n/2)
}