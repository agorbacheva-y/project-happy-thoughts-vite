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
  const [thoughts, setThoughts] = useState(null);

  const fetchUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  useEffect(() => {
    fetchThoughts();
  },[]);

  // function to fetch thoughts from api
  const fetchThoughts = async () => {
    await fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
