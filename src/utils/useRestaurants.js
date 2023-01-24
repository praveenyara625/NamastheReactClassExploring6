import React, { useEffect, useState } from "react";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

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
  }
  <div>useRestaurants</div>;

  return restaurants;
};

export default useRestaurants;
