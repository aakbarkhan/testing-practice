
function sum(a, b) {
    return a + b;
  }
// to make it check if the string is at least 1 character long and not longer than 10 characters. 
  function stringLength(string) {
    string = string.length;
    if(string > 0 && string <= 10) {
      return string;
    } else {
      throw 'string should be more than 1 or less than 10';
    }
  }

  function reverseString(string) {
    let newStr = [];
    string.split('').forEach((str)=> {
      newStr.unshift(str)
    });
    return newStr.join('');
  }

  class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }
};

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);

}


  module.exports = { stringLength, sum, reverseString, capitalize, Calculator };