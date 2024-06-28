// Define the make album function
function make_album (atrist_name : string, album_title : string, tracks? :number){
let album: {atrist : string , title : string , tracks? :number} = {
    atrist: atrist_name,
    title:album_title,
   };
 if (tracks !== undefined){
    album.tracks = tracks
   }
 return album;

}

// Calling three Functions and creating 3 variables with different values
let album1 = make_album("Zara","album title 1");

let album2 = make_album("Ayesha","album title 2");

//Calling a make_album  functions with third parameter
let album3 = make_album("Hamna","album title 3",10);

// Print values of Our object created by function
console.log(album1);
console.log(album2);
console.log(album3);


