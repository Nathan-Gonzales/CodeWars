/* Link to problem: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

   Problem:     Two fighters, one winner.

   Description: Create a function that returns the name of the winner in a fight between two fighters.
   Each fighter takes turns attacking the other and whoever kills the other first is victorious. 
   Death is defined as having health <= 0.
   Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
   Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. 
   You can mutate the Fighter objects.


   Input -> Output Examples: 
   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
   Lew attacks Harry; Harry now has 3 health.
   Harry attacks Lew; Lew now has 6 health.
   Lew attacks Harry; Harry now has 1 health.
   Harry attacks Lew; Lew now has 2 health.
   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
*/


// Solution
function declareWinner(fighter1, fighter2, firstAttacker) {
  
  const fighter1Name = fighter1.name;
  const fighter2Name = fighter2.name;
  
  const fighters = {[fighter1Name] : fighter1, [fighter2Name] : fighter2}
  
  let attacker = firstAttacker;
  let defender = '';
  
  if(firstAttacker === fighters[fighter1Name].name){
    defender = fighters[fighter2Name].name;
  }
  else{
    defender = fighters[fighter1Name].name;
  }
  
  let temp = '';

  while(fighter1.health > 0 && fighter2.health > 0){
     fighters[defender].health -= fighters[attacker].damagePerAttack;
     temp = attacker;
     attacker = defender;
     defender = temp;
  }
    
  if(fighter1.health <= 0){
    return fighter2.name;
  }
  else{
    return fighter1.name;
  }
}