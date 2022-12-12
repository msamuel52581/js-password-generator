// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var specialSymbols;
  var isUpperCase;
  var isLowerCase;
  var isNumbers;
  var minLength;
  var allCharacters = '';
  var numbers = '0123456789';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var symbols = '!~@#$%^&*(){}_+"|;./\'"';
  var password = '';

  while (true) {
    minLength = parseInt(prompt('what is the minimum length of the password?'));
    if (minLength >= 8 && minLength <= 128) {
      break;
    } else {
      alert('length should be atleast 8 and atmost 128');
    }
  }

  while (true) {
    while (true) {
      isNumbers = prompt('Should we include number ? Type (Y/N)');
      if (isNumbers.toLowerCase() == 'y' || isNumbers.toLowerCase() == 'n') {
        if (isNumbers.toLowerCase() == 'y') {
          allCharacters += numbers;
        }
        break;
      } else {
        alert('Invalid input for numbers. Please try again');
      }
    }

    while (true) {
      isLowerCase = prompt(
        'Should we include lowercase characters? Type (Y/N)'
      );
      if (
        isLowerCase.toLowerCase() == 'y' ||
        isLowerCase.toLowerCase() == 'n'
      ) {
        if (isLowerCase.toLowerCase() == 'y') {
          allCharacters += lower;
        }
        break;
      } else {
        alert('Invalid input for lowercase characters. Please try again');
      }
    }

    while (true) {
      isUpperCase = prompt(
        'Should we include uppercase characters? Type (Y/N)'
      );
      if (
        isUpperCase.toLowerCase() == 'y' ||
        isUpperCase.toLowerCase() == 'n'
      ) {
        if (isUpperCase.toLowerCase() == 'y') {
          allCharacters += lower.toUpperCase();
        }
        break;
      } else {
        alert('Invalid input for uppercase characters. Please try again');
      }
    }

    while (true) {
      specialSymbols = prompt('Should we include symbols? Type (Y/N)');
      if (
        specialSymbols.toLowerCase() == 'y' ||
        specialSymbols.toLowerCase() == 'n'
      ) {
        if (specialSymbols.toLowerCase() == 'y') {
          allCharacters += symbols;
        }
        break;
      } else {
        alert('Invalid input for symbols. Please try again');
      }
    }
    if (
      isNumbers.toLowerCase() == 'y' ||
      isLowerCase.toLowerCase() == 'y' ||
      isUpperCase.toLowerCase() == 'y' ||
      specialSymbols.toLowerCase() == 'y'
    ) {
      break;
    } else {
      alert('You need to select at least one type of characters');
    }
  }

  if (isLowerCase.toLowerCase() == 'y') {
    var index = getRandom(lower.length);
    password += lower[index];
  }
  if (isUpperCase.toLowerCase() == 'y') {
    var index = getRandom(lower.length);
    password += lower.toUpperCase()[index];
  }
  if (specialSymbols.toLowerCase() == 'y') {
    var index = getRandom(symbols.length);
    password += symbols.toUpperCase()[index];
  }
  if (isNumbers.toLowerCase() == 'y') {
    var index = getRandom(numbers.length);
    password += numbers[index];
  }

  for (var i = password.length; i < minLength; i++) {
    var index = getRandom(allCharacters.length);
    password += allCharacters[index];
  }

  return password;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
