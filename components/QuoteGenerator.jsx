'use client';

import { useState, useEffect } from 'react';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchQuote() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('https://dummyjson.com/quotes/random');
      if (!res.ok) {
        throw new Error(`Quotes API error: ${res.status}`);
      }
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-section">
      <h3>Motivational Quote</h3>
      {loading && (
        <div className="api-status">
          <div className="loading-spinner" />
          <p>Loading quote...</p>
        </div>
      )}
      {error && (
        <div className="api-status error">
          <p>Failed to load quote: {error}</p>
        </div>
      )}
      {quote && !loading && (
        <blockquote className="quote-card">
          <p>&ldquo;{quote.quote}&rdquo;</p>
          <footer>&mdash; {quote.author}</footer>
        </blockquote>
      )}
      <button className="quote-btn" onClick={fetchQuote} disabled={loading}>
        {loading ? 'Loading...' : 'New Quote'}
      </button>
    </div>
  );
}
