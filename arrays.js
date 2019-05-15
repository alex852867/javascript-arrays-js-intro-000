var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(){
  return ['Creme Egg', ...chocolateBars,]
}
function destructivelyAddElementToBeginningOfArray() {
  return chocolateBars.unshift('Mars Bar')
}
