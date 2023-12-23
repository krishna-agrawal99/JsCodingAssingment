function distinct(array) {
  const uniqueArr = [];

  for (let i = 0; i < array.length; i++) {
    if (uniqueArr.indexOf(array[i]) === -1) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}

const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5];
const uniqueArr = distinct(arr);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
