/* Link to problem: https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

   Problem:     Sort by Last Char

   Description: Given a string of words (x), you need to return an array of the words, 
   sorted alphabetically by the final character in each.
   If two words have the same last letter, 
   they returned array should show them in the order they appeared in the given string.
   All inputs will be valid.


   Input -> Output Examples: 
    last('man i need a taxi up to ubud') -> ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
*/


// Solution
function last(x){
    const words = x.split(' ')
    
    function getLastLetter(wrd){
      return wrd.substring(wrd.length - 1)
    }
    
    const lastLetters = words.map(word => getLastLetter(word))
    let uniqueChars = [...new Set(lastLetters)]
    uniqueChars.sort()
    
    const sortedWords = []
    
    uniqueChars.forEach(char => {
      words.forEach(word => {
        if(char === word.substring(word.length - 1)){
          sortedWords.push(word)
        }
      })
    })
    
    return sortedWords;
}
  