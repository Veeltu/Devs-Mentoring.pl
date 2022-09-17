// zadanie 7

// Zad. 7
// Stwórz skrypt, który stworzy 100-znakowy łańcuch losowo wygenerowanych znaków.

// Podpowiedź:
// Aby generować losowy znak, użyj kodów ASCII oraz metody losującej wartości, którą poznałeś w trakcie wykonywania zadań z instrukcji warunkowych.

//-----------------------------------------------------------------------//
const c = [];  //definiowanie array
for(let i = 0; i <= 10; i++){
  const max = 126;
  const a = Math.floor(Math.random()* max); //losuje jedną liczbę a z 126
  const b = String.fromCharCode(a);  // definiuje zmienną b, przypisując znak z ASCII
  c.push(b); //wypushowanie do array c poza loopem
};
console.log(c.toString());// wyświetla wynik w pojedynczym stringu
