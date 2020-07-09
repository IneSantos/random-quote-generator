import React, { useState, useEffect } from 'react';
import Home from './Home';
import QuoteContext from '../context/quote-context'

function App() {

  const [quote, setQuote] = useState('');
  const value = { quote, setQuote };
  function setRandomQuote() {
    fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
        .then(response => response.json())
        .then(data => {
            return setQuote(data.quote);
        });
  }


  useEffect(() => {
      setRandomQuote();
  }, []);

  return (
    <QuoteContext.Provider value={value}>
      <Home/>
    </QuoteContext.Provider>
  );
}

export default App;