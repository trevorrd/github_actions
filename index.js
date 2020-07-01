const Calendar = require("./calendar.js");

const cal = new Calendar();
console.log(`Days are ${cal.getDays()}`);
cal.addDay("Funday", 1);

console.log(`Days are ${cal.getDays()}`);
cal.deleteDay("Funday");

console.log(`Days are ${cal.getDays()}`);

console.log(`Found: ${cal.findDay(cal.getDays())("Sunday")}`);
console.log(`Found: ${cal.findDay(cal.getDays())("Funday")}`);
