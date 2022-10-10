// Zad 4
// Wyobraź sobie, że poniższa lista reprezentuje nierelacyjną bazę danych użytkowników. 


const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"]
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"]
  }
]

class User{
    #id;
    username;
    email;
    #password;
    #createdAt;
    #isLoggedIn;
    constructor(id, username, email, password, createdAt, isLoggedIn){
        this.#id= id;
        this.username= username;
        this.email= email;
        this.#password= password;
        this.#createdAt= createdAt;
        this.#isLoggedIn= isLoggedIn;
    }
    
    // singIn - umożliwiać ona będzie logowanie się użytkownika na podstawie informacji zawartych w bazie (wyżej utworzonej liście users)
    singIn();
    // countLikes - metoda ta będzie przeszukiwać listę products i wyświetlać nazwy produktów, które polubił dany użytkownik (zauważ, że informacje o polubieniach przechowujemy wewnątrz pola likes z rekordu każdego produktu)
    countLikes();
    // rateProduct - która przyjmować będzie id produktu wraz z oceną, którą użytkownik chce przypisać
    rateProduct();       
}

const users = [
    new User("ab12ex", "Alex", "alex@alex.com", "123123")
    new User("fg12cy", "Asab", "asab@asab.com", "123456")
    new User("zwf8md", "Brook", "brook@brook.com", "13111")
    new User("eefamr", "Martha", "martha@martha.com", "123222")
    new User("ghderc", "Thomas", "thomas@thomas.com", "123333")
];

const User_1 = new User ("ab12ex", "Alex", "alex@alex.com", "123123");


console.log(users)

// Stwórz klasę User, która będzie zawierała takie pola i metody jak:
// #id, username, email, #password, #createdAt, #isLoggedIn
// singIn - umożliwiać ona będzie logowanie się użytkownika na podstawie informacji zawartych w bazie (wyżej utworzonej liście users)
// countLikes - metoda ta będzie przeszukiwać listę products i wyświetlać nazwy produktów, które polubił dany użytkownik (zauważ, że informacje o polubieniach przechowujemy wewnątrz pola likes z rekordu każdego produktu)
// rateProduct - która przyjmować będzie id produktu wraz z oceną, którą użytkownik chce przypisać


