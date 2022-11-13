// Zad 1
// Stwórz klasę UserAccount.
// Zawrzyj w niej takie pola jak: name, surname, incomes (w postaci mapy składającej się z daty wykonania transakcji oraz wysokości kwoty), expenses (struktura taka jak przy incomes).
// Dodatkowo dodaj metody takie jak:
// countIncomes,
// countExpenses (które będą obliczały całkowite przychody/wydatki na przestrzeni miesiąców),
// getAccountInfo (zwracająca imię i nazwisko właściciela),
// addExpense,
// addIncome
// oraz accountBalance (obliczająca stan konta na podstawie przychodów/wydatków).

// Informacje takie jak przychody/wydatki, imię i nazwisko konta zapisuj w formacie JSON w localStorage.

class UserAccount {
  name;
  surname;
  incomes;
  expenses;
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.incomes = new Map();
    this.expenses = new Map();

    const toLocalStorage = {
      name: this.name,
      surname: this.surname,
      // they are empty in localStorage, why ?
      incomes: JSON.stringify([...this.incomes]),
      expenses: this.expenses,
    };

    window.localStorage.setItem(this.name, JSON.stringify(toLocalStorage));
  }

  get income() {
    return this.incomes;
  }

  // console() {
  //   console.log(JSON.stringify([...this.incomes]));
  // }

  countIncomes() {
    let sum = 0;
    this.incomes.forEach((value) => {
      sum += value;
    });
    return sum;
  }

  countExpenses() {
    let sum = 0;
    this.expenses.forEach((value) => {
      sum += value;
    });
    return sum;
  }

  getAccountInfo() {
    return this.name + " " + this.surname;
  }

  addExpense(date, expense) {
    this.expenses.set(date, expense);
  }

  addIncome(date, income) {
    this.incomes.set(date, income);
  }

  accountBalance() {
    return this.countIncomes() - this.countExpenses();
  }
}

const Adam = new UserAccount("Adam", "Andrys");

Adam.addIncome("2020-11-05", 2130);
Adam.addIncome("2020-11-04", 232);
Adam.addIncome("2020-12-07", 254);

Adam.addExpense("2020-11-10", 182);
Adam.addExpense("2020-11-11", 189);
Adam.addExpense("2020-11-12", 123);
Adam.addExpense("2020-11-13", 154);

// Adam.console();

// console.log("ile zarobił Adam", Adam.countIncomes());
// console.log("balans", Adam.accountBalance());
// console.log(Adam);
