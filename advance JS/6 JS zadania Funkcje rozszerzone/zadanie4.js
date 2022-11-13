// Zad 4.
// Stwórz funkcję, która będzie odliczała, ile dni zostało do końca bieżącego roku. Skrypt ma automatycznie i na bieżąco wyświetlać komunikat:
// <Do końca roku zostało X dni, Y godzin>

const howMuchDaysLeftInYear = (e) => {
  // how much days are in current year

  const daysInYear = (year) => {
    return isLeapYear(year) ? 366 : 365;
  };
  const isLeapYear = (year) => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  };

  // today date

  const todayDate = new Date();
  const fullYear = todayDate.getFullYear();

  // how much days in current year

  const daysInCurrentYear = daysInYear(fullYear);

  // count days in year, and show witch day we at

  const start = new Date(todayDate.getFullYear(), 0, 0);
  const differ = todayDate - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(differ / oneDay);
  // console.log(day)

  // how much days left in current year

  const howMuchDaysLeft = daysInCurrentYear - day;
  console.log(howMuchDaysLeft);

  // return
  // howMuchDaysLeft += 1
  return howMuchDaysLeft;
};

// console.log(howMuchDaysLeftInYear())

const span = document.querySelector("span");

const interval = setInterval(function () {
  span.innerHTML = howMuchDaysLeftInYear();
}, 1000);

const timeout = setTimeout(function () {
  clearInterval(interval);
  return console.log("stop interval");
}, 5000);
