import React from 'react';
import { Drinkres } from "../Show/Drinkres";
import { Link } from "react-router-dom";
import "./Box.css"

const BoxDri = () => {
    return (
        <div className="card-box-container">
            {
                Drinkres.map((res) => (
                    <div key={res.id} className="card">
                        <img src={"." + res.image} alt="ba" className="card-img-top" />
                        <h2 className="card-title">{res.title}</h2>
                        <p className="card-text">{res.description}</p>
                        <Link to={`/restaurant/${res.id}`} className="btn btn-primary">More Details</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BoxDri;
