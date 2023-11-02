import Message from "./ Message/Message";

const MessageList = () => {
  /*
  map thoughts
  State to track which posts are liked (array of the ids).
  Use the length of that array to display how many.
  Store it in local storage.
  */ 

  return (
    <div>
      <Message />
    </div>
  );
};

export default MessageList;
