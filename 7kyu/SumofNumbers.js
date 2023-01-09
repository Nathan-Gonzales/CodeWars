/* Link to problem: https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

   Problem:     Sum of Numbers

   Description: Given two integers a and b, which can be positive or negative, 
   find the sum of all the integers between and including them and return it. 
   If the two numbers are equal return a or b.

   Note: a and b are not ordered!


   Input -> Output Examples: 
    (1, 0) --> 1 (1 + 0 = 1)
    (1, 2) --> 3 (1 + 2 = 3)
    (0, 1) --> 1 (0 + 1 = 1)
    (1, 1) --> 1 (1 since both are same)
    (-1, 0) --> -1 (-1 + 0 = -1)
    (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
    
*/


// Solution
function getSum( a,b ){
    if (a === b){
      return a
    }
    
    function lower(a,b){
      if(a < b){
        return a
      } 
      else{
        return b 
      }
  }
    
    let lowest = lower(a,b)
    let highest = a === lowest ? b : a
    let current = 0
    
    for(let i = lowest; i <= highest; i++){
      current += i
    }
    
    return current
    
  }
  
  