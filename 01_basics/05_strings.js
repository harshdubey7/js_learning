const name="harsh"
const repoCount=50
//console.log(name+repoCount+" value");   //this kind of syntax is not good
                                        //instead use backtext
//What is backtext
//string interpolation is used

//console.log(`hello my name is ${name} and my repo count is${repoCount}`);
//yaha pe place holders banate hai aur jo bhi variavbles hai unko directly waha pe inject kar sakte hai

//One more method of declaring strings

const gameName= new String('pub-G')//here string class is used and its gameName is its object

//isko jab console me jaake likhenge then ek key value pair milta hai strings ka like index and values
//example
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());  //ye function hai to yaha () bracket lagana jaroori tha
// console.log(gameName.charAt(0));

const newString= gameName.substring(0,4) //ye last waale ke liye exclusive hai i.e 0to3 hi aayega


//console.log(newString);

const anotherString= gameName.slice(-4,0) //negative dene se ye peechhe se start karta hai
//console.log(anotherString);
const newStringOne = "       ramesh     "
console.log(newStringOne.trim());//works on whitespace characters

const url="https://vigilant-engine-4j746xrjg9p625jpx.github.dev/"
console.log(url.replace('https','hhhh'));
console.log(url.includes('hhhh'));
const splitUnderr="once upon a time in mumbaai dobara"
console.log(splitUnderr.split(' '));
//go through all the methods of strings


