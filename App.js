import React from "react";
import ReactDOM from "react-dom/client";


//     const heading = React.createElement("h1", { id: "title" }, "Hello World from React");

//     // JSX - HTML like syntax. JSX is not HTML (Transpiled before it reaches the browser).
//     // Babel is a transpiler which converts JSX to react.createElement => React.createElement being React elemnt (object) => HTML element (render)
//     // Parcel is a bundler which takes modules with dependencies and generates static assets.
//     const jsxHeading = <h1 id="title">Hello from JSX</h1>;

//     console.log(heading);
//     console.log(jsxHeading);

//    // const root = ReactDOM.createRoot(document.getElementById("root"));

//    //    root.render(jsxHeading);


//     // React Component
//     // Two ways:
//     // Functional Component - New way
//     // Class Component - Old way

//     // Functional Component
//     // A function which returns JSX (React Element)
//     const HeaderComponent = () => {
//         return (
//             <header>
//                 <h1>Welcome to My Website</h1>
//             </header>
//         );
//     }

//     const HeaderComponent2 = () => (
//         <header className="header">
//             <h1>Welcome to My Website</h1>
//         </header>
//     );

//     const root = ReactDOM.createRoot(document.getElementById("root"));

//     root.render(<HeaderComponent />);

const HeaderComponent= () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

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

const resList = [{
    resName: "KFC",
    cuisine: "Fast Food",
    rating: 4.2,
    address: "MG Road, Bengaluru",
    imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/20/133914a4-e08a-4b66-b4fd-cc93684587e4_7f4a401f-5e31-4705-b625-8360c87bfd72.jpg"
},
{
    resName: "Dominos",
    cuisine: "Fast Food",
    rating: 4.2,
    address: "Kormangla Road, Bengaluru",
    imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/7/30/80c12d76-b7d8-4207-9e2b-b6126008aac8_1f49189f-d5c6-4470-8de6-b53d8e034ba7.png_compressed"
},
{
    resName: "Meghna Foods",
    cuisine: "Fast Food",
    rating: 4.2,
    address: "Jayanagar Road, Bengaluru",
    imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/21/39e9a28b-be1a-4764-8cfe-bb69e61448f4_102334.JPG"
}]

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">                
               {
                resList.map((res) => {
                    return <RestaurantCard key={res.resName} resData={res} />
                })
               }
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

