var userName = ["Sami", "Ali", "Khan", "Musa", "Umer"];
userName.forEach(function (oneUser) {
    if (oneUser === "Musa") {
        console.log("Hello ".concat(oneUser, ", would you like to see status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thanks you for logging in again"));
    }
});
