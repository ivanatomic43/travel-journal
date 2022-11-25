import React from "react";
import data from "../data";
import {ImLocation} from 'react-icons/im'

const TravelCard = () => {

    const renderCards = data.map(function(card){
        return(
            <section key={card.id}>
                <img className="card-img" src={card.imageUrl} />

                <div className="card--div">
                    <div className="card-location">
                        <ImLocation className="card-icon"/>    
                        <h4 className="card-country">{card.location.toUpperCase()}</h4>
                        <a href={card.googleMapsUrl} className="card-google-maps-link">View on Google Maps</a>
                    </div>
                    <h1 className="card-location-title">{card.title}</h1>
                    <div className="card-details">
                        
                        <p className="card-date"> {card.startDate} - {card.endDate} </p>
                        <p className="card-description"> {card.description} </p>
                    </div>
                </div>
            </section>
        );
    });
    return(
        <div>{renderCards}</div>
    );
};

export default TravelCard;