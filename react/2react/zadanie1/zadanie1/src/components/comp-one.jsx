import { useState } from "react";

function InitialData() {
  const initialData = {
    human: {
      sex: "man",
      surname: "Detic",
    },
    accountBalance: 1000,
  };

  const [sex, setSex] = useState("man");
  const [surname, setSurname] = useState("Detic");
  const [accountBalance, setAccountBalance] = useState("1000");

  const [isActive, setActive] = useState("false");

  const toggle = () => {
    setActive(!isActive);
  };

  const handleBuy = () => {
    setAccountBalance(accountBalance + 500);
  };
  const handleSell = () => {
    setAccountBalance(accountBalance - 500);
  };

  return (
    <div>
      {isActive ? "man" : "woman"}
      <button onClick={toggle}>toggle</button>
      <h1>{surname}</h1>
      <h1>{accountBalance}</h1>
      <button onClick={handleBuy}>BUY</button>
      <button onClick={handleSell}>SELL</button>
      {/* <h1>{initialData.human.surname} , {initialData.human.sex} :</h1> */}
      {/* <p>{initialData.accountBalance}</p> */}
    </div>
  );
}

export default InitialData;
