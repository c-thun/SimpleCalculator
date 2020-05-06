/*
* Implement the Dijkstra-Shunting Yard Algorithm for the functionality
* Add keyboard support
* Add theme support (possible UI redesign)
*/

// Create the necessary functions
var currentValue = '';
var flag = false;

function multiply (number) {
  console.log('lets multiply');
}

function addition (number) {
  console.log('lets add');
}
// Show the  result
function updateDisplay () {

}

// Update current value : the only function of the number buttons
function getValue () {
  var inputVal = this.value;
  if(!flag || (inputVal!='.')) {
    if(currentValue == 0) {
      currentValue = inputVal;
    } else {
      currentValue+= inputVal;
    }
  }
  flag = flag || (inputVal=='.');
  console.log(currentValue);
}

// Primary Action Buttons
function primaryCompute () {
  var funcToExec = this.name;

  var result = compute(currentValue, funcToExec);
}

// Secondary Buttons to run their actions
function compute (number, operation) {
  return operation(number);
}

// Bind the UI Elements
const numberButtons = document.querySelectorAll('.btn-num');
numberButtons.forEach(btn => {
    btn.addEventListener('click', getValue);
});

const secondaryButtons = document.querySelectorAll('.btn-sec');
secondaryButtons.forEach(btn => {
    btn.addEventListener('click', compute);
});

const primaryActionButtons = document.querySelectorAll('.btn-primary-action');
primaryActionButtons.forEach(btn => {
    btn.addEventListener('click', primaryCompute);
});
