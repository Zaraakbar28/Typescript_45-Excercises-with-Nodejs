var guestList = ["zara", "ayesha", "amna", "laiba"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi a skhti");
guestList.splice(0, 1, "Zoya");
guestList.forEach(function (guest) { return console.log("salam, ".concat(guest, ", would you like to do dinner with me?")); });
