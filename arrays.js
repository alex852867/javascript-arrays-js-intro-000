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
