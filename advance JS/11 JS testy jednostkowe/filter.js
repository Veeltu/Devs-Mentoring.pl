const myArray = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];

export const filterMethod = myArray.filter((e) => e == 4);

export const filterMethodMyFor = (e) => {
  let a = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] == e) {
      a.push(e);
    }
  }
  return a;
};

console.log(filterMethod);
console.log(filterMethodMyFor(4));
