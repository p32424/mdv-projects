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
    };
    // Check URL string function
    var checkUrl = function(webAddress) {
        if (webAddress.substring(0, 7) === "http://" || webAddress.substring(0, 8) === "https://"){
            return true;
        }
        else {
            return false;
        }
    };
    // Format number of decimals function
    var formatDecimals = function(numberX) {
        // 
    };
    // Convert string number to actual number function
    var convertToNumber = function(string) {
        // code
    };
    // Smallest value great than given value in array function
    var findSmallestValue = function(array) {
        // code
    };
    // Find total value of just numbers in an array function
    var findTotalNumberValue = function(array) {
        // code
    };
    
    return {
        "checkPhoneNumber": checkPhoneNumber,
        "checkUrl": checkUrl
        /*"formatDecimals":
        "convertToNumber":
        "findSmallestValue":
        "findTotalNumberValue": */
    }
    
}; // end myLibrary

//outputs to test code
var newLib = new myLibrary();
console.log("Is this a valid phone number? " + newLib.checkPhoneNumber("818-204-3204"));
console.log("Is this a valid phone number? " + newLib.checkPhoneNumber("213-45-3545"));
console.log("Is this a valid web address? " + newLib.checkUrl("https://www.happywebsite.com"));
console.log("Is this a valid web address? " + newLib.checkUrl("htps://www.happywebsite.com"))