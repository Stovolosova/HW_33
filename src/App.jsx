import React, { useState } from 'react';
import './App.css';
import SmileyCard from './components/SmileCard.jsx';

function App() {
  const [winningEmoji, setWinningEmoji] = useState(false);
  
  const handleShowResults = () => {
    let maxCount = 0;
    let winningEmoji = '';

    const smileyCards = document.querySelectorAll('.smile-card');
     smileyCards.forEach((smileyCard) => {
      const emojiCount = parseInt(smileyCard.querySelector('.count').textContent.replace('Count: ', ''));
      const emoji = smileyCard.querySelector('.emoji').textContent;

      if (emojiCount > maxCount) {
        maxCount = emojiCount;
        winningEmoji = emoji;
      }
    });
    setWinningEmoji(winningEmoji);
  };

  return (
      <div>
        <h2>Vote for the best emoticon</h2>
        <SmileyCard emoji="😊" count="0" />
        <SmileyCard emoji="😄" count="0" />
        <SmileyCard emoji="😍" count="0" />
        <button onClick={handleShowResults}>Show Results</button>
        {winningEmoji && (<div className="winning-emoji"> Winning Emoji: {winningEmoji}</div>)}
      </div>
  );
}

export default App;