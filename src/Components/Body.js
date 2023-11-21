import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantData, setRestaurentData] = useState([]);
  const [filterRestaurent, setFilteredRestaurent]= useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.2919383&lng=77.355413&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const updatedData =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurentData(updatedData);
    setFilteredRestaurent(updatedData)
  };

  called = () => {
    restaurantData.map(() => {
      const newData = restaurantData.filter((res) => res.info.avgRating > 4);
      setRestaurentData(newData);
    });
  };

  const searchRes = () => {
    const filteredRestaurent = restaurantData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurent(filteredRestaurent);
    setSearchText("");
  };

  return filterRestaurent?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => searchRes()}> Search</button>
        <button className="filter-btn" onClick={() => called()}>
          Top Rated{" "}
        </button>
      </div>
      <div className="res-contaniner">
        {filterRestaurent?.map((restaurants) => (
          <RestaurantCard resData={restaurants} key={restaurants.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
