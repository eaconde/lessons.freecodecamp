// http://www.freecodecamp.com/challenges/bonfire-symmetric-difference

function sym(args) {
    function getUnique(arr1, arr2) {
        var unique =
            arr1
            .filter(function(i) {
                return arr2.indexOf(i) < 0;
            })
            .concat(
                arr2.filter(function(i) {
                    return arr1.indexOf(i) < 0;
                })).reduce(function(p, c) {
                    if (p.indexOf(c) < 0) p.push(c);
                    return p;
                    }, []);
        return unique;
    }

    var result = [];
    if (arguments.length > 1) {
        result = Array.prototype.slice.call(arguments).reduce(function(i, c) {
            return getUnique(i, c);
        });
    } else {
        result = getUnique(args, []);
    }
    return result;
}

sym([1, 1]);
