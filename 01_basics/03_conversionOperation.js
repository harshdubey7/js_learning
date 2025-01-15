//very important topic
let score = undefined

// console.log(typeof score)
// console.log(typeof(score)); //ye karne ke baad dono ke liye number print hoga 

//now convert it to strings and check

//now conversion of this string to number
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);     //here it has printed 33 but instead of 33 if you would have taken string as 33abc then it would have printed NaN(Not a number)

// console.log(valueInNumber);

//now score = null kar ke dekho

//console.log(typeof score);  //iska type object aa raha hai and when converted to number iska value 0 print ho raha hai

//check for score = undefined

//hence overall notes
//"33"=>33
//"33abc"=>NaN
//null=>0
//undefined=>undefined
//true=>1; false=>0

let isLoggedIn="harsh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //give true when 1 false when 0,empty string ke liye false
                                //with any otjher string gives true
 
//conversion to string
let someNumber=5
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)
                                