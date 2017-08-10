function uniqueIncrement(value) {
	//change the user input to a string.
    var temp = (value).toString().split("").map(Number);
    
    //A copy of the user input.
    var result = temp.slice();

    //find duplicates in the array
    var duplicates = temp.filter(function(currentValue) {
        return result.indexOf(currentValue) > -1;
    });

    //increase the value of the array by 1 and check for duplicates 
    function check() {
        result = parseInt(result.join("")) + 1;
        result = result.toString().split("").map(Number);
        duplicates = temp.filter(function(currentValue) {
            return result.indexOf(currentValue) > -1;
        });

    }

    //As long as there are duplicates run the check function
    while (duplicates.length > 0) {
        check();
    }

    //returns final results results
    return result.join("");
}

//function to display results in the browser
function populateField(x) {
    document.getElementById("output").value = uniqueIncrement(x);
}