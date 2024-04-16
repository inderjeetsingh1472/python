// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2");//32
// console.log(+true);
// console.log(+"");
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// console.log(2 > 1);//true
// console.log(2 >= 1);//true
// console.log(2 < 1);//false
// console.log(2 == 1);//false
// console.log(2 != 1);//true
// console.log("2" > 1);//true
// console.log("02" > 1);//true


// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true
// 
// console.log(undefined == 0);//fasle
// console.log(undefined > 0);//false
// console.log(undefined < 0);//false
// console.log(undefined<=0)//false

// === 

// console.log("2" === 2);//false


// *****************String*********************************

// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + " Value");//hitesh50 Value

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);//h
// console.log(gameName.__proto__);//{} or in brouser console this os used to peint prototypes like String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}

// console.log(gameName.charAt(2));//t used to print value of index
// console.log(gameName.indexOf('t'));//2 used ti print which index ocupy this value

// const newString = gameName.substring(0, 4)//this return 0 to 4th index value but it exclude 4 index value
// also fialed to dealed with negative inputs in substring

// console.log(newString);//hite  
// const anotherString = gameName.slice(-6, -4)
// const anotherString = gameName.slice(-13,-1)

// console.log(anotherString);//also deal with negative inputs


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))//false

let v = (gameName.split('-'));//[ 'hitesh', 'hc', 'com' ]
console.log(typeof v)