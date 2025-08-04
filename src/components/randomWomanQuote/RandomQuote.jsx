// src/components/randomWomanQuote/RandomQuote.jsx
import { useState, useEffect } from "react";
import { WOMEN_QUOTES } from "../../assets/data";



function RandomQuote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * WOMEN_QUOTES.length);
    const randomQuote = WOMEN_QUOTES[randomIndex];
    setQuote(randomQuote);
  }, []);

  if (!quote) return <p>Loading quote...</p>;

  return (
    <div className="image-form">
      <p className="quote-text">“{quote.quote}”</p>
      <p className="author-text">– {quote.author}</p>
    </div>
  );
}

export default RandomQuote;
