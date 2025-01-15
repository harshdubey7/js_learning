//basically there are two types of datatypes in official document 1.primitive 2. non primitive
//primitive and non primitive ke beech ka jo difference aata hai wo us basis pe aata hai ki wo memory me kis tarah se store hue hai and unko kis tarah se access kiya jaa sakta hai


//#primitive =>7 categories: primitive datatypes are call by value i.e whenever they are passed from one place to another then original memory me jo hai wo data ya us memory ka address nahi diya jaata hai uska ek copy diya jaata hai and jo bhi hum changes karte hai wo us copy me hota hai na ki original data me

/*
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

//js is a dynamically typed i.e we don't need to specify the datatype of variable while declaring it
const score = 100
const scoreValue = 100.3
const isLoggedIn= true
const outsideTemp=null
let userEmail

//declaration
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);


//Reference type(non primitive)
/*
Array,Objects,Functions
*/
 
//brief about arrays

const heros = ["shaktiman","naagraj","doga"];

//brief about objects

let myObj={
    name:"harsh",
    age:22,             //this is the way how objects are declared inside curly braces
}                       //object ke andar datatype kuchh bhi ho sakta hai

//brief about functions as variables

const myFunction=function(){
    console.log("helloWorld");
    
}

console.log(typeof myFunction);
