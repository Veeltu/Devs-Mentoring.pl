// Zad 3.
// Mając do dyspozycji poniższy kod (
// Kod wykorzystuje Promise, aby handlować result. W rezultacie zwracana jest informacja z bazy (info.name) lub wyświetlany błąd i rzucany wyjątek. 

// function job(result, database, errorManager) {
//     return result

//     .then(function(id) {
//         return database.get(id);
//     })

//     .then(function(info) {
//         return info.name;
//     })

//     .catch(function(error) {
//         errorManager.notify(error);
//         throw error;
//     });
// }

//? NOT SURE...

//* first way
async function job(result, database, errorManager) {
    try {
        let getId = (id) => { return database.get(id)}
        let getName = (info) => { return info.name};
    }
    catch(error) {
        let err = (error) => { errorManager.notify(error); throw error}
    }
}
//* second way
fetch(database)
 .then(database => {return database.get(id)})
 .then(info => {return info.name})
 .catch(error => {errorManager.notify(error); throw error;});


 
