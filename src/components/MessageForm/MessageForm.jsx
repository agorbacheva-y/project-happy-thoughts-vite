import { useState, useEffect } from "react";
import "./MessageForm.css";
import CharacterCount from "./CharacterCount";


const MessageForm = ({addNewThought}) => {
  /* 
  form to add thought
  input validation?
  state: newThought, characterCount?  
  */

  const emptyThought = {
    message: ""
  }

  const [newThought, setNewThought] = useState(emptyThought);

  const [letterCount, setLetterCount] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    messageCount();
  },[letterCount])

  const handleSubmit = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "message": newThought.message })
    })
      .then((res) => res.json())
      .then((newThought) => {
        addNewThought(newThought)
        setNewThought(emptyThought)
      })
  }

  const saveMessage = (e) => {
    const message = e.target.value
    setNewThought((values) => ({...values, message}));
    setLetterCount(message.length);
  }

  const messageCount = () => {
    if (letterCount === 0) {
      setErrorMessage("Please enter your happy thought!")
    } else if (letterCount < 5) {
      setErrorMessage("Message is too short")
    } else if (letterCount > 140) {
      setErrorMessage("Message is too long")
    } else {
      setErrorMessage("")
    }

    return errorMessage;
  }

  return (
    <div className="formContainer">
      <div className="inputBox">
        <h2>What is making you happy right now?</h2>
        <textarea
          className="messageInput"
          value={newThought.message}
          type="text"
          placeholder="'If music be the food of love, play on.' - William Shakespeare"
          onChange={saveMessage}
        >
        </textarea>
        <CharacterCount letterCount={letterCount} errorMessage={errorMessage} />
        <button onClick={handleSubmit}>❤️ Send Happy Thought ❤️</button>

      </div>
    </div>
  );
};

export default MessageForm;
