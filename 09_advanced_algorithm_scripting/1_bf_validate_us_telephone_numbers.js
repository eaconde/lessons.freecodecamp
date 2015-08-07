// http://www.freecodecamp.com/challenges/bonfire-validate-us-telephone-numbers

function telephoneCheck(str) {
  var USNumber = new RegExp(/^(1(\s*|-)?)?\(?\d{3}\)?(-|\.|\s*)\d{3}(-|\.|\s*)\d{4}$/);
  return USNumber.test(str);
}


console.log(telephoneCheck("2 555-555-5555"));
