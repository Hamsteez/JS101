function rotate90(matrix) {
  let lengthA = matrix[0].length;
  let newMatrix = [];
  for (let loop = 0; loop < lengthA; loop++) {
    newMatrix.push([]);
  }
  let numOfRows = matrix.length;
  let counter = numOfRows - 1;
  for (let outer = 0; outer < matrix[0].length; outer++) {
    counter = numOfRows - 1;
    for (let inner = 0; inner < matrix.length; inner++) {
      newMatrix[outer][counter] = matrix[inner][outer];
      counter--;
    }
  }
  return newMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

