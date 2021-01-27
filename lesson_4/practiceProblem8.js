let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
function convToObj(arr) {
  let newObj = {};
  let vals = Object.keys(arr);
  let counter = 0;
  vals.forEach(function createObj(val) {
    newObj[arr[counter]] = val;
    counter++;
  });
  console.log(newObj);
}

convToObj(flintstones);