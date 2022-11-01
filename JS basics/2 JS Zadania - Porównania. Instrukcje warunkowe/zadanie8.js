//wybór symbol
const symbol = prompt("Wybierz (orzeł-o, resztka-r):");
//rzut monetą
  const max = 2;
  const rzutMoneta = Math.floor(Math.random() * max);
  console.log(rzutMoneta);
// funkcja główna
function a(){
  if (symbol == "o"){
    const symbolWybor = 0;
    if (symbolWybor == rzutMoneta){
      alert(" orzeł - wygrałeś");
    }
    else {
      alert("resztka - przegrałeś");
    }
  }
  else if (symbol == "r"){
    const symbolWybor =1 ;
    if (symbolWybor == rzutMoneta){
      alert("resztka - wygrałeś");
    }
    else {
      alert("orzeł - przegrałeś");
    }
  }
else {
  alert("źle wpisana nazwa");
}
}
// odliczanie po wyborze symbolu
setTimeout(() => {console.log("-----=== 3 ===-----")}, 1000);
  setTimeout(() => {console.log("-----=== 2 ===-----")}, 2000);
  setTimeout(() => {console.log("-----=== 1 ===-----")}, 3000);
  setTimeout(() => {a()},4000);
