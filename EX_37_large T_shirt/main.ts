//Making a function
function make_shirt (size: string = "Large", printMessage: string = "I love Typescript"){
console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)

}

//Calling a function by-default values
make_shirt()

//calling  a function now with medium size and default message
make_shirt("medium")

// Calling a function with a small size and also print a different message
make_shirt("small","I love JavaScript")