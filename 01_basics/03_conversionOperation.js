//very important topic
//let score = undefined

// console.log(typeof score)
// console.log(typeof(score)); //ye karne ke baad dono ke liye number print hoga 

//now convert it to strings and check

//now conversion of this string to number
//let valueInNumber = Number(score)
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

//let isLoggedIn="harsh"

//let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); //give true when 1 false when 0,empty string ke liye false
                                //with any otjher string gives true
 
//conversion to string
// let someNumber=5
// let stringNumber=String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber)

//OPERATIONS

let value=3
let negValue=-value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);  //this is 2 to the power 2
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2= " world"
let str3=str1+str2
console.log(str3);

//some complex situations
// console.log("1" + 2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");   //#note: agar string pehle hai to sabko string ki tarah treat kiya jaayega ang agar string last me hai to pehle jo operation hai wo ho jayega and then string waala aayega

//some more tricky conversions

console.log(+true);  //true+ ke liye error aa jaayega

let num1,num2,num3

num1=num2=num3=2+2 //dont prefer writing code like this

let gameCounter =100
console.log(gameCounter++);
console.log(++gameCounter);













