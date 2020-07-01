class Calendar {
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

  getDays = () => this.days;

  addDay = (newDay) => this.days.push(newDay);

  addDay = (newDay, atIndex) => this.days.splice(atIndex, 0, newDay);

  deleteDay = (removedDay) =>
    (this.days = this.days.filter((v) => v !== removedDay));

  findDay = (days) => (day) => (days.includes(day) ? day : "[No day found]");
}

module.exports = Calendar;
