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
