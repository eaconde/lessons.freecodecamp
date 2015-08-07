// Roman Numeral Converter
// http://www.freecodecamp.com/challenges/bonfire-roman-numeral-converter

function convert(num) {
    if (num > 4999) { return false; }
    var numArr = num.toString().split('').reverse();

    var numeral = numArr.map(function(v, i) {
        var val = +v;
        switch (i) {
            case (0):
                // 0 = I, V, X
                return romanize(val, 'I', 'V', 'X');
            case (1):
                // 1 = X, L, C
                return romanize(val, 'X', 'L', 'C');
            case (2):
                // 2 = C, D, M
                return romanize(val, 'C', 'D', 'M');
            case (3):
                // 3 = M | max is 4999
                return Array(val+1).join('M');
        }

    });

    function romanize(val, low, mid, high) {
        if (val === 9) {
            return low + high;
        } else if (val === 5) {
            return mid;
        } else if (val === 4) {
            return low + mid;
        } else if (val > 5 && val < 9) {
            return mid + Array(val-5+1).join(low);
        } else {
            return Array(val+1).join(low);
        }
    }
    console.log(numeral.reverse().join().replace(/,/g, ''));
    return numeral.reverse().join().replace(/,/g, '');
}

convert(3999);
