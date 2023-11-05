import Timestamp from "./Timestamp";
import HeartButton from "./HeartButton";
import "./Message.css";

const Message = ({
  children,
  thought,
  index,
  setThoughts,
  liked,
  setLikedThoughts,
}) => {
  return (
    <div className="messageBox">
      <div className="messageInfo">{children}</div>
      <div className="messageBody">
        <HeartButton
          thought={thought}
          index={index}
          setThoughts={setThoughts}
          liked={liked}
          setLikedThoughts={setLikedThoughts}
        />
        <Timestamp thought={thought} />
      </div>
    </div>
  );
};

export default Message;
