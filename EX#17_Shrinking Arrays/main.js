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
// Inform that only two guests that invited for the dinner
console.log("unfortunately, the new dinner table wont arrive on time,so i can only invite two guests to do dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry, ".concat(removedGuest, " I cant invite you for dinner"));
}
// sending you a invitation to the last two guests on the list
console.log("Invitation to the last  2 Guests");
guestList.forEach(function (lasttwo) { return console.log("luckily ".concat(lasttwo, ", you are still invited for dinner")); });
// Removing last two Guests from the list 
guestList.pop();
guestList.pop();
console.log("EmptyList:", guestList);
