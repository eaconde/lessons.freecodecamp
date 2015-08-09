// http://www.freecodecamp.com/challenges/bonfire-dna-pairing

function pair(str) {
  var DNA = str.split('').map(function(gene) {
    switch (gene) {
      case 'A': return ['A', 'T'];
      case 'T': return ['T', 'A'];
      case 'C': return ['C', 'G'];
      case 'G': return ['G', 'C'];
    }
  });
  console.log(DNA);
  return DNA;
}

pair("GCG");
