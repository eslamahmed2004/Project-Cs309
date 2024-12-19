import React from 'react';
import { Link } from "react-router-dom";
import "./Box.css"
import { Medicinesho } from '../Show/Medicinesho';

const Box = () => {
    return (
        <div className="card-box-container">
            {
                Medicinesho.map((med) => (
                    <div key={med.id} className="card">
                        <img src={"." + med.image} alt="ba" className="card-img-top" />
                        <h2 className="card-title">{med.title}</h2>
                        <p className="card-text">{med.description}</p>
                        <Link to={`/restaurant/${med.id}`} className="btn btn-primary">More Details</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Box;
