/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with ").concat(message, " print on shirt"));
}
//calling a function with by-default
make_shirt();
//medium size and default message
make_shirt("Medium");
//deffrint print message
make_shirt("Small", "I love TypeScript");
