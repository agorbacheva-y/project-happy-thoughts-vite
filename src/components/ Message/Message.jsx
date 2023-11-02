import "./Message.css";

const Message = () => {
  return (
    <div class="messageBox">
      <p>Hello all</p>
      <div class="messageInfo">
        <div class="heartBtn">
          <div>
            <button>❤️</button>
          </div>
          <p>x 320</p>
        </div>
        <p class="timestamp">about 4 min ago</p>
      </div>
    </div>
  );
};

export default Message;
