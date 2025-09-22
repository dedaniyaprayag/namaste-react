const styleCard = {
    backgroundColor: "#f0f0f0",
}



//const RestaurantCard = ({resName, cuisine}) => {
const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={styleCard}> 
            <img className="res-logo" src={resData.imgUrl}></img>
            <p>{resData.cuisine}</p>
            <p>{resData.rating} stars</p>
            <h3>{resData.resName}</h3>
        </div>
    )
}

export default RestaurantCard;