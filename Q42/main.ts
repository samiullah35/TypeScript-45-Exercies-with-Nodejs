// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}
//function to make magication great through .map()will modify array
function make_great(magicians: string[]){
   return magicians.map(name => `The great ${name}`);
}
//define an array of magicians names
let magicians_name = ["asad","owais","riaz"]

// call make great function that modifies magicians names
let great_magicines = make_great(magicians_name);

// call show_magicians that show modified list of magicians
show_magicians(great_magicines)