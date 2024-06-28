// Array of Current Users
var current_user = ["Amna", "Bisma", "hadia", "Fatima", "Yusra"];
// Array of New Users
var new_user = ["Hamna", "Ayesha", "Yumna", "Hadia", "Farha"];
// Loop through new users to check for usernames availability 
new_user.forEach(function (new_one_user) {
    //Making a condition for username already exist and new save in  our_condition variable 
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different message using If-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
