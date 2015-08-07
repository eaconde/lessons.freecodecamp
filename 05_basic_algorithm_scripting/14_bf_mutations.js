// http://www.freecodecamp.com/challenges/bonfire-mutations

function mutation(arr) {
    for (var n=0;n<arr[1].length;n++) {
        if (arr[0].toLowerCase().indexOf(arr[1][n].toLowerCase()) < 0) {
            return false;
        }
    }
    return true;
}

mutation(['hello', 'hey']);
