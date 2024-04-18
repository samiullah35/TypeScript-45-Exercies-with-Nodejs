// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
var alienColor = "green";
if (alienColor === "green") {
    console.log("(version 1)You earned 5 points!");
}
else if (alienColor === "red") {
    console.log("You earned 10 points!");
}
else if (alienColor === "blue") {
    console.log("You earned 15 points!");
}
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("You earned 5 points!");
}
else if (alienColor2 === "yellow") {
    console.log("(version 2)You earned 10 points!");
}
else if (alienColor2 === "blue") {
    console.log("You earned 15 points!");
}
var alienColor3 = "yellow";
if (alienColor3 === "green") {
    console.log("You earned 5 points!");
}
else if (alienColor3 === "red") {
    console.log("(version 3)You earned 10 points!");
}
else if (alienColor3 === "yellow") {
    console.log("(version 3)You earned 15 points!");
}
else if (alienColor3 === "blue") {
    console.log("You earned 15 points!");
}
