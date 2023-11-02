import React from 'react'
import './CharacterCount.css'


const CharacterCount = ({letterCount}) => {
   /*
  Count characters.
  Validation of some form?
  */
 const isTooLong = (letterCount > 140)
  return (
    <div className="characterCountContainer">
      <div className="letterCountText">{isTooLong ? 'Message is too long' : ''}</div>
      <div className={`letterCount ${isTooLong ? 'warning' : ''}`}>{letterCount}/140</div>
    </div>
  );
};

export default CharacterCount;
