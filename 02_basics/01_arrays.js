const myArr=[0,1,2,3,4,5]//resizable hote hai and koi bhi type ka value daal sakte hai
const myHeroes=["shaktimaan","naagraaj"]
const myArr2=new Array(1,2,3,4)
//console.log(myArr[1]);//arrays same reference share karte hai(shallow copy)

//console.log(myHeroes[1]);

//NOTE: arrays ki bhi p[roperties hoti hai and iske prototypes bhi hote hai]

//array methods
// myArr.push(6)
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);//ye array ke start me add hua hai and saara element shift ho jaayega
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));//boolean
// console.log(myArr.indexOf(4));

const newArr=myArr.join() //converts the array to string
// console.log(myArr);
// console.log(typeof newArr);

//slice and splice
console.log("A",myArr);

const myn1=myArr.slice(1,3) //3 exclusive
console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);

//NOTE:slice karne se 1.array change nahi hota hai 2. jo range diya jaata hai usme last waala index included nahi hota hai
//splice: 1. splice ke andar jo index ka range diya jaata hai wo dono side se inclusive hota hai 2.Original array me se wo saare index ke elements gayab kar deta hai jo splice me diya gaya tha




