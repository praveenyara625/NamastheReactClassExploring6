import React, { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../contants";

const useRestaurant = (id) => {
  const [restaurants, setRestaurants] = useState();
  const [jsonData, setJsonData] = useState();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    let data = await fetch(FETCH_MENU_URL + id + "&submitAction=ENTER");
    let json = await data.json();
    setJsonData(
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setRestaurants(json.data.cards[0].card.card.info);
  }

  return [restaurants, jsonData];
};

export default useRestaurant;
