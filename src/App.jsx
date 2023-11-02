import Header from "./components/Header/Header";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageList from "./components/MessageList";

export const App = () => {
  /*
  State to track which posts are liked (array of the ids).
  Use the length of that array to display how many.
  Store it in local storage.
  Maybe this should go in Message list?
  */

  return (
    <>
      <Header />
      <MessageForm />
      <MessageList />
    </>
  );
};
