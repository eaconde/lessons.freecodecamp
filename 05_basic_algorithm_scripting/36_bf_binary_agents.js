// http://www.freecodecamp.com/challenges/bonfire-binary-agents

// NOTE: in order to get the correct char, we need to first convert the binary code into a decimal.

function binaryAgent(str) {
  var result = str.split(' ').map(function(bit) {
    return String.fromCharCode(parseInt(bit, 2));
  }).join().replace(/,/g, '');

  console.log(result);
  return result;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
