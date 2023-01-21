/* Link to problem: https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

   Problem:     Lottery Ticket

   Description: Time to win the lottery!
   Given a lottery ticket (ticket), represented by an array of 2-value arrays, 
   you must find out if you've won the jackpot.
   To do this, you must first count the 'mini-wins' on your ticket. 
   Each subarray has both a string and a number within it. If the character code of any of the 
   characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
   Once you have counted all of your mini wins, compare that number to the other input provided (win). 
   If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
   All inputs will be in the correct format. Strings on tickets are not always the same length.


   Input -> Output Examples: 
    bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)    ->    'Loser!'
    bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)    ->    'Winner!'
    bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)  ->    'Loser!'
*/

// Solution: 
function bingo(ticket, win){
    let miniWins = 0
    let miniWinCounter = 0
    let miniWin = false
    
    
    for(let i = 0; i < ticket.length; i++){
      let subArraySplit = ticket[i][0].split('')
      subArraySplit.forEach((char) => {
          if(char.charCodeAt(0) === ticket[i][1]){
              miniWin = true
          }
      })
      if(miniWin === true){
        miniWinCounter++
      }
      miniWin = false
    }
    
    if(miniWinCounter >= win){
      return 'Winner!'
    }
    return 'Loser!'
    
}