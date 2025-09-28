import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  //const [listofRestaurants, setListofRestaurants] = useState(resList);

  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(listofRestaurants);
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9939369&lng=77.5980282&str=Dosa&trackingId=undefined&submitAction=ENTER&queryUniqueId=404793e6-0992-5d3f-d976-0d3aa7ef02ce&selectedPLTab=RESTAURANT")

    const json = await data.json();

    console.log(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);

    setListofRestaurants(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);

    setFilteredRestaurants(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);

    console.log(resList);
    //setListofRestaurants(resList);
    console.log(json);  
  }

  // if(listofRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listofRestaurants.length === 0? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            className="search-box"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />
          <button onClick={() => {
            const filteredList = listofRestaurants.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilteredRestaurants(filteredList);

          }} className="search-btn">Search</button>
        </div>
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
        {filteredRestaurants.map((res) => {
          return <RestaurantCard key={res.card.card.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default BodyComponent;
