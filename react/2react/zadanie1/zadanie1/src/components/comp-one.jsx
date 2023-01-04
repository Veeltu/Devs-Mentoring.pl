import { useState } from "react";
const initialData = {
  human: {
    sex: "man",
    surname: "Detic",
  },
  accountBalance: 1000,
};

function InitialData() {

  const [data, setData] = useState(initialData)

  const [isActive, setActive] = useState(false);

  const toggle = () => {
    setActive(!isActive);
  };

  const handleBuy = () => {
    setData({...data, accountBalance: data.accountBalance+500})
  };

  const handleSell = () => {
    setData({...data, accountBalance: data.accountBalance-500})
  };

  return (
    <div>
      {isActive ? "man" : "woman"}
      <button onClick={toggle}>toggle</button>
      <h1>{data.human.surname}</h1>
      <h1>{data.accountBalance}</h1>
      <button onClick={handleBuy}>BUY</button>
      <button onClick={handleSell}>SELL</button>
      {/* <h1>{initialData.human.surname} , {initialData.human.sex} :</h1> */}
      {/* <p>{initialData.accountBalance}</p> */}
    </div>
  );
}

export default InitialData;
