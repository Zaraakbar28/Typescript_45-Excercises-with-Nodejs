// Define the make album function
function make_album(atrist_name, album_title, tracks) {
    var album = {
        atrist: atrist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three Functions and creating 3 variables with different values
var album1 = make_album("Zara", "album title 1");
var album2 = make_album("Ayesha", "album title 2");
//Calling a make_album  functions with third parameter
var album3 = make_album("Hamna", "album title 3", 10);
// Print values of Our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
