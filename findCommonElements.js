//Task 3
function findCommonElements(arrayOne, arrayTwo) {
  var commonElements = [];

  for (var i = 0; i < arrayOne.length; i++) {
    var currentElement = arrayOne[i];

    // Check  the current element is present in arrayTwo
    var isInarrayTwo = false;
    for (var j = 0; j < arrayTwo.length; j++) {
      if (currentElement === arrayTwo[j]) {
        isInarrayTwo = true;
        break;
      }
    }

    // If the current element is in arrayTwo and not already in commonElements, add it
    if (isInarrayTwo && commonElements.indexOf(currentElement) === -1) {
      commonElements.push(currentElement);
    }
  }

  return commonElements;
}

// sample array 
var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = [3, 4, 5, 6, 7];

var result = findCommonElements(arrayOne, arrayTwo);
console.log("Common elements:", result);
