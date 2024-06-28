// Array of Current Users
let current_user = ["Amna","Bisma","hadia","Fatima","Yusra"]

// Array of New Users
let new_user = ["Hamna","Ayesha","Yumna","Hadia","Farha"]

// Loop through new users to check for usernames availability 
new_user.forEach(new_one_user => {

    //Making a condition for username already exist and new save in  our_condition variable 
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Different message using If-Else statements
    if(our_condition){
    console. log(`Sorry ${new_one_user} is already taken!`)
    } else{
     console.log(`This Username ${new_one_user} is available`);
    }
})