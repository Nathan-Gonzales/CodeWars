/* Link to problem: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

   Problem:     Unique In Order

   Description: Implement the function unique_in_order which takes as argument a sequence 
   and returns a list of items without any elements with the same value next to each other and 
   preserving the original order of elements.


   Input -> Output Examples: 
    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// Solution: 
var uniqueInOrder=function(iterable){
    let chars = []
    
    if(iterable.length === 0){
      return chars
    }
    if(typeof(iterable) === "object"){
      chars = iterable.slice()
    }
    if(typeof(iterable) === "string"){
      chars = iterable.split('')
    }
    
    const result = []
    
    result[0] = chars[0]
    for(let i = 1; i < chars.length; i++){
      if(chars[i-1] !== chars[i]){
        result.push(chars[i])
      }
    }
    return result
}