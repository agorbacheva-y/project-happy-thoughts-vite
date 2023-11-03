import { useEffect, useState } from "react";
import Header from "./Header";
import MessageForm from "./MessageForm/MessageForm";
import MessageList from "./MessageList";

 /*
  state: thoughts
  Fetching data.
  Post data.
  */

const Home = () => {
 // state to save thoughts fetched from api
  const [thoughts, setThoughts] = useState([]);

  // state to save thoughts sorted from newest to oldest
  const [orderedThoughts, setOrderedThoughts] = useState([]);

  const fetchUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  // fetch thoughts on mount
  useEffect(() => {
    fetchThoughts();
  },[]);

  // sort thoughts from most recent to oldest
  useEffect(() => {
    thoughts.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    console.log("ordered:", thoughts);
  },[thoughts]);

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
      })
  };

  return (
    <>
      <Header />
      <MessageForm />
      <MessageList thoughts={thoughts} />
    </>
  );
};

export default Home
