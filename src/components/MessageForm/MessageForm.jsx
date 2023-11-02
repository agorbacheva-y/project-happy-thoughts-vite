import "./MessageForm.css";

const MessageForm = () => {
  /* 
  form to add thought
  input validation?
  state: newThought, characterCount?  
  
  */
  return (
    <div className="formContainer">
      <div className="inputBox">
        <h2>What is making you happy right now?</h2>
        <textarea 
          className="messageInput" 
          type="text" 
          maxLength="140"
          minLength="5"
          placeholder="'If music be the food of love, play on.' - William Shakespeare"
        >
        </textarea>
        <button>
          <span className="buttonHeart">❤️</span>
          <span className="buttonText">Send Happy Thought</span>
          <span className="buttonHeart">❤️</span>
        </button>
      </div>
    </div>
  );
};

export default MessageForm;
