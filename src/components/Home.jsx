import Header from "./Header";
import MessageForm from "./MessageForm/MessageForm";
import MessageList from "./MessageList";

const Home = () => {
  /*
  state: thoughts
  Fetching data.
  Post data.
  */

  return (
    <>
      <Header />
      <MessageForm />
      <MessageList />
    </>
  );
};

export default Home
