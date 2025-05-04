import RestaurantCard from "./RestarantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4209228&lng=77.5267391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (!resList || resList.length === 0) {
    return <Shimmer />;
  }
  

  return (
    <div className="body">
      <div className="btn">
        <div className="search">
          <input type="text"
          className="search-box"
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
          />
          <button 
          onClick={() => {


          }}
          className="btn-search">Search</button>
          </div>
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
