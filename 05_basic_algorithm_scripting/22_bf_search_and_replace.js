// find and replace string. also, capitalize replacement if string getting replaced is also in caps
// http://www.freecodecamp.com/challenges/bonfire-search-and-replace

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.isUpperCased = function() {
    return this.charAt(0) === this.charAt(0).toUpperCase();
};

function replace(str, before, after) {
    var arr = str.split(' ');
    var sIdx = arr.indexOf(before);
    if (before.isUpperCased()) { after = after.capitalize(); }
    arr[sIdx] = after;
    console.log(arr.join(' '));
    return arr.join(' ');
}

replace("Let us go to the store", "store", "mall");
