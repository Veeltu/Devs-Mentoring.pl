
// Zad 3
// Operacje na frontendzie to nie tylko dbanie o odpowiedni wygląd strony, ale też często walidacja danych przed przekazaniem ich na backend.

// Stwórz klasę User, która będzie zawierała takie atrybuty jak (pamiętaj o enkapsulacji):
// name
// surname
// email
// gender
// password
// date_joined (datę twórz z wbudowanej biblioteki Date)

// Podczas ustawiania wartości tych pól, ma za każdym razem następować walidacja, czy zmienne te są poprawne. To, jakie warunki ma walidować system, zależy od kreatywności programisty. Przykładem może być sprawdzenia, czy hasło zawiera co najmniej 8 znaków (w tym co najmniej jedną wielką literę, jedną cyfrę i jeden znak specjalny). Do walidacji możesz wykorzystać ReGexa. 

class User{
    name;
    surname;
    email;
    gender;
    password;
    date_joined;
    constructor(name,surname,email,gender,password,date_joined){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.date_joined = date_joined;
    }
    get gender(){
        return this.gender;
    }
}
//regex101.com
// two ways of validation: [?]
//  1. if you hit one regex.test => Invalid
//  2. if you expression don't mach regex.test


// when hit number is INVALID
const regexName = /[0-9!"`'#%&.,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|\s]+/g;
// regular expression that accepts unicode:
const regexEmail =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexDate_joined = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

class Validation{
    static nameValidation(name,){
        if(regexName.test(name)){
            console.log('Invalid name given')
        } else{
            console.log('Valid name given')
        }
    }

    static surnameValidation(surname,){
        if(regexName.test(surname)){
            console.log('Invalid surname given')
        } else{
            console.log('Valid surname given')
        }
    }

    static emailValidation(email){
        if(regexEmail.test(email)){
            console.log('Valid email given')
        } else {
            console.log('Invalid email given')
        }
    }

    static genderValidation(gender){
        if(gender=='male'||gender=='female'){
            console.log('gender is valid')
        } else {
            console.log('gender is Invalid')
        }
    }
    // pass validation - must be one special sign, number, and not too short

    static passwordValidation(password){
        if(regexPassword.test(password)){
            console.log('password is valid')
        } else {
            console.log('password is Invalid')
        } 
    }

    static date_joinedValidation(date_joined){
        if(regexDate_joined.test(date_joined)){
            console.log('date is valid')
        } else {
            console.log('date is invalid')
        }
    }
}



const User_1 = new User('Paweł', 'Andrys', 'paweland@mgmail.com','male','ddaawdawdw2A!','12-2-2020');
const User_2 = new User('Robert123 12', 'Ko#4$łodziej', 'pa@weland@wp.pl','male','ddwd2A!','02-Jan01-2020');

function fullValidation(e){
Validation.nameValidation(e.name);
Validation.surnameValidation(e.surname);
Validation.emailValidation(e.email);
Validation.genderValidation(e.gender);
Validation.passwordValidation(e.password);
Validation.date_joinedValidation(e.date_joined);
console.log("---------------------------")
}

fullValidation(User_1)

// fullValidation(User_2)

