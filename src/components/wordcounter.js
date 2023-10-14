import React, { useState } from 'react';

export function WordCounter() {
  const [text, setText] = useState('');
  const words = text.trim().split(/\s+/);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Responsive Paragraph Word</h1>
      <h1>Counter</h1>
      <textarea
        rows="7"
        cols="50"
        placeholder="Type or paste your text here..."
        onChange={handleTextChange}
        value={text}
      />
      <p>Word Count: {words.length}</p>
    </div>
  );
}

export default WordCounter;
