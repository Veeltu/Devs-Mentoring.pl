// Zad 4
// Stwórz custom hooka, który jako parametry przyjmie link do API oraz zwróci stan isLoading oraz otrzymane dane. Skorzystaj z fetcha.

import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users/"
  );

  // console.log(loading);
  // console.log(data);

  return (
    <>
      <h1>hi</h1>
      <code>{JSON.stringify(data)}</code>
      
    </>
  );
}

export default App;

// useCustomHook("https://jsonplaceholder.typicode.com/users/");
