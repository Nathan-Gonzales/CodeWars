/* Link to problem: https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

   Problem:     Find the Vowels

   Description: We want to know the index of the vowels in a given word, for example, 
   there are two vowels in the word super (the second and fourth letters).
   So given a string "super", we should return a list of [2, 4].
   
   Vowels in this context refers to: a e i o u y (including upper case)
   This is indexed from [1..n] (not zero indexed!)


   Input -> Output Examples: 
    Mmmm  => []
    Super => [2,4]
    Apple => [1,5]
    YoMama -> [1,2,4,6]
*/


// Solution: 
function vowelIndices(word){
    const letters = word.split('')
    const vowelLocations = []
    
    letters.forEach((char, index) => {
      if(['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'].includes(char))
        vowelLocations.push(index + 1)
    })
    
    return vowelLocations
    
}