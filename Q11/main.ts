// Names: Store the names of a few of your friends in a array called names. Print each person’s name
//  by accessing each element in the list, one at a time.

// Defines an array of names
let names: string[] = ["sami","ali","khan","aqsa"];

//loop

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
};

//for of loop
for (const friendName of names) {
   console.log(friendName);
}

//for each
names.forEach(friend => {
    console.log(friend);
})