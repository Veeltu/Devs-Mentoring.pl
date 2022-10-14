// Zad 4
// Wyobraź sobie, że poniższa lista reprezentuje nierelacyjną bazę danych użytkowników. 

// Stwórz klasę User, która będzie zawierała takie pola i metody jak:
// #id, username, email, #password, #createdAt, #isLoggedIn
// singIn - umożliwiać ona będzie logowanie się użytkownika na podstawie informacji zawartych w bazie (wyżej utworzonej liście users)
// countLikes - metoda ta będzie przeszukiwać listę products i wyświetlać nazwy produktów, które polubił dany użytkownik (zauważ, że informacje o polubieniach przechowujemy wewnątrz pola likes z rekordu każdego produktu)
// rateProduct - która przyjmować będzie id produktu wraz z oceną, którą użytkownik chce przypisać

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
    id;
    username;
    email;
    #password;
    #createdAt;
    #isLoggedIn;
    constructor(id, username, email, password, createdAt, isLoggedIn){
        this.id= id;
        this.username= username;
        this.email= email;
        this.#password= password;
        this.#createdAt= createdAt;
        this.#isLoggedIn= isLoggedIn;
    }
    get id(){
        return this.id;
    }
    get username(){
        return this.username;
    }
    get email(){
        return this.email;
    }
    get password(){
        return this.#password;
    }
    get createdAt(){
        return this.#createdAt;
    }
    get isLoggedIn(){
        return this.#isLoggedIn;
    }
 
    static singIn(){
        if (passwords.includes(newUser.password) && (names.includes(newUser.username))){
            console.log('singIn : logging in...')
        } else {
            console.log('singIn : wrong login or password')
        }
    };

    static countLikes(){
        for (let i=0;i<products.length;i++){
            if(products[i].likes.includes(countLikesUser)){
                // console.log(products[i])
                console.log(`Product that User likes : ${products[i].name}`)
            } 
        }
    };
    // rateProduct - która przyjmować będzie id produktu wraz z oceną, którą użytkownik chce przypisać
    static rateProduct(idProcduct, rate) {   
        
    }
}

// Users base

    const users = [
    new User("ab12ex", "Alex", "alex@alex.com", "123123"),
    new User("fg12cy", "Asab", "asab@asab.com", "123456"),
    new User("zwf8md", "Brook", "brook@brook.com", "13111"),
    new User("eefamr", "Martha", "martha@martha.com", "123222"),
    new User("ghderc", "Thomas", "thomas@thomas.com", "123333"),
]

// -------------++++SING IN++++-----------------//

// 2 profiles for new User to check if method work:

// 1.invalid user
// const newUser = new User("aweda", "Anthony", "anthony@tu.io", "1234412");

// 2. valid user 
const newUser = new User("ab12ex", "Alex", "alex@alex.com", "123123")

// create array form names and passwords for login validate
const names = [];
Object.values(users).forEach(e =>
    {
        names.push(e.username)
    });
const passwords = [];
Object.values(users).forEach(e =>
    {
        passwords.push(e.password)
    })

// User.singIn();

// -------------++++COUNT LIKES++++-----------------//

// create map for username => id to find username with id
const newMapUsernameId = new Map();
Object.values(users).forEach((e) => {
    newMapUsernameId.set(e.username, e.id);
})
// f. to find username with id 
let countLikesUser = '';
function getName (username) {
    countLikesUser += newMapUsernameId.get(username) // take 'username' id
}
getName('Asab') //find what products like 'Asab'

// User.countLikes(); 

// -------------++++RATE PRODUCT++++-----------------//
// rateProduct - która przyjmować będzie id produktu wraz z oceną, którą użytkownik chce przypisać

const newMapProductsIdRate = new Map();
Object.values(products).forEach((e) => {
    newMapProductsIdRate.set(e._id, e.ratings)
})
// console.log(newMapProductsIdRate);

// soo I want add to product one rating
function add(productName, idUser, rating){
    
    for (let i=0;i<products.length;i++){
        // console.log(products[i])
        if(products[i].name.includes(productName)){
            console.log(products[i].ratings)
            // products[i].ratings.push(rating);
            // products[i].ratings.Object.
            
            products[i](ratings.userId= 'wad' )
            // how to add new obcject to ratings ?

            // products[i].Object.create(usernameId: usernameId, rate: rating)
        }


    }


    
    // // console.log(Object.values(products))
    // Object.values(products).forEach(e => {
    //     // if (e.includes(productName)){
    //         console.log(e)
        // }
    // }
    // )
}

add('TV', 4);


