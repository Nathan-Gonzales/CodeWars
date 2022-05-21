/* Link to problem: https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

   Problem:     Remove String Spaces

   Description: Simple, remove the spaces from the string, then return the resultant string.

   Input -> Output Examples: 
    (' H  ell     o Wo   rl d  ') -> return 'HelloWorld'
*/


//  Solution: 
function noSpace(x){
    return x.replace(/ /g, "");
}