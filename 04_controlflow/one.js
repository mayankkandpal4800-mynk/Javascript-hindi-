// if 
/*
const isUserloggedIn = true;
if(isUserloggedIn){
    console.log("User is logged in");
}

if ( 2 == "2") {  // string , number datatype
    console.log("executed");
}
    */
// Comparison operators: <, >, <=, >=, ==, ===, !=, !== (!= is not equal to)

const isUserloggedIn = true
const temperature = 30
if( temperature < 50 ){
    console.log("less than 50");
}else {
  console.log("temperature is greater than 50");
}


// if(isUserloggedIn){
//     console.log("User is logged in");
// }
/*
const score = 200

if(score > 100) {
  const power = "fly"
   console.log(`Userpower: ${power}`);
}
*/
// console.log(`Userpower: ${power}`); // when we put console outside the block it will give error because power is block scope variable and we cannot access it outside the block. [while in var we can access it outside the block because var is function scope variable.]


// ++++++++++++++SHORT HAND NOTATION++++++++++++++ 
/*
const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2"); //don't written such type of code.. 
if (balance < 500) {
    console.log("less than ");
} else if (balance < 750) {
    console.log("less than 750"); 
} else if ( balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==3) { // for buy more than two && 
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}