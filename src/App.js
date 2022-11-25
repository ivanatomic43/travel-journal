import React from "react";
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import './styles/style.css';

const App = () => {
    return(
        <div className="main-div">
             <Navbar />
            <TravelCard />
        </div>
       
    );
};

export default App;