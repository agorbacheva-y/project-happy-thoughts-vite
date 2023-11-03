import Message from "./Message/Message";
import "./Message/Message.css";

const MessageList = ({ thoughts, setThoughts }) => {
  /*
  map thoughts
  State to track which posts are liked (array of the ids).
  Use the length of that array to display how many.
  Store it in local storage.
  */
 console.log(thoughts);

  return (
    <div className="messageBoxContainer">
      {thoughts.map((item, index) => (
        <Message
          key={item._id}
          thought={item}
          index={index}
          setThoughts={setThoughts}
        >
          {item.message}{item._id}
        </Message>
      ))}
    </div>
  );
};

export default MessageList;
