// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user after they 
//  log in to a website. Loop through the array, and print a greeting to each user:


let userName =["Sami","Ali","Khan","Musa","Umer"]

userName.forEach(oneUser =>{
    if(oneUser === "Musa"){
        console.log(`Hello ${ oneUser }, would you like to see status report?`)
    }
    else{
        console.log(`Hello ${ oneUser }, thanks you for logging in again`)
    }
})