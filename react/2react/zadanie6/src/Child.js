import { useContext } from "react";
import { Context } from "./contextApi"
import useToggle from "./useToggle";

function Child() {
    const myStyle = useContext(Context)

    const [isActive, ToggleClass] = useToggle();

  return (
    <>
    <div style={isActive ? myStyle.DarkTheme : myStyle.LightTheme}>
        <button onClick={ToggleClass}>toggle</button>
      <h1>BOX</h1>
    </div>
    </>
  );
}

export default Child;
