// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = prompt('what is the new password');
  //code goes here
  //return ??
    var symbols = "!@#$%^&*(){}[];:<>/|\_-+=";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = upperCase.toLowerCase(); 
    var numbers = "0123456789";
}
var promptLength = parseInt(prompt("Choose between 8 and 128 characters for the length of your password.  Please type a number...")); 

if (promptLength < 8 || promptLength > 128) {
    alert("You did not pick a number between 8 and 128.  Please try again."); 
    location.reload(); 
} else { 
    var confirmSymbols = confirm("Would you like SYMBOLS in your password?"); 
    var confirmUpper = confirm("Would you like UPPERCASE LETTERS in your password?"); 
    var confirmLower = confirm("Would you like LOWERCASE LETTERS in your password?"); 
    var confirmNumbers = confirm("Would you like NUMBERS in your password?"); 
}