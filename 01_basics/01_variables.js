//investigation
//declaring constants
const accountId = 14453
let accountEmail="harsh@213"
var accountPassword="12345"
accountCity = "Jaipur"

//const,let, var these all are the keywords and they are assigned in the memory
//const=cant be changed, always remains same
//accountId=2

//console.log(accountId); //will show error as constant is not assigned
console.log(accountId);
accountEmail="hc@hc.com"
accountPassword="222161"
accountCity="delhi"
let accountState
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//difference between let and var and how accountCity got printed

//constant ka ek hi tareeka hai

//variables ka 2 tareeka hai let and var
//we dont use var as it initially js doesnt know about scope
/*
prefer not to use var because of issue in block scope and functional scope
*/

// accountCity ko declare nahi kiya but fir bhi memory assign ho gaya 
//similarly if a variable is declared only but not initialized then uske jagah pe undefined print ho jaata hai
