import RestaurantCard from "./RestarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [allResList, setAllResList] = useState([]); // Full original list
  const [resList, setResList] = useState([]);       // Filtered/shown list
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4209228&lng=77.5267391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    setAllResList(restaurants);
    setResList(restaurants);
  };

  if (!resList || resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="btn">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurants = allResList.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setResList(filteredRestaurants);
            }}
            className="btn-search"
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allResList.filter(
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
        <Link
        key={restaurant.info.id}
        to = {"/restaurants/" + restaurant.info.id} 
        >
          <RestaurantCard resdata={restaurant} />
        </Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
