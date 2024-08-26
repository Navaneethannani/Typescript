"use strict";
let discount;
let purchasedItems = 13;
if (purchasedItems > 0 && purchasedItems <= 5) {
    discount = 5;
}
else if (purchasedItems > 5 && purchasedItems <= 10) {
    discount = 10;
}
else if (purchasedItems > 10 && purchasedItems <= 15) {
    discount = 15;
}
else {
    discount = 0;
}
console.log(`You got ${discount}% discount`);
// switch
function getDayName(day) {
    let dayName;
    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day";
    }
    return dayName;
}
let today = new Date().getDay();
console.log(getDayName(today));
//for loop
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const daysInMonth = getDaysInMonth(currentYear, currentMonth);
console.log(`Number of days in ${currentMonth + 1}/${currentYear}: ${daysInMonth}`);
console.log("Days in the current month:");
for (let day = 1; day <= daysInMonth; day++) {
    console.log(day);
}
