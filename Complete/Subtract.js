'use strict';

/**
* Subtracts one number from another number entered into the input fields on the browser window
* and displays the result of the operation as an alert.
*/
let subtract = () => {
  // Get and store the first and second number in variables
  let firstNum = document.getElementById('subtractor').value;
  let secondNum = document.getElementById('subtracted').value;
  
  // Convert the numbers from their string format into integer formats
  // then add them.
  let result = firstNum - secondNum;
  console.log(result);
  // Display the sum of the numbers as an alert in the browser window
  alert(`The result of the subtraction of ${firstNum} from ${secondNum} is ${result}.`);
  
  // Clear the input fields after the calculation is completed
  document.getElementById('subtractor').value = '';
  document.getElementById('subtracted').value = '';
};
