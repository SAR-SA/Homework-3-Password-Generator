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


//Generator Functions - http://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Get users choice if they want those
let charType = [getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol];
//console.log(choosenCharacterTypes[0]()) //use math.random to generate a integer whithin a certin range
let randomIndex = Math.floor(Math.random() * charType.length);
//console.log(charType[randomindex]())

//Generate Password function
function generatePassword() {
  //Prompts
  let passLength = prompt('Choose Password length between 8-128');
  passLength = parseInt(passLength);
  
  if (passLength < 8 || passLength > 128){
    return('Must Select a number between 8-128. Please try again.'); 
  }

  const lowerCase = confirm('Include Lowercase Characters?') ;
  const upperCase = confirm('Include Uppercase Characters?') ;
  const numbers = confirm('Include Numbers?') ;
  const symbols = confirm('Include Symbols?') ;

  let passFuncs = [] ;


  if (lowerCase) {
    passFuncs.push(getRandomLower) ;
  } 
  
  if (upperCase){
    passFuncs.push(getRandomUpper) ;
  }

  if (numbers){
    passFuncs.push(getRandomNumber) ;
  }

  if (symbols){
    passFuncs.push(getRandomSymbol) ;
  }

//Password Length
  let passArray = [] ;

  for (var i= 0; i < passLength; i++){
    let randIdx = Math.floor(Math.random() * passFuncs.length) ;
    var randomFunc = passFuncs[randIdx] ;

    passArray.push(randomFunc()) ;
  }
  
  return passArray.join('') ;
}