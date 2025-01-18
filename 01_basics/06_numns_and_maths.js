const score = 400

//explicitely define kare iska datatype
 const balance = new Number(100)
 //console.log(score);
 
 //console.log(balance); //[Number: 100] is tarah se porint hoga
  //#Note: yaha hai dono number hi ba sfark itna hai ki pehle waale me automatically decide kar liya ki wo number hai and doosre waale me balance ek object bana hai Number type ka ya keh sakte hai ki Number class ka
  //console.log(balance.toString());
 //console.log(typeof balance.toString());//ab yaha pe string ke saare propeerties lag sakte hai
  //console.log(balance.toFixed(2));//to give the precision value


  const otherNum=123.89966

  //console.log(typeof otherNum.toPrecision(3));//returns a string
  
 // console.log( otherNum.toPrecision(3));//ye batata hai ki hume kitni value pe precision karna hai, priority decimal ke pehle mil rahi hai

  const hundreds = 1000000
  //console.log(hundreds.toLocaleString('en-IN'));
  
//console.log(Number.MAX_VALUE);

//***************************MATHS***************** */

//console.log(Math); //its an object having so much properties

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));

// console.log(Math.floor(4.3));
// console.log(Math.sqrt(4.3));
// console.log(Math.min(4,5,6,7,8,9));

//#important
// console.log((Math.random()*10)+1)  //always comes in between 0 to 1
// console.log((Math.random()*10)+1)

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);
