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
    constructor(id, price, name){
        this.id = id;
        this.price = price;
        this.name = name;
        OrdersMap.set(id, name)
    }
}
const orderOne = new Order ('1', '200', 'shoes') ;
const orderTwo = new Order ('2', '320', 'hat');
const orderTree = new Order ('3', '400', 'bighat');
const orderFour = new Order ('4', '500', 't-shirt');
const orderFive = new Order ('5', '100', 'pants');

console.log(OrdersMap);








