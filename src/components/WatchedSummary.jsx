const WatchedSummary = ({ watchedList }) => {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>{watchedList.length} movies</p>
        {/* <p>⭐️ 0.00</p>
        <p>⏳ 0 min</p> */}
      </div>
    </div>
  );
};

export default WatchedSummary;
