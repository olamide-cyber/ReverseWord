import React from "react";

function reverseWord(word) {
    let reversedString = ''
    for(let i = word.length-1; i >= 0; i--) {
        reversedString = reversedString + word[i]
    }
    return reversedString
}

function SearchBar({ onReverseTextChange }) {
    const [inputValue, setInputValue] = React.useState('');

    function handleReverseText(event) {
        setInputValue(event.target.value)
        if(!event.target.value) {
            onReverseTextChange(null)
        }
    }

    function handleClick(event) {
        event.preventDefault()
        const reversedText =  reverseWord(inputValue);
        onReverseTextChange(reversedText, inputValue);
        setInputValue('')
    }

    return(
        <div>
            <form>
                <input value={inputValue} onChange={handleReverseText} />
                <button disabled={inputValue? false : true} onClick={handleClick}>Reverse</button>
            </form>
        </div>
    )
}

export default SearchBar