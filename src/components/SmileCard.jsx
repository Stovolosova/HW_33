import React, { useState } from 'react';

function SmileyCard ({ emoji, count }) {
   
    const [emojiCount, setEmojiCount] = useState(0);
  
     return (
        <div className='smile-card'>
            <div className="emoji" onClick={() => {setEmojiCount(emojiCount + 1)}}>{emoji}</div>
            <div className="count">Count: {emojiCount}</div>
        </div>
     )
  };
  
  export default SmileyCard;