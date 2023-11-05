import { useEffect, useState } from "react"
import Header from "./Header"
import MessageForm from "./MessageForm/MessageForm"
import MessageList from "./MessageList"
import HeartStats from "./HeartStats"

/*
  state: thoughts
  Fetching data.
  Post data.
  */

const Home = () => {
  // state to save thoughts fetched from api
  const [thoughts, setThoughts] = useState([]);

  // state for handling liked thoughts
  const [likedThoughts, setLikedThoughts] = useState(() => {
    // we try to load the liked thoughts from localStorage
    const savedLikedThoughts = localStorage.getItem('likedThoughts')
    // If we got any saved thoughts we parse the string, if not we set the state to a empty array
    return savedLikedThoughts ? JSON.parse(savedLikedThoughts) : []
  })

  //Whenever the state likedThoughts is modified we write it to our local storage
  useEffect(() => {
    localStorage.setItem('likedThoughts', JSON.stringify(likedThoughts))
  }, [likedThoughts])

  // state to save thoughts sorted from newest to oldest
  const [orderedThoughts, setOrderedThoughts] = useState([]);

  const fetchUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  // fetch thoughts on mount
  useEffect(() => {
    fetchThoughts();
  }, []);

  // sort thoughts from most recent to oldest
  useEffect(() => {
    thoughts?.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    console.log("ordered:", thoughts);
  }, [thoughts]);

  // function to fetch thoughts from api
  const fetchThoughts = async () => {
    await fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setThoughts(data);
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  };

  // function to allow MessageForm to push new thoughts on successful send
  const addNewThought = (newThought) => {
    setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
  };
  const test = 'What'
  return (
    <div className="mainWrapper">
      <Header />
      <HeartStats thoughts={thoughts} likedThoughts={likedThoughts} />
      <MessageForm addNewThought={addNewThought} />
      <MessageList thoughts={thoughts} setThoughts={setThoughts} likedThoughts={likedThoughts} setLikedThoughts={setLikedThoughts} />
    </div>
  );
};

export default Home;
