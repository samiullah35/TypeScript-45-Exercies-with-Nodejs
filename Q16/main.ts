// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.

let GuestList: string[] = ["kashan","nauman","huzaifa",'hafeez']
console.log("Great News! we found a bigger table")

GuestList.unshift("sami")
console.log(GuestList)

GuestList.splice(Math.floor(GuestList.length/2),0, "asif");
console.log(GuestList);

GuestList.push("zarq");

console.log(GuestList);

GuestList.forEach(guest=> {
    console.log(`Dear ${guest}, you are invited to dinner`)
})