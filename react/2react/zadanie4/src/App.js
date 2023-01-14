// Zad 4
// Stwórz custom hooka, który jako parametry przyjmie link do API oraz zwróci stan isLoading oraz otrzymane dane. Skorzystaj z fetcha.

import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users/"
  );

  if (loading) return <h1>LOADING...</h1>;

  console.log(data);
  console.log(loading);

  return (
    <>
      <h1>hi</h1>
    </>
  );
}

export default App;

// useCustomHook("https://jsonplaceholder.typicode.com/users/");
