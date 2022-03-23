// Odin foundations practice functions


// write a function that adds 7 to a number
function add7(number){
    return number + 7;
  }
  
  let myNum1 = add7(1);
  console.log(myNum1);
  
  // write a function that takes 2 numbers and returns their product
  function multiply(num1,num2){
    return num1*num2;
  }
  
  let myNum2 = multiply(2,2);
  console.log(myNum2);
  
  // write a function that capitalizes the first letter of a string
  function capitalize(string){
    let lowerString = string.toLowerCase();
    let firstLetter = string[0];
    return lowerString.replace(firstLetter,firstLetter.toUpperCase());
  }
  
  let myString = capitalize("kaiLeY");
  console.log(myString);
  
  // write a function that returns the last letter of a string
  function lastLetter(string){
    let lastLetterIndex = string.length-1;
    let lastLetter = string[lastLetterIndex];
    return lastLetter;
  }
  
  let myString2 = lastLetter("kailey");
  console.log(myString2);