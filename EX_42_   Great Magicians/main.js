//Define the function to show the magician names
function show_Magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to make magician great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (name) { return "The Great".concat(name); });
}
//Define an array of magicians names
var magician_names = ["Harry Potter", "Zara", "Hamna"];
// Call make great functions to modify magicians names
var great_magicians = make_great(magician_names);
console.log(great_magicians);
// Call show magicians that show modified list of magicians
show_Magician(great_magicians);
