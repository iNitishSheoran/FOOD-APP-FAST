import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resdata } = props;
  
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      resdata?.info || {};
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h2>{name}</h2>
  
        <h5>{cuisines?.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
      </div>
    );
  };

  export default RestaurantCard;