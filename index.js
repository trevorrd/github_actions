class Main {
  constructor(
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
  ) {
    this.days = days;
  }

  listDays() {
    console.log("Days are " + this.days);
    return this.days;
  }

  addDay(newDay) {
    this.days.push(newDay);
  }

  addDay(newDay, atIndex) {
    this.days.splice(atIndex, 0, newDay);
  }

  deleteDay(removedDay) {
    this.days = this.days.filter((v) => v !== removedDay);
  }

  findDay(day) {
    let foundDay;
    foundDay = this.days.filter((v) => v === day);

    return foundDay.length > 0 ? foundDay : "[No day found]";
  }
}

module.exports = {
  Main,
};

let main = new Main();
main.listDays();
main.addDay("Funday", 1);

main.listDays();
main.deleteDay("Funday");

main.listDays();

console.log(`Found: ${main.findDay("Sunday")}`);
console.log(`Found: ${main.findDay("Funday")}`);
