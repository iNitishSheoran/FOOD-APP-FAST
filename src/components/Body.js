import RestaurantCard from "./RestarantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="btn">
            <button className="filter-btn">Top Rated Restaurant</button>
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