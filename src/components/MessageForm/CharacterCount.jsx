import React from 'react'
import './CharacterCount.css'


const CharacterCount = ({letterCount, errorMessage}) => {
   /*
  Count characters.
  Validation of some form?
  */

 const isTooLong = (letterCount > 140)
 const isTooShort = (letterCount < 5)

  return (
    <div className="characterCountContainer">
      <div className="letterCountText">{errorMessage}</div>
      <div className={`letterCount ${isTooLong || isTooShort ? 'warning' : ''}`}>{letterCount}/140</div>
    </div>
  );
};

export default CharacterCount;
