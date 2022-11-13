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
  }

  get income() {
    return this.incomes;
  }

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
Adam.addIncome("2020-11-05", 213001010);
Adam.addExpense("2020-11-10", 18900);
Adam.addExpense("2020-11-11", 18901);
Adam.addExpense("2020-11-12", 18902);
Adam.addExpense("2020-11-13", 18903);
console.log("ile zarobił Adam", Adam.countIncomes());
console.log("balans", Adam.accountBalance());
console.log(Adam);
