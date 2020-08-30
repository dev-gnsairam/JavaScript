let val;

const currDate = new Date();

// console.log(currDate);
// console.log(typeof currDate);

val = new Date("8-8-1997 10:01:00 PM");
// val = new Date("OCT-28-2000");


// val = currDate.getMonth();
// val = currDate.getDay();
// val = currDate.getDate();
// val = currDate.getFullYear();
// val = currDate.getYear();
// val = currDate.getHours();
// val = currDate.getMinutes();
// val = currDate.getSeconds();
// val = currDate.getMilliseconds();
// val = currDate.getTime();
// val = currDate.getTime();


val.setMonth(12);
val.setDate(12);
val.setFullYear(2002);
val.setHours(11);
val.setMinutes(11);
val.setSeconds(11);
console.log(val);