import './App.css';
import {React, useState} from 'react';
import ReverseWord from '../ReverseWord/ReverseWord';
import SearchBar from '../SearchBar/SearchBar';
import ReversedTextHistory from '../ReversedTextHistory/ReversedTextHistory';

function App() {
  const [reverseText, setReverseText] = useState('');
  const [reversedTextHistory, setReversedTextHistory] = useState([]);

  function handleReverseText(reversedText, inputValue) {
      setReverseText(reversedText)
      if(!reversedText && !inputValue) {
          return
      }
      if(reversedTextHistory.length > 2) {
        reversedTextHistory.pop()
      }
      reversedTextHistory.unshift({word: inputValue, reversedText: reversedText}) 
      setReversedTextHistory([...reversedTextHistory])
  }

  return (
    <div className="App">
       <ReverseWord 
          reverseText={reverseText}
        />
       <SearchBar 
          onReverseTextChange={handleReverseText}
       />
       {reversedTextHistory.length ? <ReversedTextHistory reversedTextHistory={reversedTextHistory} /> : null}
    </div>
  );
}

export default App;
