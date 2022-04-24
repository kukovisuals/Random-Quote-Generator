import {useState} from 'react';
import './App.css';
import data from './quotes.json'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const quoteData = data.quotes
   
  const randomQuote = (e) => {
    const len = quoteData.length
    const randomIndex = Math.round( Math.random() * (len - 1 ))
    setQuote(quoteData[randomIndex].quote)
    setAuthor(quoteData[randomIndex].author)
  }
  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quote} </p>
        <p id="author"> {author}</p>
        <button id="new-quote" onClick={randomQuote}>New Quote</button>
        <a id="tweet-quote"
        href="https://twitter.com/intent/tweet"
        >
         Tweet
        </a>
      </div>
    </div>
  );
}

export default App;
