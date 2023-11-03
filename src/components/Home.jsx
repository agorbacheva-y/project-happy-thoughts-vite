import { useEffect, useState } from "react";
import Header from "./Header";
import MessageForm from "./MessageForm/MessageForm";
import MessageList from "./MessageList";
import Loading from "./Loading";

const Home = () => {
  // state to save thoughts fetched from api
  const [thoughts, setThoughts] = useState([]);

  // state for loading
  const [loading, setLoading] = useState(true);

  // API url for GET
  const fetchUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  // function to fetch thoughts from api
  const fetchThoughts = async () => {
    try {
      const response = await fetch(fetchUrl);
      const data = await response.json();
      //console.log(data);

      setThoughts(data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ));

    } catch (error) {
      console.log(error.response.status);
    }
    setLoading(false);
  };

  // fetch thoughts on mount
  useEffect(() => {
    fetchThoughts();
  }, []);

  // function to allow MessageForm to push new thoughts on successful send
  const addNewThought = (newThought) => {
    setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <MessageForm addNewThought={addNewThought} />
          <MessageList thoughts={thoughts} setThoughts={setThoughts} />
        </>
      )}
    </>
  );
};

export default Home;
