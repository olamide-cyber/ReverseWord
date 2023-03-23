import React from "react";

function ReverseHistoryItem({ item }) {
    return(
        <tr>
            <td>{item.word}</td>
            <td>{item.reversedText}</td>
        </tr>
    )
}

export default ReverseHistoryItem