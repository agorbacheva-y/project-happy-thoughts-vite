import React from 'react'

const MessageForm = () => {
  /* 
  form to add thought
  input validation
  state: newThought, characterCount?  
  
  */
  return (
    <div className="inputBox">
      <h2>What is making you happy right now?</h2>
      <textarea 
        className="messageInput" 
        type="text" 
        placeholder="'If music be the food of love, play on.' - William Shakespeare"
      >
      </textarea>
      <button>❤️ Send Happy Thought ❤️</button>
    </div>
  );
};

export default MessageForm;
