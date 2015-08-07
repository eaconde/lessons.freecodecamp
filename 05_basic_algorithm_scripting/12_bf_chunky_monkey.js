// breaking array into chunks
// http://www.freecodecamp.com/challenges/bonfire-chunky-monkey

function chunk(arr, size) {
    var newArr = [];
    for (var i=0;i<arr.length;i+=size) {
        var chunk = [];
        console.log("i", i);
        for (var n=i;n<i+size;n++) {
            if (typeof arr[n] === 'undefined') {break;}
            console.log("arr[n]", arr[n]);
            chunk.push(arr[n]);
        }
        console.log('chunk', chunk);
        newArr.push(chunk);
    }

    console.log(newArr);
    return newArr;

}

chunk([0, 1, 2, 3, 4, 5], 4);
