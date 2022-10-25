/** 
Challenge 2
Mając do dyspozycji poniższą listę:
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '10' },
]
Oblicz sumę cen produktów, korzystając tylko i wyłącznie z funkcji .reduce(). Wykonaj tę samą operację, wykorzystując forEach
Znajdź nazwy produktów, których ceny podane są w nieliczbowym formacie. 
*/

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '10' },
]

const sumPriceReduce = (array) => {
  const price = Object.values(array).map((e) => {return Math.floor(e.price)})
  const sum = price.reduce((acc, cur) => acc + cur);
  return sum;
}
console.log(sumPriceReduce(products));

const sumPriceForEach = (array) => {
  // create array for "price"
  const priceArray = [];
  Object.values(array).forEach((e) => { 
    const price = Math.floor(e.price);
    priceArray.push(price)
  })
  // summary of array elements using forEach
  let sum = 0;
  priceArray.forEach((e) => {
    sum += e;
  });
  return sum;
}
console.log(sumPriceForEach(products))