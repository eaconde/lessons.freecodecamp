// used reduce() to find the longest word
// http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string

function findLongestWord(str) {
    return str.split(' ')
        .reduce(function(c, i) {
            if (c.length > i.length) {
                return c;
            } else {
                return i;
            }

        }).length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
