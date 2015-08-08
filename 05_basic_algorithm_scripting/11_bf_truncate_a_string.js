// http://www.freecodecamp.com/challenges/bonfire-truncate-a-string

function truncate(str, num) {
  // Clear out that junk in your trunk
  console.log(str.length, num)
  if (str.length <= num) {
    return str
  } else {
      return str.substr(0, num - 3).concat('...');
  }  
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
