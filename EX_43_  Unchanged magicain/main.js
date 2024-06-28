//Define the function to show the magician names.
function show_Magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to make magician great through .map() it will modify array.
function make_great(magician) {
    return magician.map(function (name) { return "The Great".concat(name); });
}
//Define an array of magicians names.
var magician_names = ["Harry Potter", "Zara", "Hamna"];
// Making a copy of Orignal array through .slice() function.
var copy_magician_names = magician_names.slice();
//Modify the copied array to include "The Great" with their names.
var copy_great_magician = make_great(copy_magician_names);
//Show  both arrays orignal and copied.
//Orignal
console.log("Orignal Array \n");
show_Magician(magician_names);
//Copied
console.log("Copied Array \n");
show_Magician(copy_great_magician);
