
// Zad 4.
// Korzystając z API: https://fakerapi.it/api/v1/persons?_quantity=<number_of_people>, 
// stwórz skrypt, który:
//  będzie pobierał listę 10 osób
//  wyświetlał na stronie informacje o każdej z nich. 
 
//  Informacje te mają być w postaci, np.

// Jan Kowalski
// <zdjęcie Jana Kowalskiego pobrane z API>

// Adam Nowak
// <zdjęcie Adama Nowaka pobrane z API>

// etc.

// Podpowiedź:
// Aby móc dynamicznie modyfikować zawartość strony, wykorzystaj operacje na DOM.

// const newApi = ('https://fakerapi.it/api/v1/persons?_quantity=<number_of_people>'); //! that API don't work ? => answer =>you need set number of ppl

//* -1- set number of ppl in API line

let api = 'https://fakerapi.it/api/v1/persons?_quantity=<number_of_people>'

api = api.replace("<number_of_people", 10)
// console.log(api)

const dataFromApi = [];

fetch(api)
.then(res => res.json())
.then(data => Object.values(data).forEach(e => {
    console.log(e)
    Object.values(e).forEach(a => {
        // console.log(a.firstname)
        const namePhoto = {name: a.firstname, lastname: a.lastname, image: a.image }
        dataFromApi.push(namePhoto)
    })
}))
console.log(dataFromApi)
// setNumberOfPeopleAPI = (number) => {
//         API.replace("<number_of_people", number)
//     return;
// };
// console.log(setNumberOfPeopleAPI(10))
//? how make function of this ? UP
