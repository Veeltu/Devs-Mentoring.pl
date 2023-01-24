// Zad 6
// Wykorzystaj ContextAPI Reacta do przechowywania informacji o wybranym przez użytkownika THEME na stronie internetowej (darkMode, lightMode).
// Podpowiedź: elementy na stronie będą wykorzystywać theme w następujący sposób:
// const theme = useContext(ThemeContext); // konsumpcja contextu, np.
// const mode=theme.state.mode // przykładowe wyciągnięcie zmiennej z contextu <div className={`${mode ? “dark”: “light”}`}>

import { Context } from "./contextApi";
import { Theme } from "./Theme";
import Child from "./Child";

function App() {

  return (
    <>
      <Context.Provider value={Theme}>
        <Child />
      </Context.Provider>
    </>
  );
}

export default App;
