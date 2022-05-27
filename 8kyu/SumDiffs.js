/* Link to problem: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

   Problem:     Sum of differences in array

   Description: Your task is to sum the differences between consecutive pairs in the array in descending order.
   If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

   Input -> Output Examples: 

   [2, 1, 10]  -->  9

   In descending order: [10, 2, 1]

   Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
*/


// Solution
function sumOfDifferences(arr) {
  
    // Return if 0 or 1 element in array
    if(arr.length < 2){return 0;}
    
    // Sort in descending order
    arr.sort(function(a, b){return b - a});
    
    // Find differences
    let diffs = [];
    for(let i = 0; i < arr.length - 1; i++){
      diffs.push(arr[i] - arr[i+1]);
    }
    
    // Sum differences
    function myFunc(total, num) {
      return total + num;
    }
    
    // Return sum
    return diffs.reduce(myFunc);
}