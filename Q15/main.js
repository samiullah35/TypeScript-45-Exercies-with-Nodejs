// Changing Guest List: You just heard that one of your guests can’t 
// make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.
var GuestList = ["ali", "khan", "asad", "sami"];
//name who cant make dinner
var unableAttend = GuestList.splice(1, 1)[0];
console.log("".concat(unableAttend, " cant make dinner"));
// replacing the name of the guest who can’t make it with the name of the new person you are inviting.
GuestList.push("faisal");
// • Print a second set of invitation messages, one for each person who is still in your list.
GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are invited"));
});
