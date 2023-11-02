import { useState } from "react";
import "./MessageForm.css";
import CharacterCount from "./CharacterCount";


const MessageForm = ({addNewThought}) => {
  /* 
  form to add thought
  input validation
  state: newThought, characterCount?  
  */

  const emptyThought = {
    message: ""
  }

  const [newThought, setNewThought] = useState(emptyThought)

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
    setNewThought((values) => ({...values, message}))
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
        <CharacterCount letterCount={newThought.message.length} />
        <button onClick={handleSubmit}>❤️ Send Happy Thought ❤️</button>
      </div>
    </div>
  );
};

export default MessageForm;
