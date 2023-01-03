function Fruits() {
  function fruitsNames(name) {
    console.log(name);
  }

  return (
    <div>
      <button onClick={() => fruitsNames("jabzo")}>jabzo</button>
      <button onClick={() => fruitsNames("grucha")}>grucha</button>
      <button onClick={() => fruitsNames("mańczo")}>mańcza</button>
    </div>
  );
}

export default Fruits;
