// Zad 8.
// Stwórz klasę Order, która będzie reprezentowała 
// zamówienie ze sklepu internetowego. 
// Klasa ta ma zawierać takie pola jak: 
// id (będący kolejnymi liczbami całkowitymi), 
// price, name. Utwórz mapę, do której będziesz dynamicznie
// dodawał kolejne zamówienia (w sumie 5). 
// Kluczami w takiej mapie mają być wartości 
// odpowiadające id-kom z każdego z zamówień.

// Podpowiedź: Klasa Order i Mapa to osobne “byty”.
// Nie należy tworzyć mapy w klasie.
// Mapa przechowuje obiekty stworzone przez konstruktor 
// klasy Order.

const OrdersMap = new Map();

class Order {
    id;
    price;
    name;
    constructor(id, price, name, OrdersMap){
        this.id = id;
        id=5
        OrdersMap = []
        this.price = price;
        this.name = name;
        OrdersMap.set(id, name)
    }
}
let myId = 6
const orderOne = new Order (myId, '200', 'shoes', OrdersMap) ;
console.log(myId) // przekazywane jako kopia
console.log(OrdersMap) // przekazywane jako referencja
const orderTwo = new Order ('2', '320', 'hat', OrdersMap);
const orderTree = new Order ('3', '400', 'bighat', OrdersMap);
const orderFour = new Order ('4', '500', 't-shirt', OrdersMap);
const orderFive = new Order ('5', '100', 'pants', OrdersMap);

const myArr = [1,2,3,4,5,6]
const copy = [...myArr]
copy.push(10)
OrdersMap.set()
console.log(OrdersMap);





