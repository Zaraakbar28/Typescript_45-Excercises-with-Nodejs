let guestList = ["zara","ayesha","amna","laiba"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi a skhti");

guestList.splice(0,1, "Zoya");

guestList.forEach(guest => console.log(`salam, ${guest}, would you like to do dinner with me?`));