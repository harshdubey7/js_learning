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

//********************************************** */
//Memory in javascript


//two types of memory
//1.stack 2.heap
//primitive datatype=>stack ,yaha variable ka ek copy milta hai
//non primitive =>heap , yaha reference milta hai that is jo bhi change karenge original ke andar change ho jaayega


//examples

let name = "harsh"
let anotherName = name   //since yaha pe anotherName ke andar name ko liya tha hence jo bhi content name ka hoga wo anotherName ko mil jaayega
                            //but name ke value ka ek copy mila hai tum anotherName me kuchh bhi change karte raho name ko kuchh nahi hone waala
anotherName="dubey"
console.log(anotherName);
console.log(name);

let userOne = {
    email:"user@gmail.com",
    upi:"user@oksbi"
}

let userTwo=userOne;    //now yaha userTwo ko userOne ka reference hi mil gaya i.e jis content ko userOne point kar raha hai usi ko UserTwo bhi kar raha hai hence agar userTwo koi change kiya content me to wo userOne ke bhi copntent me ho jaayega
userTwo.email="harsh@gmail"
console.log(userOne.email);
console.log(userTwo.email);


