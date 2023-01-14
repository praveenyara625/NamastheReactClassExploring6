import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";

// What is state
// what is React Hooks? - functions,
// What is useState

function filterDataF(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  let arr = [...Array(15)].map((i) => {
    return i;
  });
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.41619199999999&lng=78.46297600000001&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    let json = await data.json();
    console.log(json.data.cards);
    setRestaurants(json.data.cards);
    setFilterData(json.data.cards);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterDataF(e.target.value, restaurants);
            // update the state - restaurants
            setFilterData(data);
          }}
        />
        <p style={{ display: "inline" }}>Search</p>
      </div>

      {/* The major difference is that you can specify custom computation with
        for loop. Whereas .map() is specifically designed for mapping */}
      <div className="restaurant-list">
        {restaurants.length === 0
          ? arr.map(() => {
              return <RestaurantCardSkeleton />;
            })
          : searchText.length > 0
          ? filterData.map((restaurant) => {
              return (
                <RestaurantCard
                  {...restaurant.data.data}
                  key={restaurant.data.data.id}
                />
              );
            })
          : restaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  {...restaurant.data.data}
                  key={restaurant.data.data.id}
                />
              );
            })}
      </div>
    </>
  );
};

export default Body;
