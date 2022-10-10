
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
    #URLaddress;
    #Method;
    #APIToken;
    constructor(URLaddress,Method,APIToken){
        this.#URLaddress = URLaddress;
        this.#Method = Method;
        this.#APIToken = APIToken;
    }
    get URLaddress(){
        return this.#URLaddress;
    }
    get Method(){
        return this.#Method;
    }
    get APIToken(){
        return this.#APIToken;
    }

    // set URLaddress(URLaddress){
    //     this.URLaddress = URLaddress;
    // }

    // set Method(Method){
    //     this.Method = Method;
    // }

    // set APIToken(APIToken){
    //     this.APIToken = APIToken;
    // }
    
}


class Sender{
    constructor(){
    }
    
    static sendReq(request, destination){
        if(request.URLaddress === '/countries'){
            return destination.getCountries(request);
        }else if (request.URLaddress === '/continents'){
            return destination.getContinents(request);
        }
    }
}

class ApiService{
    static countries = ['Poland', 'Japan', 'Madagascar', 'Mali', 'Nepal'];
    static continents = ['European', 'Asia', 'Australia', 'Africa', 'Asia'];
    static key = "token";

    getCountries(request){
        if ((request.APIToken === ApiService.key) && (request.Method === 'get')){
            return ApiService.countries;
        }
        else {
            return [];
        }
    };
    getContinents(request){
        if ((request.APIToken === ApiService.key) && (request.Method === 'get')){
            return ApiService.continents;
        }
        else {
            return [];
        }
    };
}
//get, put ,post, delete, patch - REST API method

const request = new MyRequest("/continents", "get","token");
const request2 = new MyRequest("/countries", "get","token");
const request3 = new MyRequest("/countries", "post","token");

const apiService = new ApiService();

console.log(Sender.sendReq(request, apiService));
console.log(Sender.sendReq(request2, apiService));
console.log(Sender.sendReq(request3, apiService));