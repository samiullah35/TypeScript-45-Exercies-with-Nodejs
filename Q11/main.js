// Names: Store the names of a few of your friends in a array called names. Print each person’s name
//  by accessing each element in the list, one at a time.
// Defines an array of names
var names = ["sami", "ali", "khan", "aqsa"];
//loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
;
//forof loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
//for each
names.forEach(function (friend) {
    console.log(friend);
});
