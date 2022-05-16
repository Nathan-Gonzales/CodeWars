/* Link to problem: https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript

   Problem:     Define a card suit

   Description: You get any card as an argument. Your task is to return the suit of this card (in lowercase).

   Input -> Output Examples: 
    ('3♣') -> return 'clubs'
    ('3♦') -> return 'diamonds'
    ('3♥') -> return 'hearts'
    ('3♠') -> return 'spades'
*/


//  Solution: 
function defineSuit(card) {
    if(card.includes('♣')) return 'clubs';
    if(card.includes('♦')) return 'diamonds';
    if(card.includes('♥')) return 'hearts';
    if(card.includes('♠')) return 'spades';
  }