var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, foo){
  return ['foo', ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}
function addElementToEndOfArray(array, foo) {
  return [...array, 'foo']
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}
function accessElementInArray(array, index) {
    return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  array.slice(-1);
  return array
}
