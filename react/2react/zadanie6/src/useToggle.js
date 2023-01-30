import { useState } from "react";


const useToggle = () => {

    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
      setActive(!isActive);
    };

    return [isActive, ToggleClass]
};

export default useToggle;
