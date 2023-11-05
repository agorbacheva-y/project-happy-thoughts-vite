import './HeartStats.css'
export const HeartStats = ({thoughts, likedThoughts}) => {
  const countLikedThougts = thoughts.filter((item) => {return likedThoughts.includes(item._id)})
  console.log("countLikedThoughts", countLikedThougts)
  return(
    <div className="heartStatsContainer">
      <div className="heartStats">
        <h3>Spread some love</h3>
        You have heart liked {countLikedThougts.length || 0}  of the last {thoughts.length || 0} thoughts. And of all the thoughts that have passed by you have liked {likedThoughts.length || 0}. 
      </div>
    </div>
  )
}

export default HeartStats