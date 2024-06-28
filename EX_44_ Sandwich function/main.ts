// Define a function with a rest parameter that accepts items arguments representing our sandwich 
function makeSandwich(... items : string[]){
console.log("\n Making a sandwich with the following items: \n" );

items.forEach(SingleItem => console.log(SingleItem));

console.log("\n Now enjoy Sandwich");

}

//Call the function with 3 time with 3 different numbers of arguments
makeSandwich("Chicken","Cheese","Mayo","Egg");

makeSandwich("Bread","Butter");

makeSandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","Lectuace","Tomato");