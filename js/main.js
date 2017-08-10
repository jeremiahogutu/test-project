function uniqueIncrement(value) {
    var temp = (value).toString().split("").map(Number);
    temp[0] += 1;
    var result = temp;
    for (var i = temp.length - 1; i > 0; i--) {
        if (temp[i] === 0) {
            result = temp.map(function() {
                return temp[0];
            });
        } else if (temp[i] > 0) {
            result[i] = 0;
        } else {
            result[i] += 1;
        }
    }
    return result.join("");
}

console.log(uniqueIncrement());