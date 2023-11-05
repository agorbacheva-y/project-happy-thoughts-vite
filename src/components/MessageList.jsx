import Message from "./Message/Message";
import "./Message/Message.css";

const MessageList = ({
  thoughts,
  setThoughts,
  likedThoughts,
  setLikedThoughts,
}) => {
  return (
    <div className="messageBoxContainer">
      {thoughts.map((item, index) => (
        <Message
          key={item._id}
          thought={item}
          index={index}
          setThoughts={setThoughts}
          liked={likedThoughts.includes(item._id)}
          setLikedThoughts={setLikedThoughts}
        >
          {item.message}
        </Message>
      ))}
    </div>
  );
};

export default MessageList;
