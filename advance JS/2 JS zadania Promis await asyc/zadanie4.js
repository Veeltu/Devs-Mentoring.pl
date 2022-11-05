
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

// console.log(api)

generateUrl = number => (`https://fakerapi.it/api/v1/persons?_quantity=${number}`);

let api = generateUrl(10)
console.log(api)

const dataFromApi = [];

fetch(api)
    .then(res => res.json())
    .then(json => json.data.forEach(e => {
        const namePhoto = {name: e.firstname, lastname: e.lastname, image: e.image };
        console.log(namePhoto)
        dataFromApi.push(namePhoto)
}))
console.log(dataFromApi)



// fetch(api)
// .then(res => res.json())
// .then(data => Object(data).forEach(e => {
//     console.log(e)
// }))

