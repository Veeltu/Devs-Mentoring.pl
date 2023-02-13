
import React from 'react';

const upperTab = {
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between"
}

function UpperTab(props) {
    return (
        <div className='upper_tab' style={upperTab}>
            <h1>Where in the world ?</h1>
            <h1>Themes</h1>

        </div>
    );
}

export default UpperTab;<h1>upper tab</h1>