import { IMG_CDN_URL } from "../contants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestrauntCard;
