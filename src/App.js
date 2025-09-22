import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";


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

