import React from "react";

function ReverseWord({ reverseText }) {
    return(
        <div>
            {!reverseText ? <div>Enter Word</div> : <div>{reverseText}</div> }
        </div>
    )
}

export default ReverseWord