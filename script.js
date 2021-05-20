/* -needs various prompts asking for password criteria
 -have user select which criteria to include in the password
-prompts:ask user what length passsword they want from 8-128 characters
 ask user character types -if they want uppercase numeric or special characters
-at least one charactertype should be selected
-display generated password

look up combining array javascript
*/


// Assignment Code
var generateBtn = document.querySelector("#generate"); //an id button
var passwordLength;
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split(''); //the split part makes it an array | use .join() to connect them all at the end 
var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var specialChar = "!@#$%^&*()".split('');;
var numbers ="1234567890".split('');
var upperValidated;
var specialValidated;
var numValidated;

//function for length of password
function length(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be. (Required to be between 8 - 128 characters): ");

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      alert("Password must be between 8 - 128 characters");
      length();
    }else{
    alert("Please select at least 1 character type in the next menu");
    }
    return passwordLength;
}

//function to validate upper case 
function isUpperCase(){
  var upperValidated = confirm("Would you like your password to contain upper-case letters?");

  if(upperValidated == true){
    upperValidated = true;
    return upperValidated;
  }
  else {
    upperValidated = false;
    return upperValidated;
 }

  return upperValidated;
}

//function to validate special characters
function isSpecial(){
  var specialValidated = confirm("Would you like your password to contain special characters?");

  if(specialValidated == true){
    specialValidated = true;
    return specialValidated;
  }
  else {
    specialValidated = false;
    return specialValidated;
 }

  return specialValidated;
}

//function to validate numbers
function isNumbers(){
  var numValidated = confirm("Would you like your password to contain numbers?");

  if(numValidated == true){
    numValidated = true;
    return numValidated;
  }
  else {
    numValidated = false;
    return numValidated;
  }

  return numValidated;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //runs writePassword function after a click 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();//define generatePassword by creating generatePAssword below 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(){
  var password = ['n' , ' ' , 'p' , 's' , ' ' , 'q'];
  return length();
  return isUpperCase();
  // var passwordLength = prompt("How long should your password be? (8 - 128)");
  // var isUpperCase = confirm("Do you want it to contain upperCase letters?");
  // console.log(isUpperCase); //returns false if cancel so use boolean
  console.log(password);
  console.log(password.join(''));
  return password.join(''); //this shows in the text area for generate a password 
}


