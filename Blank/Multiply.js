'use strict';

/**
* Multiplys two numbers entered into the input fields on the browser window
* and displays the result of the operation as an alert.
*/
let multiply = () => {
  // Get and store the first and second number in variables
  let firstNum = document.getElementById('multiplied').value;
  let secondNum = document.getElementById('multiplier').value;
  
  // Convert the numbers from their string format into integer formats
  // then add them.
  let result = firstNum * secondNum;
  console.log(result);
  // Display the sum of the numbers as an alert in the browser window
  alert(`The result of the multiplication of ${firstNum} and ${secondNum} is ${result}.`);
  
  // Clear the input fields after the calculation is completed
  document.getElementById('multiplied').value = '';
  document.getElementById('multiplier').value = '';
};
