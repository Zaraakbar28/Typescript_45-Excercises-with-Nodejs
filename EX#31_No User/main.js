// Creating a Arrays with 5 values
var UserNames = ["Ayesha", "Bisma", "Sadia", "Admin", "Hamna"];
//Remove all values from our Arrays Now our Array is empty
UserNames = [];
// If statement for checking length of our Array is empty?
if (UserNames.length === 0) {
    console.log("Your Array is empty we need to find some user!");
}
else {
    //  If Array is not empty using Foreach Loop on Array
    UserNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thankyou for login in a again"));
        }
    });
}
