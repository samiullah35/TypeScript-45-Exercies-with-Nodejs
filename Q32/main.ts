/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
 has a unique username.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

// • Make a list of five or more usernames called current_users.

let current_users = ["Sami","ali"," khan","Umer","Musa"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also
// in the current_users list.

let new_users = ["Asad","Owais","Riaz","Kashan","Ali"];

// • Loop through the new_users list to see if each new username has already been used
new_users.forEach(new_one_username => {
  let our_condition= current_users.some(current_one_username => current_one_username.toLowerCase() === new_one_username.toLowerCase())
if(our_condition){
 console.log(`Sorry ${new_one_username} is already used`)
}else{
    console.log(`This username ${new_one_username} is available`)
}
  })
