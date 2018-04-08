var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newarray = [array];
  return [newarray].unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newarray = [array];
  return newarray.push(element);
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var nrray = array;
  return nrray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var n = [array];
  return n.shift();
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var n = [array];
  n.pop();
  return n;
}
