// Create a Array
var UserNames = ["Ayesha", "Bisma", "Sadia", "Admin", "Hamna"];
//Using ForEach Loop on Array 
UserNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for login in a again"));
    }
});
