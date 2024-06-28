//Define a function to print each magician  name from an array
function show_Magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//Define an array containing  magician names
var magician_names = ["Harry potter", "zara", "hamna"];
// Call the function to print each magician name
show_Magician(magician_names);
