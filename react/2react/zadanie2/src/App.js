// Zad 2
// Korzystając z fake rest api dostępnego pod adresem https://jsonplaceholder.typicode.com stwórz komponent post, który jako props przyjmie obiekt danych przyjęty z endpointa /posts wspomnianego api. Korzystając z hooka useEffect pobierz z api dane (tylko raz!) i załaduj je do hooka useState. Odpowiedź załaduj na widok.

import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/post";

function App() {
  const [myState, setMyState] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setMyState(json));
    console.log("useEffect");
    return () => {setMyState([])} // componentWillUnmount
  }, []); //Runs only on the first render => componentDidMount()

  return (
    <>
      <h1>hi</h1>
      <Post data={myState} />
    </>
  );
}

export default App;
