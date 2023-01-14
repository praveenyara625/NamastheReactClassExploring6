const RestaurantCardSkeleton = () => {
  let styleObj = {
    backgroundColor: "rgb(191, 191, 191)",
    borderRadius: "8px%",
  };

  return (
    <div
      className="card"
      style={{ height: "333px", border: "1px solid black" }}
    >
      <img style={{ height: "36%", backgroundColor: "rgb(191, 191, 191)" }} />
      <h3 style={styleObj}>
        <img />
      </h3>
      <h3 style={styleObj}>
        <img />
      </h3>
      <h3 style={styleObj}>
        <img />
      </h3>
    </div>
  );
};

export default RestaurantCardSkeleton;
