/* Link to problem: https://www.codewars.com/kata/5831200eb812b8016d000094/train/javascript

   Problem:     Smart Sum

   Description: Your task is to write a function, smartSum, 
   that returns the sum of an arbitrary number of arguments. 
   But be careful, some of your arguments can be arrays of numbers or nested arrays.


   Input -> Output Examples: 
    smartSum(1,2,3,[4,5],6); // returns 21
    smartSum(1,2,[[3,4],5],6); // returns 21

*/

// Solution:
function smartSum(){
    function sumArrays(nums){
      let result = 0
      for(let i = 0; i < nums.length; i++){
        if(typeof(nums[i]) === 'object'){
          result += sumArrays(nums[i])
        }
        else{
          result += nums[i]
        }
      }
      return result
    }
    
    let sum = 0
    
    for(let i = 0; i < arguments.length; i++){
      if(typeof(arguments[i]) === 'object'){
        sum += sumArrays(arguments[i])
      }
      else{
        sum += arguments[i]
      }
    }
    
    return sum
}