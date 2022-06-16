/* Link to problem: https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript

   Problem:     sPoNgEbOb MeMe

   Description: Remember the spongebob meme that is meant to make fun of people by repeating 
   what they say in a mocking way?
   You need to create a function that converts the input into this format, 
   with the output being the same string expect there is a pattern of uppercase and lowercase letters.

   Input -> Output Examples: 
    "stop Making spongebob Memes!" -> "StOp mAkInG SpOnGeBoB MeMeS!"
*/


// Solution
function spongeMeme(sentence) {
    let lowercaseSentence = sentence.toLowerCase()
    const letters = lowercaseSentence.split('')
    
    const spongeBobbed = letters.map((each, index) => {
      if(index % 2 === 0){
        return each.toUpperCase()
      }
      return each
    })
    
    return spongeBobbed.join('')
}