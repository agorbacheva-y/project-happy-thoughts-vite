import "./Message.css";

const Message = ({ children }) => {
  return (
    <div className="messageBox">
      <div className="messageInfo">
        {children}
        <div className="heartBtn">
          <div>
            <button>❤️</button>
          </div>
          <p>x 320</p>
        </div>
        <p className="timestamp">about x min ago</p>
      </div>
    </div>
  );
};

export default Message;
