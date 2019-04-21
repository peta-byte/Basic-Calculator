'use strict';

/**
* Adds two numbers entered into the input fields on the browser window
* and displays the result of the operation as an alert.
*/
let add = () => {
  // Get and store the first and second number in variables
  let firstNum = document.getElementById('summedUp').value;
  let secondNum = document.getElementById('addedNum').value;
  
  // Convert the numbers from their string format into integer formats
  // then add them.
  let sum = parseInt(firstNum, 10) + parseInt(secondNum, 10);
  console.log(sum);
  // Display the sum of the numbers as an alert in the browser window
  alert(`The sum of ${firstNum} and ${secondNum} is ${sum}.`);
  
  // Clear the input fields after the calculation is completed
  document.getElementById('summedUp').value = '';
  document.getElementById('addedNum').value = '';
};

