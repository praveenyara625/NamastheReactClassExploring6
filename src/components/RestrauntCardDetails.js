import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";

const RestrauntCardDetails = () => {
  const { id } = useParams();
  const [restaurants, jsonData] = useRestaurant(id);
  /*   console.log(restaurants);
  console.log(jsonData); */
  return (
    <div className="restaurant-list">
      <div className="card">
        <h4>Restraunt ID : {id}</h4>
        <img src={IMG_CDN_URL + restaurants?.cloudinaryImageId} />
        <h3>{restaurants?.name}</h3>
        <p>{restaurants?.cuisines && restaurants?.cuisines.join(",")}</p>
        <h4>{restaurants?.avgRating}</h4>
        <h4>{restaurants?.veg == true ? "vegitarian" : "non-veg"}</h4>
      </div>

      <div>
        <h4>Menu card </h4>
        {console.log(jsonData)}

        <ul>
          {jsonData?.map((item) => {
            return <li>{item.card.info.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntCardDetails;
