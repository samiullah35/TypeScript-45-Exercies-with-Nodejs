// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
var GuestList = ["kashan", "nauman", "huzaifa", 'hafeez'];
console.log("Great News! we found a bigger table");
GuestList.unshift("sami");
console.log(GuestList);
GuestList.splice(Math.floor(GuestList.length / 2), 0, "asif");
console.log(GuestList);
GuestList.push("zarq");
console.log(GuestList);
GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner"));
});
