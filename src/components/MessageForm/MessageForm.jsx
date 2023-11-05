import { useState, useEffect } from "react";
import "./MessageForm.css";
import CharacterCount from "./CharacterCount";

const MessageForm = ({ addNewThought }) => {
  const emptyThought = {
    message: "",
  };
  const [newThought, setNewThought] = useState(emptyThought);
  const [letterCount, setLetterCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorType, setErrorType] = useState("");

  const postThought = async () => {
    try {
      const res = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: newThought.message }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setErrorType(data.errors.message.kind);
        console.log(data.message);
      } else if (res.ok) {
        // The data returned from a successful submit is a valid thought object. So we pass that do our array of message objects
        addNewThought(data);
        setNewThought(emptyThought);
      }
      setLetterCount(0);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postThought();
    setNewThought(emptyThought);
  };

  const saveMessage = (e) => {
    const message = e.target.value;
    setNewThought((values) => ({ ...values, message }));
    setLetterCount(message.length);
    setErrorMessage("");
    setErrorType("");
  };

  // function to show error message depending on character count
  const errorHandling = () => {
    switch (errorType) {
      case "minlength":
        setErrorMessage("You need at least 5 characters");
        break;
      case "maxlength":
        setErrorMessage("Message is too long");
        break;
      case "required":
        setErrorMessage("Please enter your happy thought!");
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    errorHandling();
  }, [errorType]);

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
        <button onClick={handleSubmit}>
          <span>❤️</span>
          <span>Send Happy Thought</span>
          <span>❤️</span>
        </button>
      </div>
    </div>
  );
};

export default MessageForm;
