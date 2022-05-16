/* Link to problem: https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript

   Problem:     Volume of a Cuboid

   Description: Bob needs a fast way to calculate the volume of a cuboid with three values:
   the length, width and height of the cuboid. Write a function to help Bob with this calculation.

   Input -> Output Examples: 
    (length, width, height) -> return volume
    (2, 3, 4)               -> return 24
    (3, 3, 4)               -> return 36
*/


//  Solution: 
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
  }