import Message from "./Message/Message";
import "./Message/Message.css";

const MessageList = ({ thoughts, setThoughts }) => {
  return (
    <div className="messageBoxContainer">
      {thoughts.map((item, index) => (
        <Message
          key={item._id}
          thought={item}
          index={index}
          setThoughts={setThoughts}
        >
          {item.message}
          {item._id}
        </Message>
      ))}
    </div>
  );
};

export default MessageList;
