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



 async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }


//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();
 
