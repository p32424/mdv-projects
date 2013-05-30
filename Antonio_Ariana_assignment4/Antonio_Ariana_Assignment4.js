// alert("JavaScript works!");

/* Ariana Antono
   SDI 1305
   Project 4
   My code library
*/

var myLibrary = function() {
    
    // Check phone number string function
    var checkPhoneNumber = function(number) {
       if (number.length === 12) {
            if (number.charAt(3) === "-") {
                if (number.charAt(7) === "-") {
                    return true;
                }
            }
       }
       else {
            return false;
       }
    }; // end checkPhoneNumber
    
    // Check URL string function
    var checkUrl = function(webAddress) {
        if (webAddress.substring(0, 7) === "http://" || webAddress.substring(0, 8) === "https://"){
            return true;
        }
        else {
            return false;
        }
    }; // end checkUrl
    
    // Format number of decimals function
    var formatDecimals = function(numberToChange, decimalPlaces) {
        numberToChange = numberToChange.toFixed(decimalPlaces);
        return numberToChange
    }; // end formatDecimals
    
    // Convert string number to number function
    var convertToNumber = function(string) {
        if (typeof(string) === "string") {
            var newString = parseFloat(string);
            return newString;
        } else {
            return string;
        } 
    }; // end convertToNumber
    
    // Smallest value great than given value in array function
    var findSmallestValue = function(array, numToCompare) {
        array.sort();
        for (var i=0; i <=array.length; i++) {
            if (array[i] >= numToCompare ) {
                return array[i];
            }
        }; 
    }; // end findSmallestValue
    
    // Find total value of just numbers in an array function
    var findTotalNumberValue = function() {
        //code
    }; // end findTotalNumberValue
    
    return {
        "checkPhoneNumber": checkPhoneNumber,
        "checkUrl": checkUrl,
        "formatDecimals": formatDecimals,
        "convertToNumber": convertToNumber,
        "findSmallestValue": findSmallestValue
        /*"findTotalNumberValue": */
    }
    
}; // end myLibrary

//outputs to test code
var newLib = new myLibrary();
console.log("Is this a valid phone number? " + newLib.checkPhoneNumber("818-204-3204"));
console.log("Is this a valid phone number? " + newLib.checkPhoneNumber("213-45-3545"));
console.log("Is this a valid web address? " + newLib.checkUrl("https://www.happywebsite.com"));
console.log("Is this a valid web address? " + newLib.checkUrl("htps://www.happywebsite.com"))
console.log("I've changed decimal places on a number: " + newLib.formatDecimals(3.1, 2));
console.log("I've changed a string to a number: " + newLib.convertToNumber("3.45lbs"));
console.log("This outputs the next highest number in an array compared to a given number: " + newLib.findSmallestValue([6,3,4,5,2,20,1,13,17],14));