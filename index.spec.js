const Calendar = require("./calendar.js");

const Days = Object.freeze({
  SUNDAY: "Sunday",
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday",
  FUNDAY: "Funday",
});

describe("Project Unit Tests", () => {
  it("Make sure 5 is really 5", () => {
    expect(5).toBe(5);
  });

  it("Make sure true is really true", () => {
    expect(true).toBe(true);
  });

  it("Should have initial set of days", () => {
    const main = new Calendar();
    let expectedDays = [
      Days.SUNDAY,
      Days.MONDAY,
      Days.TUESDAY,
      Days.WEDNESDAY,
      Days.THURSDAY,
      Days.FRIDAY,
      Days.SATURDAY,
    ];

    expect(main.getDays()).toStrictEqual(expectedDays);
  });

  it("Should add a new day", () => {
    const main = new Calendar();
    main.addDay(Days.FUNDAY, 7);

    let expectedDays = [
      Days.SUNDAY,
      Days.MONDAY,
      Days.TUESDAY,
      Days.WEDNESDAY,
      Days.THURSDAY,
      Days.FRIDAY,
      Days.SATURDAY,
      Days.FUNDAY,
    ];

    expect(main.getDays()).toEqual(expectedDays);
  });

  it("Should remove a day", () => {
    const main = new Calendar();
    main.deleteDay(Days.TUESDAY);

    let expectedDays = [
      Days.SUNDAY,
      Days.MONDAY,
      Days.WEDNESDAY,
      Days.THURSDAY,
      Days.FRIDAY,
      Days.SATURDAY,
    ];

    expect(main.getDays()).toStrictEqual(expectedDays);
  });

  it("Should find a day", () => {
    const main = new Calendar();
    const foundDay = main.findDay(main.getDays())(Days.TUESDAY);

    expect(foundDay).toBe(Days.TUESDAY);
  });

  it("Should not find Funday", () => {
    const main = new Calendar();
    const notFoundDay = main.findDay(main.getDays())(Days.FUNDAY);

    expect(notFoundDay).toBe("[No day found]");
  });

  it("Should find Funday after it's added", () => {
    const main = new Calendar();
    main.addDay(Days.FUNDAY, 7);
    const FoundDay = main.findDay(main.getDays())(Days.FUNDAY);

    expect(FoundDay).toBe(Days.FUNDAY);
  });
});
