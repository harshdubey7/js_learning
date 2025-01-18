//1 january 1970 se hi dates start hua hai
//Math ki tarah hio ek 'Temporal'object banaya jaayega taaki iske through date and time se relatred jitni bhi cheeje hai unka alag alag function banake unko access kar liya jaaye access kar liya jaaye
//***********DATES*********** */

let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//to declare a specific date

//let myCreatedDate = new Date(2025,0,23,5,3)
//console.log(myCreatedDate.toDateString());//month is created with 0
//console.log(myCreatedDate.toLocaleString());

//One more format to take input of the date


let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

//time stamps

let mytimeStamp= Date.now()
log