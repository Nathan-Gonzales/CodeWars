/* Link to problem: https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

   Problem:     Matrix Transpose

   Description: Write a function that outputs the transpose of a matrix - 
   a new matrix where the columns and rows of the original are swapped.
   The input to your function will be an array of matrix rows. 
   You can assume that each row has the same length, and that the 
   height and width of the matrix are both positive.


   Input -> Output Examples: 
    | 1 2 3 |
    | 4 5 6 |
    is
    | 1 4 |
    | 2 5 |
    | 3 6 |

*/

// Solution: 
function transpose(matrix) {
    const transposed = new Array(matrix[0].length)
    
    for(let x = 0; x < transposed.length; x++){
      transposed[x] = new Array(matrix.length)
    }
    
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[0].length; j++){
        transposed[j][i] = matrix[i][j]
      }
    }
    
    return transposed
}