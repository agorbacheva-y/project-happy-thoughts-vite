import "./Message.css";

const Message = ({ children }) => {
  return (
    <div className="messageBox">
      <div className="messageInfo">
        {children}
      </div>
      <div className="messageBody">
        <div className="messageHeart">
          <button>❤️</button>
          <span>x 320</span>
        </div>
        <p className="timestamp">about x min ago</p>
      </div>
    </div>
  );
};

export default Message;
