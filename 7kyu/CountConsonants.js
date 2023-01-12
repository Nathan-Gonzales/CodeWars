/* Link to problem: https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

   Problem:     Count Consonants

   Description: Complete the function that takes a string of English-language 
   text and returns the number of consonants in the string.
   Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


   Input -> Output Examples: 
   "aaaaa" -> 0
   "XaeiouX" -> 2
   "Bbbbb" -> 5
*/


// Solution
function consonantCount(str) {
    if(str.length === 0){
      return 0
    }
    str = str.toLowerCase()
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    const chars = str.split("")
    let count = 0
    
    chars.forEach((character) => {if(consonants.includes(character)){
      count += 1
    }})
    
    return count
    
}