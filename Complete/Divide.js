'use strict';

/**
* Divides one number by another entered into the input fields on the browser window
* and displays the result of the operation as an alert.
*/
let divide = () => {
  // Get and store the first and second number in variables
  let firstNum = document.getElementById('dividend').value;
  let secondNum = document.getElementById('divisor').value;
  
  // Convert the numbers from their string format into integer formats
  // then add them.
  let result = firstNum / secondNum;
  console.log(result);
  // Display the sum of the numbers as an alert in the browser window
  alert(`The result of the division of ${firstNum} by ${secondNum} is ${result}.`);
  
  // Clear the input fields after the calculation is completed
  document.getElementById('dividend').value = '';
  document.getElementById('divisor').value = '';
};
