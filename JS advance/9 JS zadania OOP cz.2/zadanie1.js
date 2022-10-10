// Zad 1.
// Stwórz klasę, która będzie pełniła rolę wrappera (storage-a) konfiguracji połączeniowej z API. Klasa ta ma się nazywać MyRequest oraz przechowywać takie atrybuty jak: 
// URL address
// Method (np. “GET”)
// API Token
// Obiekt tej klasy ma posiadać gettery oraz settery do odpowiednich pól. Zadbaj o poprawną enkapsulację. 

// // Następnie stwórz klasę Sender, która będzie zawierała takie metody statyczne jak:
// // sendReq(request, destination), gdzie request to odpowiednio skonfigurowany obiekt wyżej utworzonej klasy; destination to obiekt niżej utworzonej klasy, do której będziemy kierowali reques

// Następnie stwórz klasę ApiService, która będzie symulowała działanie API serwisu. Klasa ta ma zawierać:
// statyczne listy:

// countries = [“Poland”, “Japan”, “Madagascar”, “Mali”, “Nepal”]
// continents = [“European”, “Asia”, “Australia”, “Africa”, “Asia”]

// statyczne pola:
// key (pole to będzie weryfikowane z polem API Token z request)

// metody:
//  getCountries, getContinents z parametrem request

// Metody te będą odbierały wysyłany przez Sender obiekt typu Request, wyciągały z niego API Token, porównywały z polem statycznym - key. 
// Jeżeli wartości te będą identyczne, to sprawdzamy również, czy methodType również pobrany z request, ma wartość równą GET. 
// Jeżeli wszystkie te warunki zostaną spełnione, to wówczas metody mają zwracać odpowiednie listy (countries/continents).
//  W przeciwnym razie zwracana lista ma być pusta.

class MyRequest{
    URLaddress;
    Method;
    APIToken;
    constructor(URLaddress,Method,APIToken){
        this.URLaddress = URLaddress;
        this.Method = Method;
        this.APIToken = APIToken;
    }
    get URLaddress(){
        return this.URLaddress;
    }
    get Method(){
        return this.Method;
    }
    get APIToken(){
        return this.APIToken;
    }

}


class Sender{
    constructor(){
    }
    
    static sendReq(request, destination){
        console.log(request)
        console.log(destination)
        // console.log('hi sendReq')
        console.log('-------------------')
    }
}

class ApiService{
    static countries = ['Poland', 'Japan', 'Madagascar', 'Mali', 'Nepal'];
    static continents = ['European', 'Asia', 'Australia', 'Africa', 'Asia'];
    static key = "token";

// constructor(countries, continents, key){
//     this.countries= countries;
//     this.continents= continents;
//     this.key= key;
// }
    getCountries(request){
        if ((request.APIToken === key) && (request.Method === 'get')){
            console.log(countries)
            return countries;
        }
        else {
            console.log('wrong')
            return [];
        }
    };
    getContinents(request){
        if ((request.APIToken === key) && (request.Method === 'get')){
            console.log(continents)
            return continents;

        }
        else {
            console.log('wrong')
            return [];
        }
    };
}
//get, put ,post, delete, patch - REST API method

const request = new MyRequest("www.kulaWpłot.com", "get", "token");

const apiService = new ApiService();

Sender.sendReq(request, apiService);
// ApiService.getContinents(request);
// Sender.sendReq(request, ApiService);

// console.log(apiService)
// console.log(ApiService)