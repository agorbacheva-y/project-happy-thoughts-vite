import { useEffect, useState } from "react";
import Header from "./Header";
import MessageForm from "./MessageForm/MessageForm";
import MessageList from "./MessageList";
import Loading from "./Loading";

const Home = () => {
  // state to save thoughts fetched from api
  const [thoughts, setThoughts] = useState([]);

  // state for handling liked thoughts
  const [likedThoughts, setLikedThoughts] = useState(() => {
    // we try to load the liked thoughts from localStorage
    const savedLikedThoughts = localStorage.getItem("likedThoughts");
    // If we got any saved thoughts we parse the string, if not we set the state to a empty array
    return savedLikedThoughts ? JSON.parse(savedLikedThoughts) : [];
  });

  //Whenever the state likedThoughts is modified we write it to our local storage
  useEffect(() => {
    localStorage.setItem("likedThoughts", JSON.stringify(likedThoughts));
  }, [likedThoughts]);

  // state for loading
  const [loading, setLoading] = useState(true);

  const fetchUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  // function to fetch thoughts from api
  const fetchThoughts = async () => {
    try {
      const response = await fetch(fetchUrl);
      const data = await response.json();
      //console.log(data);

      setThoughts(
        data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      );
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
          <MessageList
            thoughts={thoughts}
            setThoughts={setThoughts}
            likedThoughts={likedThoughts}
            setLikedThoughts={setLikedThoughts}
          />
        </>
      )}
    </>
  );
};

export default Home;
