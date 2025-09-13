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

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}> 
            <img className="res-logo" src="https://t4.ftcdn.net/jpg/03/54/63/85/360_F_354638576_PmpJQdWJbkEEwp4oey4H19GPOAsj4N0J.jpg"></img>
            <p>Biryani, Kebab, Mughlai</p>
            <p>4.2 stars</p> 
            <h3>Meghna Foods</h3>
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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

