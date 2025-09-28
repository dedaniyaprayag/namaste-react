const styleCard = {
    backgroundColor: "#f0f0f0",
}



//const RestaurantCard = ({resName, cuisine}) => {
const RestaurantCard = (props) => {
    const {resData} = props;
    console.log(resData);
    const {name, cuisine, avgRatingString, cloudinaryImageId} = resData?.card?.card?.info;
    return (
        <div className="res-card" style={styleCard}> 
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}></img>
            <p>{cuisine}</p>
            <p>{avgRatingString} stars</p>
            <h3>{name}</h3>
        </div>
    )
}

export default RestaurantCard;