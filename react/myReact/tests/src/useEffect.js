import { useEffect, useState } from "react";

function PrzykladUseEffect() {
  const myArray = [1, 2, 3, 4, 5, 6];

  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(21);
      console.log("Po sekundzie");
      
    }, 1000);
  }, []);

  return (
    <div>
      <p>Licznik ma wartość {count} razy</p>
      <hr />
      {myArray.map((e) => (
        <p key={e}>{e}</p> // use of "key"
      ))}
    </div>
  );
}

export default PrzykladUseEffect;
