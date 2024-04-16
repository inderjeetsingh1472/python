// Dates

// let myDate = new Date()
// console.log(myDate)// 2024-04-14T03:16:15.790Z
// console.log(myDate.toString());// Sun Apr 14 2024 08:46:15 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//  Sun Apr 14 2024
// console.log(myDate.toLocaleString());// 4/14/2024, 8:47:57 AM
// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023, 0, 23)// 1/23/2023, 12:00:00 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)// 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14")//1/14/2023, 5:30:00 AM
// let myCreatedDate = new Date("01-14-2023")// 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
    // weekday: "long",
    // 
// })

//*************************splice and slice**********************************************/
let inder=[1,2,3,4,5,6,7,8,9]
console.log(inder.splice(1,3));//it iclude 3 index
// console.log(inder.slice(1,3));//it cannot include 3 index
