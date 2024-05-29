let myDate  = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear()); // 2021
console.log(myDate.toDateString()); // Sun Aug 01 2021
console.log(myDate.toLocaleString()); // 8/1/2021, 10:53:26 AM

let myTimeStamp = Date.now(); // it will give the timestamp of the current date and time in milliseconds 

console.log(Math.floor(myTimeStamp/1000)); // it will give the timestamp of the current date and time in seconds




