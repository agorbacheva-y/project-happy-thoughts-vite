import React from "react";
import { useState } from "react";

const HeartButton = ({
  thought,
  index,
  setThoughts,
  liked,
  setLikedThoughts,
}) => {
  // We create a state for if heart has been clicked to prevent multiple likes being sent in a row
  const [heartClicked, setHeartClicked] = useState(false);

  // post like https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like
  const handleHeart = () => {
    // as soon as the heart has been clicked we set state to true which instantly renders the
    setHeartClicked(true);
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        // We increase the hearts count for the current thought
        thought.hearts++;
        // we loop through all the thoughts to find the current one and then replace that one.
        setThoughts((thoughts) => {
          return thoughts.map((item) =>
            item._id === thought._id ? thought : item
          );
        });
        // We save the _id into our localStorage
        setLikedThoughts((values) =>
          values.includes(thought._id) ? values : [...values, thought._id]
        );
      });
  };

  return (
    <>
      <div className="heartBtn">
        <div>
          <button onClick={handleHeart} disabled={heartClicked || liked}>
            ❤️
          </button>
        </div>
        <p>x {thought.hearts}</p>
      </div>
    </>
  );
};

export default HeartButton;
