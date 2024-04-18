// Greetings: Start with the array you used in Exercise 11, but instead of
//  just printing each person’s name, print a message to them. The text of
//   each message should be the same, but each message should be personalized with the person’s name.
var names = ["sami", "ali", "khan", "musa"];
//for loop
for (var i = 0; i < names.length; i++) {
    console.log("Hello ".concat(names[i], "! How are you today?"));
}
//for each
names.forEach(function (name) {
    console.log("Hi, ".concat(name, "! How are you today?"));
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log("Dear, ".concat(friendName, "! How are you today?"));
}
//for each
