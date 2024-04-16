const score = 400
// console.log(score);

const balance = new Number(100.87543)
// console.log(balance);

// console.log(balance.toString().length);//9
// console.log(balance.toFixed(2));//return only 2 number after point

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//this count total number
// console.log(otherNumber.toFixed(1))//this is still count after point

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//used to eliminatesign 
console.log(Math.round(4.6));// used to eliminate decimal number ,output:5
console.log(Math.ceil(4.2));// also used to eliminate secimal nuber , but still not accurate , output:5 always increase number by one if thre decimal place is present
console.log(Math.floor(4.9));//also eliminate decimal point , but still number before deci,al point not change 
console.log(Math.min(4, 3, 6, 8));//used to find min from input
console.log(Math.max(4, 3, 6, 8));//used to find max from input

console.log(Math.random());//used to create random number from [0-1]
console.log((Math.random()*10) + 1);//output from [1-11]
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)