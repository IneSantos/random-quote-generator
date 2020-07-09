import React from 'react'

const QuoteContext = React.createContext({
    quote: {},
    setQuote: () => {}
});

export default QuoteContext