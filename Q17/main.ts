// Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// in time for the dinner, and you have space for only two guests.

let GuestList:string[] =["asif","zarq","musa","umer"];

console.log("unfortunately! the new dinner table want arrive so ve can invite only 2 guest");

//print message update list
GuestList.unshift("ali","usman");

console.log("update list of guest:", GuestList);

//remove guest from list

while(GuestList.length > 2){
    let removeGuest :string | undefined = GuestList.pop();
    if(removeGuest !== undefined){
console.log(`sorry, ${removeGuest}, we cant invite you`);
    }
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.

GuestList.forEach(guest =>{
    console.log(`Dear, ${guest}, you both are invited for the dinner `);
})
// remove two names from the list
GuestList.splice(0,GuestList.length)

//print update empty list

console.log("update list of guest:", GuestList);
