// Create a Array
let UserNames = ["Ayesha" , "Bisma" , "Sadia" , "Admin" , "Hamna"];

//Using ForEach Loop on Array 
UserNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
     console.log(`Hello ${oneUser},would you like to see a status report?`)
    
    } else{
     console.log(`Hello ${oneUser}, thankyou for login in a again`)
        
    }
})    