// Zad 15.
// Stwórz program, który poprosi użytkownika o podanie swojej płci (man/woman). 
// Jeżeli natomiast użytkownik nie chce zdradzać swoich danych osobowych - powinien podać wyraz none.
//  Program ma dodatkowo wyświetlać komunikat: “You are a male!”/”You are a female”/”You are so mysterious” w zależności od podanej odpowiedzi. 
//  Natomiast, jeżeli użytkownik nie poda żadnej odpowiedzi zgodnej z powyższymi, to wyświetlaj tekst “Unknown answer”. 

// Rozwiązanie oprzyj o switch-a.


const pytanie = prompt("podaj swoją płeć: man/woman/none")

switch(pytanie){
    case "man":
        alert("You are a male!");
        break;
    case "woman":
        alert("You are a female");
        break;
    case "none":
        alert("You are so mysterious");
        break;
    default:
        alert("Unknowe answer")
}