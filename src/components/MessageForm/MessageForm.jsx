import { useState } from "react";
import "./MessageForm.css";
import CharacterCount from "./CharacterCount";

const MessageForm = ({ addNewThought }) => {
  const emptyThought = {
    message: "",
  };
  const [newThought, setNewThought] = useState(emptyThought);
  const [letterCount, setLetterCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const postThought = () => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought.message }),
    })
      .then((res) => {
        const data = res.json();
        if (!res.ok) {
          console.log(data.message); // returning undefined??
        }
        return data;
      })
      .then((newThought) => {
        addNewThought(newThought);
        setNewThought(emptyThought);
      })
      .catch((error) => {
        console.log(error.toString());
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postThought();
    errorHandling();
  };

  const saveMessage = (e) => {
    const message = e.target.value;
    setNewThought((values) => ({ ...values, message }));
    setLetterCount(message.length);
  };

  // function to show error message depending on character count
  const errorHandling = () => {
    if (letterCount === 0) {
      setErrorMessage("Please enter your happy thought!");
    } else if (letterCount < 5) {
      setErrorMessage("You need at least 5 characters");
    } else if (letterCount > 140) {
      setErrorMessage("Message is too long");
    } else {
      setErrorMessage("");
    }
    return errorMessage;
  };

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
        ></textarea>
        <CharacterCount letterCount={letterCount} errorMessage={errorMessage} />
        <button onClick={handleSubmit} >
          <span>❤️</span>
          <span>Send Happy Thought</span>
          <span>❤️</span>
        </button>
      </div>
    </div>
  );
};

export default MessageForm;
