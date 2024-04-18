// Name Cases: Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase.
var personName = "sami ullah";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase()),
    console.log(personName.replace(/\b\w/g, function (chr) { return chr.toUpperCase(); }));
