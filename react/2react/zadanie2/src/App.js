// Zad 2
// Korzystając z fake rest api dostępnego pod adresem https://jsonplaceholder.typicode.com stwórz komponent post, który jako props przyjmie obiekt danych przyjęty z endpointa /posts wspomnianego api. Korzystając z hooka useEffect pobierz z api dane (tylko raz!) i załaduj je do hooka useState. Odpowiedź załaduj na widok.

import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/post";

function App() {
  const [a, setA] = useState();
  const [b, setB] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setB(json));
      console.log("useEffect")
  }, [a]);

  return (
    <>
      <h1>hi</h1>
      <Post data={b}/>
      
    </>
  );
}

export default App;
