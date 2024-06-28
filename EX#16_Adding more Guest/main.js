// creating a guest list Array
var guestList = ["zara", "ayesha", "amna", "laila"];
//making a variable for those  guest  who cant come
var dontCome = guestList[0];
//print the name of guest who cant come 
console.log(dontCome, "Nahi a skhti");
//Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Hadia");
//Message print for a Bigger Table
console.log("Good News! We have found a Bigger Table For a Dinner.");
//Adding a new value at starting index of  array
guestList.unshift("zoya");
//Adding a new value at ending index of array
guestList.push("Saima");
//Get a  middle index of  guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index array
guestList.splice(middleIndex, 0, "Laiba");
// Print Message of Updated List
console.log("updated List of our Guests");
// sending a invitation message to  our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to do dinner with me? ")); });
