
// Zad 2.
// Zmodyfikuj poniższy kod:

// function job() {
//     return 'hello world';
// }


// Aby spełniał następujące założenia:
// funkcja job musi zwracać obiekt Promise
// Promise ma się po wywołaniu wykonywać 2 sekundy i dostarczać napis ‘hello world’

const job = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Hello world")
        }, 2000)
    })
}

new Promise(function job(resolve, reject){
    setTimeout(() => resolve(1),2000)
})    
    .then(function job(){
        console.log('Hello world')
    })


    
