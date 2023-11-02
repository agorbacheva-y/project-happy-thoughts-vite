import { useState } from "react";
import Message from "./Message/Message";

const MessageList = ({ thoughts }) => {
  /*
  map thoughts
  State to track which posts are liked (array of the ids).
  Use the length of that array to display how many.
  Store it in local storage.
  */ 
  if (!thoughts || thoughts.length === 0) {
    return <p>no thoughts</p>
  }

  return (
    <div>
      {thoughts.map((item) => (
        <Message key={item._id}>
          {item.message}
        </Message>
      ))}
    </div>
  );
};

export default MessageList;
