import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const BodyComponent = () => {
  const [listofRestaurants, setListofRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filteredList = listofRestaurants.filter((res) => res.rating > 4);

           setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((res) => {
          return <RestaurantCard key={res.resName} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default BodyComponent;
