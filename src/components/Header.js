import React, { useContext } from 'react';
import QuoteContext from '../context/quote-context'

function Header() {
    const { quote, setQuote } = useContext(QuoteContext);

    function handleClick(e) {
        e.preventDefault();
        
        fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
        .then(response => response.json())
        .then(data => {
            return setQuote(data.quote);
        });
    }

  return (
    <div>
      <button onClick={handleClick}>random</button>
    </div>
  );
}

export default Header;
