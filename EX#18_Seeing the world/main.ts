//Making a Arrays of countries and prints its Orignal  Orders
let countriesTovisit: string[] =["England","Malaysia","America","Dubai"];
console.log("orignal order:",countriesTovisit);

//Print the Array in alphabetical order and witout modifying the actual Arrays list
console.log("Alphabetical Order:",[...countriesTovisit].sort());

//Show that the arrays is still in its orignal order
console.log("still in orignal order:",countriesTovisit);

//Print the array in Reversed order witout modifying the Actual Arrays list
console.log("Reverse Order:",[...countriesTovisit].reverse());

//Show that the arrays is still in its orignal order
console.log("still in orignal order:",countriesTovisit);

//We have changed the orignal array order now
console.log("orignal arrays reserved:",countriesTovisit.reverse());

//Print the array to show that it's back to it's orignal order
console.log("Back to orignal order:",countriesTovisit.reverse());

//Print the array to show that it's order has been changed in Alphabetical Order Now
console.log("Sorted in Alphabetical Order:",countriesTovisit.sort());

//We have changed agin the orignal Array order now in reverse order again
console.log("orignal arrays reserved again:",countriesTovisit.reverse());

