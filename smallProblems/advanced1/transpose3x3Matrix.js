const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let newMatrix = [[], [], []];
  for (let outer = 0; outer < matrix.length; outer++) {
    for (let inner = 0; inner < matrix[outer].length; inner++) {
      newMatrix[inner][outer] = matrix[outer][inner];
    }
  }
  return newMatrix;
}

// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// function transpose(matrix) {
//   let tempVar = 0;
//   tempVar = matrix[1][0];
//   matrix[1][0] = matrix[0][1];
//   matrix[0][1] = tempVar;

//   tempVar = matrix[2][0];
//   matrix[2][0] = matrix[0][2];
//   matrix[0][2] = tempVar;

//   tempVar = matrix[2][1];
//   matrix[2][1] = matrix[1][2];
//   matrix[1][2] = tempVar;
// }

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]