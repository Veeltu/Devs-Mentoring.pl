

import React, { useState } from 'react';

function useClickToCard() {

    const [state, setState] = useState([]); // info about country

    const handleClick = (click, e) => {
        e.preventDefault();
        // if click setState with e.target.value
            
    }

    return 
        // onClick={((e) => handleClick(setState))}
        // onCLick= {((e) => setState(e.target.value))}
    
}

export default useClickToCard

