import React, { useContext } from 'react';
import QuoteContext from '../context/quote-context'

function Quote() {

    const { quote } = useContext(QuoteContext);

  return (
    <div>
      <h3>{quote.quoteText}</h3>
      <h4>{quote.quoteAuthor}</h4>
      <h4>{quote.quoteGenre}</h4>
    </div>
  );
}

export default Quote;
