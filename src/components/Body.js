import RestaurantCard from "./RestarantCard";
import { useState } from "react";
import resListData from "../utils/mockData";

const Body = () => {
  const [resList, setResList] = useState(resListData);

  return (
    <div className="body">
      <div className="btn">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
