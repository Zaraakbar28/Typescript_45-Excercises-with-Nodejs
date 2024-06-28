//Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
//Calling a function by-default values
make_shirt();
//calling  a function now with medium size and default message
make_shirt("medium");
// Calling a function with a small size and also print a different message
make_shirt("small", "I love JavaScript");
