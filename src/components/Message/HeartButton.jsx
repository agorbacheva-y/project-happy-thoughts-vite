import React from "react";

const HeartButton = ({ thought, index, setThoughts }) => {
  // post like https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like
  const handleHeart = () => {
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("handleHeart", data);
      });
  };

  return (
    <>
      <div className="heartBtn">
        <div>
          <button onClick={handleHeart}>❤️</button>
        </div>
        <p>x{thought.hearts}</p>
      </div>
    </>
  );
};

export default HeartButton;
