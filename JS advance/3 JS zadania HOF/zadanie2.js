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

  const obj =  { product: 'banana', price: 3 }
  Object.values(obj) // => ['banana' , 3]

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '10' },
]

const sumPriceReduce = (array) => {
  const price = array.map(e =>  (Math.floor(e.price)))
  const sum = price.reduce((acc, cur) => acc + cur, 0);
  return sum;
}

// prince.reduce((acc, cur) => {
//     if(cur >= 0){
//       return {...acc, positive: acc.positive+1}
//     } else{
//       return {...acc, negative: acc.negative+1}
//     }
// }, {positive:0, negative:0})

/*
tab = [1,2,3,4,5]
acc = 0+1 =>11 | 11 + 2=>13 |

*/

console.log(sumPriceReduce(products));

const sumPriceForEach = (array) => {
  // create array for "price"
  const priceArray = [];
  array.forEach((e) => { 
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