// Zad 5.
// Napisz funkcję, która:
// Poprosi użytkownika o podanie dowolnej daty w odpowiednim formacie (zgodnym ze standardem Date)
// Jako wynik wyświetli informacje, jaki dzień tygodnia przypadał w dniu o podanej dacie



const userDate = prompt ('set date YYYY-MM-DD+HH:MM:SS', 'here')


const date = new Date (userDate);

const day = e => {
if (e == 0){alert("sunday")}
  else if (e == 1){alert("monday")}
   else if (e == 2){alert("tuesday")}
   else if (e == 3){alert("wednesday")}
   else if (e == 4){alert("thursday")}
   else if (e == 5){alert("friday")}
   else if (e == 6){alert("saturday")}
}

day(date.getDay());