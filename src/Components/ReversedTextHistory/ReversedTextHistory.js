import React from "react";
import "./ReversedTextHistory.css"
import ReverseHistoryItem from "../ReverseHistoryItem/ReverseHistoryItem";

function ReversedTextHistory({ reversedTextHistory }) {
    return(
        <div>
            <div className="word-history">Reversed Word History</div>
            <table>
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Reversed Word</th>
                    </tr>
                </thead>
                <tbody> 
                    {reversedTextHistory.map((item, index) => {
                        return <ReverseHistoryItem
                                    item={item}
                                    key={index}
                                />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ReversedTextHistory

