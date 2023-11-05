import Message from "./Message/Message";
import "./Message/Message.css";

const MessageList = ({ thoughts, setThoughts, likedThoughts, setLikedThoughts }) => {
  /*
  map thoughts
  State to track which posts are liked (array of the ids).
  Use the length of that array to display how many.
  Store it in local storage.
  */
  if (!thoughts || thoughts.length === 0) {
    return <p>no thoughts</p>;
  }

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
