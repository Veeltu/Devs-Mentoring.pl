import { useState } from "react";

function Przyklad() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Naciśnięto {count} razy</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default Przyklad;
