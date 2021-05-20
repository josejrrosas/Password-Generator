/* -needs various prompts asking for password criteria
 -have user select which criteria to include in the password
-prompts:ask user what length passsword they want from 8-128 characters
 ask user character types -if they want uppercase numeric or special characters
-at least one charactertype should be selected
-display generated password

*/


// Assignment Code
var generateBtn = document.querySelector("#generate"); //an id button
var passwordLength;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()";;
var numbers ="1234567890";
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
    alert("Please select at least 1 character type in the following prompts");
    }
    return passwordLength;
}

//function to validate upper case 
function isUpperCase(){
  upperValidated = confirm("Would you like your password to contain upper-case letters?");
  
  if(upperValidated == true){
    specialValidated = true;
    return upperValidated;
  }
  else {
    upperValidated = false;
    return specialValidated;
 }

  return upperValidated;
}

//function to validate special characters
function isSpecial(){
  specialValidated = confirm("Would you like your password to contain special characters?");

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
  numValidated = confirm("Would you like your password to contain numbers?");

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


//based on response. Add the appropriate characters 
//and add them into one single string and randomize it to get password

function generatePassword(){
  length();
  isUpperCase();
  isSpecial();
  isNumbers();

  var password = "";
  var characters = lowerCase;

  if(upperValidated == true && specialValidated == true && numValidated ==true){
    characters += upperCase + specialChar + numbers;
  }
  else if(upperValidated == false && specialValidated == true && numValidated ==true){
    characters += specialChar + numbers;
  }
  else if(upperValidated == true && specialValidated == false && numValidated ==true){
    characters += upperCase + numbers;
  }
  else if(upperValidated == true && specialValidated == true && numValidated ==false){
    characters += upperCase + specialChar;
  }
  else if(upperValidated == false && specialValidated == false && numValidated ==true){
    characters += numbers;
  }
  else if(upperValidated == false && specialValidated == true && numValidated ==false){
    characters += specialChar;
  }
  else if(upperValidated == true && specialValidated == false && numValidated ==false){
    characters += upperCase;
  }
  else{
    alert("Please select at least one character type to make your password more secure!");
    return generatePassword();
  }

  for(var i = 0; i < passwordLength ; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password; //this shows in the text area for generate a password 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();//define generatePassword by creating generatePassword  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}