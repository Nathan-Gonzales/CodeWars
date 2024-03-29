/* Link to problem: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

   Problem:     Find the Unique Number

   Description: There is an array with some numbers. All numbers are equal except for one. Try to find it!
   It’s guaranteed that array contains at least 3 numbers.
   The tests contain some very huge arrays, so think about performance.


   Input -> Output Examples: 
    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

*/

// Solution: 
function findUniq(arr) {
  
    const result = arr.filter(num => num !== arr[0])
    
    if(result.length > 1){
        return arr[0]
    }
    else{
        return result[0]
    }
    
}  