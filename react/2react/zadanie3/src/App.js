// Zad 3
// Stwórz komponent table, który jako props przyjmie obiekt data. W komponencie table stwórz stałą columns, która przechowa dane o nazwach kolumn. Do komponentu table przekaż data i columns.

// Przykładowy obiekt zwrócony z API to:
// const data = {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },

// W tabeli jako kolumny wyświetl: name, surname, email, phone number oraz przycisk, który po kliknięciu powoduje rozwinięcie tabeli i pokaże dane adresowe, stronę internetową i dane firmy.




import './App.css';
import Table from './components/table';
import { dataJSON } from './data/data';

function App() {
  console.log(dataJSON)
  return (
    <>
      <Table data = {dataJSON}/>
    </>
  );
}

export default App;
